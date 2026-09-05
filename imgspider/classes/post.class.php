<?php


class WB_IMGSPY_Post extends IMGSPY_Base
{

    public static $last_err = null;

    protected static $mime_to_ext = array(
        'image/webp' => 'webp',
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/gif' => 'gif',
        'image/bmp' => 'bmp',
        'image/tiff' => 'tif',
        'image/avif' => 'avif',
        'image/apng' => 'apng',
    );

    protected static $ext_to_mime = array(
        'webp' => 'image/webp',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
        'bmp' => 'image/bmp',
        'tif' => 'image/tiff',
        'avif' => 'image/avif',
        'apng' => 'image/apng',
    );

    public static function supports_avif()
    {
        static $ok = null;
        if ($ok !== null) {
            return $ok;
        }
        $ok = function_exists('wp_image_editor_supports')
            && wp_image_editor_supports(array('mime_type' => 'image/avif'));
        return $ok;
    }

    public static function supports_apng()
    {
        $cnf = WB_IMGSPY_Conf::cnf('allow_apng', 1);
        return (int) $cnf === 1;
    }

    public static function collectable_exts()
    {
        $exts = array('jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tif');
        if (self::supports_avif()) {
            $exts[] = 'avif';
        }
        if (self::supports_apng()) {
            $exts[] = 'apng';
        }
        return apply_filters('imgspy_collectable_exts', $exts);
    }

    public static function normalize_source_url($url)
    {
        $url = trim((string) $url);
        if ($url === '') {
            return '';
        }
        $url = str_replace('&amp;', '&', $url);
        $parts = wp_parse_url($url);
        if (!$parts || empty($parts['host']) || empty($parts['scheme'])) {
            return '';
        }
        $scheme = strtolower($parts['scheme']);
        if ($scheme !== 'http' && $scheme !== 'https') {
            return '';
        }
        $host = strtolower($parts['host']);
        $path = isset($parts['path']) ? $parts['path'] : '/';
        $query = isset($parts['query']) ? $parts['query'] : '';
        $norm = $scheme . '://' . $host . $path;
        if ($query !== '') {
            $norm .= '?' . $query;
        }
        return $norm;
    }

    public static function find_reuse_attachment($image_url)
    {
        if (!apply_filters('imgspy_reuse_attachment', true, $image_url)) {
            return false;
        }
        $norm = self::normalize_source_url($image_url);
        if ($norm === '') {
            return false;
        }
        $db = self::db();
        $id = (int) $db->get_var($db->prepare(
            "SELECT post_id FROM $db->postmeta WHERE meta_key=%s AND meta_value=%s ORDER BY post_id DESC LIMIT 1",
            '_wb_imgspy_source',
            $norm
        ));
        if ($id < 1) {
            return false;
        }
        $file = get_attached_file($id);
        if (!$file || !file_exists($file)) {
            return false;
        }
        $meta = wp_get_attachment_metadata($id);
        $url = wp_get_attachment_url($id);
        if (!$url) {
            return false;
        }
        return array(
            'id' => $id,
            'url' => $url,
            'title' => get_the_title($id),
            'width' => isset($meta['width']) ? (int) $meta['width'] : 0,
            'height' => isset($meta['height']) ? (int) $meta['height'] : 0,
            'reused' => 1,
        );
    }

    public static function remember_source($attachment_id, $image_url)
    {
        $norm = self::normalize_source_url($image_url);
        if ($norm === '' || (int) $attachment_id < 1) {
            return;
        }
        if (strpos($norm, 'file://') === 0) {
            return;
        }
        update_post_meta($attachment_id, '_wb_imgspy_source', $norm);
    }

