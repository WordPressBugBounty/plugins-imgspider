<?php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;

delete_option('wb_imgspider_option');
delete_option('wb_imgspy_history');
delete_option('wb_imgspy_history_post_id');
delete_option('wb_imgspy_scan');

$ver = get_option('wb_imgspider_ver', 0);
if ($ver) {
    delete_option('wb_imgspider_cnf_' . $ver);
}
delete_option('wb_imgspider_ver');

if (isset($wpdb->postmeta)) {
    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->postmeta} WHERE meta_key IN (%s, %s)",
            'wb_imgspy_auto_save_image',
            'imgspy_errors'
        )
    );
}

wp_clear_scheduled_hook('wb_imgspy_auto_save_image');
wp_clear_scheduled_hook('wb_imgspy_watermark_image');
