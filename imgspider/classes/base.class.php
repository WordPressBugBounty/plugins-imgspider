<?php


class IMGSPY_Base
{

    public static function param($key, $default = '', $type = 'p'){
        if('p' === $type){
            if(isset($_POST[$key])){
                return $_POST[$key];
            }
            return $default;
        } else if ('g' === $type){
            if(isset($_GET[$key])){
                return $_GET[$key];
            }
            return $default;
        }
        if(isset($_POST[$key])){
            return $_POST[$key];
        }
        if(isset($_GET[$key])){
            return $_GET[$key];
        }
        return $default;
    }
    /**
     * @see wpdb
     * @return mixed
     */
    public static function db()
    {
        static $db = null;
        if($db){
            return $db;
        }
        $db = $GLOBALS['wpdb'];
        if($db instanceof wpdb){
            return $db;
        }
        return $db;
    }

    public static function ajax_resp($ret)
    {
        header('content-type:text/json;charset=utf-8');
        echo wp_json_encode($ret);
        exit();
    }

    public static function sslverify()
    {
        return (bool) apply_filters('imgspy_sslverify', true);
    }

    public static function is_allowed_remote_url($url)
    {
        $filtered = apply_filters('imgspy_allowed_remote_url', null, $url);
        if (true === $filtered) {
            return true;
        }
        if (false === $filtered) {
            return false;
        }

        $url = trim((string) $url);
        if ($url === '' || preg_match('#^(file|ftp|gopher|data|php|dict|expect|phar):#i', $url)) {
            return false;
        }

        $parts = wp_parse_url($url);
        if (!$parts || empty($parts['scheme']) || empty($parts['host'])) {
            return false;
        }

        $scheme = strtolower($parts['scheme']);
        if (!in_array($scheme, array('http', 'https'), true)) {
            return false;
        }

        $host = strtolower($parts['host']);
        $host = trim($host, '[]');
        $blocked_hosts = array(
            'localhost',
            'localhost.localdomain',
            'metadata.google.internal',
            'metadata.google.com',
        );
        if (in_array($host, $blocked_hosts, true)) {
            return false;
        }

        if (self::is_blocked_ip($host)) {
            return false;
        }

        $ips = array();
        if (filter_var($host, FILTER_VALIDATE_IP)) {
            $ips[] = $host;
        } else {
            $resolved = @gethostbynamel($host);
            if (is_array($resolved)) {
                $ips = $resolved;
            }
        }
        foreach ($ips as $ip) {
            if (self::is_blocked_ip($ip)) {
                return false;
            }
        }

        return true;
    }

    public static function is_blocked_ip($ip)
    {
        $ip = strtolower(trim((string) $ip, '[]'));
        if ($ip === '::1' || $ip === '0.0.0.0') {
            return true;
        }
        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            $long = ip2long($ip);
            if ($long === false) {
                return true;
            }
            $ranges = array(
                array('0.0.0.0', '0.255.255.255'),
                array('10.0.0.0', '10.255.255.255'),
                array('100.64.0.0', '100.127.255.255'),
                array('127.0.0.0', '127.255.255.255'),
                array('169.254.0.0', '169.254.255.255'),
                array('172.16.0.0', '172.31.255.255'),
                array('192.0.0.0', '192.0.0.255'),
                array('192.168.0.0', '192.168.255.255'),
                array('198.18.0.0', '198.19.255.255'),
            );
            foreach ($ranges as $range) {
                $start = ip2long($range[0]);
                $end = ip2long($range[1]);
                if ($long >= $start && $long <= $end) {
                    return true;
                }
            }
            return false;
        }
        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
            if (stripos($ip, 'fe80:') === 0 || stripos($ip, 'fc') === 0 || stripos($ip, 'fd') === 0) {
                return true;
            }
            if (!@filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return true;
            }
        }
        return false;
    }

    public static function sanitize_post_types($types)
    {
        if (!is_array($types)) {
            $types = array($types);
        }
        $allowed = array();
        $public = get_post_types(array('public' => true), 'names');
        foreach ($types as $type) {
            $type = sanitize_key((string) $type);
            if ($type && isset($public[$type])) {
                $allowed[] = $type;
            }
        }
        return array_values(array_unique($allowed));
    }

    public static function sanitize_post_statuses($statuses)
    {
        if (!is_array($statuses)) {
            $statuses = array($statuses);
        }
        $allowed = array();
        $known = get_post_stati();
        foreach ($statuses as $status) {
            $status = sanitize_key((string) $status);
            if ($status && isset($known[$status])) {
                $allowed[] = $status;
            }
        }
        return array_values(array_unique($allowed));
    }

    public static function sql_in($db, $column, $values, $format = '%s')
    {
        if (!is_array($values) || !$values) {
            return $db->prepare($column . ' = %s', '');
        }
        $placeholders = implode(',', array_fill(0, count($values), $format));
        return $db->prepare($column . ' IN (' . $placeholders . ')', $values);
    }

    public static function prepare_in_ids($ids)
    {
        $clean = array();
        if (!is_array($ids)) {
            $ids = array($ids);
        }
        foreach ($ids as $id) {
            $id = absint($id);
            if ($id > 0) {
                $clean[] = $id;
            }
        }
        $clean = array_values(array_unique($clean));
        if (!$clean) {
            return '0';
        }
        return implode(',', $clean);
    }

}