    public static function update_post($post_ID, $post, $update, $image_list, $img_html_list)
    {

        $content = $post->post_content;
        $cnf = WB_IMGSPY_Conf::opt();
        $idx = -1;
        foreach ($img_html_list as $r) {

            if (!isset($image_list[$r['key']])) {
                continue;
            }
            $idx++;
            $ret = $image_list[$r['key']];
            $mode = isset($r['mode']) ? $r['mode'] : 'tag';
            if ($mode === 'url' && !empty($r['html'])) {
                $content = str_replace($r['html'], esc_url($ret['url']), $content);
            } else {
                $new_html = self::img_html($ret, $idx, $post->post_title, $cnf);
                $content = str_replace($r['html'], $new_html, $content);
            }

            if (!$idx) {
                self::update_post_thumb($post_ID, $ret['id']);
            }
        }

        if ($cnf['del_src_url']) {
            $content = self::strip_image_links($content);
        }

        if ($idx > -1) {
            wp_update_post(array('ID' => $post_ID, 'post_content' => $content));
        }
    }

    public static function update_post_thumb($post_ID, $thumb_id)
    {

        $thumbnail = WB_IMGSPY_Conf::cnf('thumbnail');
        if (!$thumbnail) {
            return;
        }

        $_thumbnail_id = get_post_meta($post_ID, '_thumbnail_id', true);
        if ($_thumbnail_id) {
            return;
        }

        update_post_meta($post_ID, '_thumbnail_id', $thumb_id);
    }

    public static function upload_image_name($image_url)
    {

        $image_path = wp_parse_url($image_url, PHP_URL_PATH);
        $filename = basename((string) $image_path);
        $ext_group = implode('|', self::collectable_exts());
        if (!preg_match('#\.(' . $ext_group . ')$#i', $filename)) {
            $ext = '.jpg';
            if (preg_match('#wx_fmt=([a-z0-9]+)#i', $image_url, $m)) {
                if (preg_match('#^(' . $ext_group . ')$#i', $m[1])) {
                    $ext = '.' . strtolower($m[1]);
                }
            }
            $filename .= $ext;
        }

        $filename = urldecode($filename);
        $filename = str_replace(array('%20', ' '), '_', $filename);
        $filename = str_replace('*', '', $filename);

        add_filter('upload_mimes', function ($mimes) {
            $site_exts = self::collectable_exts();
            $site_mimes = array();
            foreach ($site_exts as $ext) {
                foreach ($mimes as $ext_pattern => $mime) {
                    if ('' !== $ext && strpos($ext_pattern, $ext) !== false) {
                        $site_mimes[$ext_pattern] = $mime;
                    }
                }
            }
            if (self::supports_avif() && !isset($site_mimes['avif'])) {
                $site_mimes['avif'] = 'image/avif';
            }
            if (self::supports_apng() && !isset($site_mimes['apng'])) {
                $site_mimes['apng'] = 'image/apng';
            }
            return $site_mimes;
        });
        $validate = wp_check_filetype($filename);
        if ($validate['type'] === false) {
            $filename .= '.jpg';
        }

        $config = WB_IMGSPY_Conf::opt();

        $rule = $config['rule'];
        if ($rule['file_name'] == '2' && $rule['custom_name']) {
            $pos = strrpos($filename, '.');
            $ext = substr($filename, $pos);
            $name = substr($filename, 0, $pos);

            $ymd = explode('-', current_time('Y-m-d'));
            $random = self::random(5);
            $search = array('%filename%', '%date%', '%year%', '%month%', '%day%', '%random%');
            $replace = array($name, implode('', $ymd), $ymd[0], $ymd[1], $ymd[2], $random);
            $filename = str_replace($search, $replace, $rule['custom_name']) . $ext;
        }

        return $filename;
    }


    public static function random($num = 5)
    {
        $str = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $len = strlen($str);
        $a = array();
        for ($i = 0; $i < $num; $i++) {
            $j = wp_rand(0, $len - 1);
            $a[] = $str[$j];
        }
        return implode('', $a);
    }

    public static function upload_img_file($file_id, $post_id, $post_date, &$error = null)
    {
        if (!isset($_FILES[$file_id]) || empty($_FILES[$file_id])) {
            $error = 'empty file';
            return false;
        }
        $file = $_FILES[$file_id];
        if (isset($file['error']) && $file['error'] > 0) {
            $error = 'error [' . $file['error'] . ']';
            return false;
        }
        if (!isset($file['tmp_name']) || !$file['tmp_name']) {
            $error = 'empty tmp file';
            return false;
        }
        $filename = self::param('filename');
        if ($filename) {
            $file['name'] = sanitize_text_field($filename);
        }

        if (!$file['name']) {
            $error = 'empty file name';
            return false;
        }
        $ext_group = implode('|', self::collectable_exts());
        if (!preg_match('#(' . $ext_group . ')$#i', $file['type']) && !preg_match('#\.(' . $ext_group . ')$#i', $file['name'])) {
            $error = 'not image file';
            return false;
        }

        $image_url = 'file://fackpath/' . $file['name'];

        return self::save_image_data($file['tmp_name'], $image_url, $post_id, $post_date, true);
    }

    public static function upload_img_base64($dataurl, $post_id, $post_date)
    {

        list($data, $image) = explode(';', $dataurl);
        list($field, $type) = explode(':', $data);
        list($encoding, $content) = explode(',', $image);
        $extension = '';
        if ($type == 'image/png') {
            $extension = 'png';
        } else if ($type == 'image/jpeg') {
            $extension = 'jpg';
        } else if ($type == 'image/webp') {
            $extension = 'webp';
        } else if ($type == 'image/avif' && self::supports_avif()) {
            $extension = 'avif';
        } else if ($type == 'image/apng' && self::supports_apng()) {
            $extension = 'apng';
        } else {
            return false;
        }
        $name = md5($dataurl);
        $filename = self::param('filename');
        if ($filename) {
            $name = sanitize_text_field($filename);
        }

        $ext_group = implode('|', self::collectable_exts());
        if (!preg_match('#\.(' . $ext_group . ')$#i', $name)) {
            $name = $name . '.' . $extension;
        }

        $image_url = 'file://fackpath/' . $name;

        return self::save_image_data(base64_decode($content), $image_url, $post_id, $post_date);
    }

    public static function upload($image_url, $post_id, $post_date)
    {
        $reuse = self::find_reuse_attachment($image_url);
        if ($reuse) {
            return $reuse;
        }

        $arg = array();
        if ($_SERVER && isset($_SERVER['HTTP_USER_AGENT'])) {
            $arg['user-agent'] = $_SERVER['HTTP_USER_AGENT'];
        }

        @ini_set('memory_limit', '50M');

        $image_data = WB_IMGSPY_Down::down($image_url, $arg);

        if (!$image_data) {
            self::$last_err = WB_IMGSPY_Down::$last_err;
            return $image_data;
        }

        return self::save_image_data($image_data, $image_url, $post_id, $post_date);
    }

    public static function is_animated_image($file, $mime_type)
    {
        if (!is_readable($file)) {
            return false;
        }
        $mime_type = strtolower((string) $mime_type);
        $head = (string) file_get_contents($file, false, null, 0, 4096);
        if ($head === '') {
            return false;
        }
        if (strpos($mime_type, 'gif') !== false) {
            return preg_match('#\x00\x21\xF9\x04.{4}\x00[\x2C\x21]#s', $head) && substr_count($head, "\x00\x21\xF9\x04") > 1;
        }
        if (strpos($mime_type, 'webp') !== false) {
            return strpos($head, 'ANIM') !== false || strpos($head, 'ANMF') !== false;
        }
        if (strpos($mime_type, 'png') !== false || strpos($mime_type, 'apng') !== false) {
            return strpos($head, 'acTL') !== false;
        }
        if (strpos($mime_type, 'avif') !== false) {
            return (bool) preg_match('#avis|animation#i', $head);
        }
        return false;
    }

    public static function maybe_convert_webp($file, &$mime_type, &$filename)
    {
        $on = (int) WB_IMGSPY_Conf::cnf('convert_webp', 0);
        if (!$on) {
            return $file;
        }
        if (!apply_filters('imgspy_convert_webp', true, $file, $mime_type)) {
            return $file;
        }
        if (self::is_animated_image($file, $mime_type)) {
            return $file;
        }
        if (strpos((string) $mime_type, 'webp') !== false) {
            return $file;
        }
        if (!function_exists('wp_image_editor_supports') || !wp_image_editor_supports(array('mime_type' => 'image/webp'))) {
            return $file;
        }
        $editor = wp_get_image_editor($file);
        if (is_wp_error($editor)) {
            return $file;
        }
        $dest = preg_replace('#\.[a-z0-9]+$#i', '.webp', $file);
        $saved = $editor->save($dest, 'image/webp');
        if (is_wp_error($saved) || empty($saved['path'])) {
            return $file;
        }
        if ($saved['path'] !== $file && file_exists($file)) {
            @unlink($file);
        }
        $mime_type = 'image/webp';
        $filename = preg_replace('#\.[a-z0-9]+$#i', '.webp', $filename);
        return $saved['path'];
    }

    private static function save_image_data($image_data, $image_url, $post_id, $post_date, $upload = false)
    {
        do {
            $filename = self::upload_image_name($image_url);
            $time = false;
            if ($post_date) {
                $time = gmdate('Y/m', strtotime($post_date));
            }
            $uploads = wp_upload_dir($time);

            $filename = urldecode($filename);
            $filename = str_replace(array('%20', ' '), '_', $filename);
            $unique_filename_callback = null;
            $filename = wp_unique_filename($uploads['path'], $filename, $unique_filename_callback);

            $new_file = $uploads['path'] . '/' . $filename;

            if ($upload) {
                $move_new_file = @move_uploaded_file($image_data, $new_file);
                if (!$move_new_file) {
                    self::$last_err = 'save new file fail';
                    break;
                }
            } else {
                if (!file_put_contents($new_file, $image_data)) {
                    self::$last_err = 'save new file fail';
                    break;
                }
            }

            $url = $uploads['url'] . '/' . $filename;

            $name_parts = pathinfo($filename);

            $name = $name_parts['filename'];

            $title = $name;
            $content = '';

            $ret = array(
                'title' => $title,
                'url' => $url,
            );

            $mine_type = wp_get_image_mime($new_file);

            if (!$mine_type && isset($name_parts['extension']) && isset(self::$ext_to_mime[$name_parts['extension']])) {
                $mine_type = self::$ext_to_mime[$name_parts['extension']];
            }

            if ($mine_type === 'image/svg+xml' || (isset($name_parts['extension']) && strtolower($name_parts['extension']) === 'svg')) {
                @unlink($new_file);
                self::$last_err = 'svg not allowed';
                break;
            }

            if (strpos((string) $mine_type, 'avif') !== false && !self::supports_avif()) {
                @unlink($new_file);
                self::$last_err = 'avif not supported';
                break;
            }

            $converted = self::maybe_convert_webp($new_file, $mine_type, $filename);
            if ($converted !== $new_file) {
                $new_file = $converted;
                $url = $uploads['url'] . '/' . $filename;
                $ret['url'] = $url;
                $ret['title'] = pathinfo($filename, PATHINFO_FILENAME);
            }

            WB_IMGSPY_Image::resize_image($new_file, $mine_type);

            $attachment = array(
                'post_mime_type' => $mine_type,
                'guid' => $url,
                'post_parent' => $post_id,
                'post_title' => $ret['title'],
                'post_content' => $content
            );

            $id = wp_insert_attachment($attachment, $new_file, $post_id);

            if (is_wp_error($id)) {
                self::$last_err = 'insert attachment fail [' . $id->get_error_message() . ']';
                return $ret;
            }

            $ret['id'] = $id;
            self::remember_source($id, $image_url);

            if (!function_exists('wp_generate_attachment_metadata')) {
                require_once ABSPATH . 'wp-admin/includes/image.php';
            }
            if (!function_exists('wp_crop_image')) {
                require_once ABSPATH . 'wp-admin/includes/image.php';
            }

            $metadata = wp_generate_attachment_metadata($id, $new_file);
            if (!$metadata) {
                self::$last_err = 'generate attachment meta data fail ';
                return $ret;
            }

            if (is_wp_error($metadata)) {
                self::$last_err = 'generate attachment meta data fail [' . $metadata->get_error_message() . ']';
                return $ret;
            } else if (!isset($metadata['file'])) {
                self::$last_err = 'generate attachment meta data fail [empty file]';
                return $ret;
            } else {
                wp_update_attachment_metadata($id, $metadata);
                $ret['width'] = $metadata['width'];
                $ret['height'] = $metadata['height'];
            }
            return $ret;
        } while (false);

        return false;
    }


    public static function img_html($ret, $idx, $post_title, $config)
    {

        $align = 'none';
        $rule = isset($config['rule']) ? $config['rule'] : array();
        if (!empty($rule['align'])) {
            $align = $rule['align'];
        }

        if (!empty($rule['title_alt']) && (string) $rule['title_alt'] === '1') {
            $alt_title = str_replace(
                array('%filename%', '%postname%'),
                array($ret['title'], $post_title),
                isset($rule['custom_title']) ? $rule['custom_title'] : ''
            ) . '-' . ($idx + 1);
        } else {
            $alt_title = $ret['title'];
        }

        $attr = array(
            'class' => 'align' . $align . ' size-full',
            'alt' => $alt_title,
            'title' => $alt_title,
        );
        if (!empty($ret['id'])) {
            $attr['class'] .= ' wp-image-' . (int) $ret['id'];
            $html = wp_get_attachment_image((int) $ret['id'], 'full', false, $attr);
            if ($html) {
                return $html;
            }
        }

        $img_html = '<img class="' . esc_attr($attr['class']) . '" src="' . esc_url($ret['url']) . '"';
        if (!empty($ret['width'])) {
            $img_html .= ' width="' . (int) $ret['width'] . '"';
        }
        if (!empty($ret['height'])) {
            $img_html .= ' height="' . (int) $ret['height'] . '"';
        }
        $img_html .= ' alt="' . esc_attr($alt_title) . '" title="' . esc_attr($alt_title) . '" />';

        return $img_html;
    }

    public static function strip_image_links($content)
    {
        if (!is_string($content) || $content === '') {
            return $content;
        }
        if (!preg_match_all('#(<a[^>]+>)\s*(<img[^>]+>)\s*</a>#is', $content, $match)) {
            return $content;
        }
        foreach ($match[0] as $k => $full) {
            $content = str_replace($full, $match[2][$k], $content);
        }
        return $content;
    }

    protected static function should_skip_url($img, $cnf, $allow_domain, $file_ext)
    {
        if (!preg_match('#^https?://#is', $img)) {
            return true;
        }
        foreach ($allow_domain as $domain) {
            if ($domain && strpos($img, $domain) !== false) {
                return true;
            }
        }
        $img_name = self::upload_image_name($img);
        if ($file_ext) {
            foreach ($file_ext as $ext) {
                if (preg_match('#\.' . preg_quote($ext, '#') . '#i', $img_name)) {
                    return true;
                }
            }
        }
        $ext_group = implode('|', self::collectable_exts());
        $path = (string) wp_parse_url($img, PHP_URL_PATH);
        if (preg_match('#\.svg(\?|$)#i', $path)) {
            return true;
        }
        if (preg_match('#\.avif(\?|$)#i', $path) && !self::supports_avif()) {
            return true;
        }
        if (preg_match('#\.apng(\?|$)#i', $path) && !self::supports_apng()) {
            return true;
        }
        return false;
    }

    protected static function push_found(&$img_list, &$find_img_html, $img, $snippet, $mode)
    {
        $img = rawurldecode($img);
        $img = str_replace('&amp;', '&', $img);
        $key = md5($img);
        $img_list[$key] = $img;
        $find_img_html[] = array(
            'key' => $key,
            'html' => $snippet,
            'mode' => $mode,
        );
    }

    public static function find_img_src($post, &$find_img_html = array())
    {

        $cnf = WB_IMGSPY_Conf::opt();
        $content = $post->post_content;
        if (!$content) {
            return false;
        }

        $host_name = wp_parse_url(home_url(), PHP_URL_HOST);
        $host_name = str_replace('www.', '', (string) $host_name);

        $allow_domain = array();
        if (!isset($cnf['filter'])) {
            $cnf['filter'] = array();
        }
        $filter = $cnf['filter'];
        if (isset($filter['domain']) && $filter['domain'] && is_array($filter['domain'])) {
            $allow_domain = $filter['domain'];
        }
        array_push($allow_domain, $host_name);

        $file_ext = array();
        if (isset($filter['type']) && $filter['type']) {
            if (is_array($filter['type'])) {
                foreach ($filter['type'] as $type => $active) {
                    if ($active) {
                        $file_ext[] = $type;
                    }
                }
            }
        }

        $except_index = array();
        if (isset($filter['except_index']) && $filter['except_index']) {
            $except_index = explode(',', $filter['except_index']);
        }

        $min_width = intval(isset($filter['min_width']) ? $filter['min_width'] : 0);

        $img_list = array();
        $img_tags = array();
        if (preg_match_all('#<img[^>]+>#is', $content, $match)) {
            $img_tags = $match[0];
        }
        if (in_array('z', $except_index, true)) {
            $except_index[] = (string) count($img_tags);
        }

        foreach ($img_tags as $k => $img_html) {
            if ($except_index && in_array((string) ($k + 1), $except_index, true)) {
                continue;
            }

            if (preg_match('#data-src=([^\s]+)#is', $img_html, $img_match)) {
            } else if (preg_match('#src=([^\s]+)#is', $img_html, $img_match)) {
            } else {
                continue;
            }
            $img_src = trim(preg_replace('#/?>$#', '', $img_match[1]), '\'"');
            if (self::should_skip_url($img_src, $cnf, $allow_domain, $file_ext)) {
                continue;
            }

            if ($min_width && preg_match('#width=([^\s]+)#i', $img_html, $width_match)) {
                $width = intval(trim($width_match[1], "\"'"));
                if ($width && $width < $min_width) {
                    continue;
                }
            }

            self::push_found($img_list, $find_img_html, $img_src, $img_html, 'tag');
        }

        if (preg_match_all('#(?:srcset|data-srcset)=([\'"])([^\'"]+)\1#i', $content, $srcset_m)) {
            foreach ($srcset_m[2] as $srcset) {
                if (!preg_match_all('#https?://[^\s,]+#i', $srcset, $urls)) {
                    continue;
                }
                foreach ($urls[0] as $u) {
                    $u = rtrim($u, ',');
                    if (self::should_skip_url($u, $cnf, $allow_domain, $file_ext)) {
                        continue;
                    }
                    self::push_found($img_list, $find_img_html, $u, $u, 'url');
                }
            }
        }

        if (preg_match_all('#background-image\s*:\s*url\((["\']?)(https?://[^)\'"]+)\1\)#i', $content, $bg_m)) {
            foreach ($bg_m[2] as $u) {
                if (self::should_skip_url($u, $cnf, $allow_domain, $file_ext)) {
                    continue;
                }
                self::push_found($img_list, $find_img_html, $u, $u, 'url');
            }
        }

        return $img_list ? $img_list : false;
    }
}
