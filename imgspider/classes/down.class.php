<?php


class WB_IMGSPY_Down
{

    private static $use_proxy_serv = false;
    public static $last_err = null;


    public static function down($url,$args = array()){
        if (!IMGSPY_Base::is_allowed_remote_url($url)) {
            self::$last_err = 'remote url blocked';
            return false;
        }

        $host = '';
        if(preg_match('#^https?://[^/]+/#i',$url,$m)){
            $host = $m[0];
        }
        $defaults = array(
            'timeout' => 30,
            'redirection' => 5,
            'headers' => array(
                'Referer'=>$host,
            ),
            'user-agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Safari/605.1.15',
            'sslverify' => IMGSPY_Base::sslverify(),
        );
        $http_options = wp_parse_args( $args, $defaults );
        $http_options['sslverify'] = IMGSPY_Base::sslverify();

        add_filter('http_request_host_is_external', array(__CLASS__, 'filter_external_host'), 10, 3);

        set_time_limit ( 300 );

        $http = wp_remote_get ( $url, $http_options );

        remove_filter('http_request_host_is_external', array(__CLASS__, 'filter_external_host'), 10);

        if(is_wp_error($http)){
            self::$last_err = 'remote request error ['.$http->get_error_message().']';
            if(function_exists('clog')){
                clog(self::$last_err);
            }
            return false;
        }

        $final_url = wp_remote_retrieve_header($http, 'x-final-location');
        if (!$final_url && isset($http['http_response']) && is_object($http['http_response']) && method_exists($http['http_response'], 'get_response_object')) {
            $resp_obj = $http['http_response']->get_response_object();
            if (is_object($resp_obj) && !empty($resp_obj->url)) {
                $final_url = $resp_obj->url;
            }
        }
        if ($final_url && !IMGSPY_Base::is_allowed_remote_url($final_url)) {
            self::$last_err = 'remote url blocked';
            return false;
        }

        $code = wp_remote_retrieve_response_code($http);
        if($code === 200){
            if(isset($http_options['stream']) && $http_options['stream']){
                return $http;
            }
            return wp_remote_retrieve_body($http);
        }
        self::$last_err = 'down fail,response code '.$code;
        return false;
    }

    public static function filter_external_host($is_external, $host, $url)
    {
        if (!IMGSPY_Base::is_allowed_remote_url($url)) {
            return false;
        }
        return $is_external;
    }


    public static function set_proxy($use_proxy = null){
        IMGSPY_Admin::txt_log($use_proxy);
        if($use_proxy!==null){
            if($use_proxy == 'wb'){
                $proxy = array('type'=>'wb');
            }else{
                $proxy = WB_IMGSPY_Conf::cnf('proxy_manual.'.$use_proxy);
                if(!$proxy){
                    return;
                }
                $proxy['type'] = 'ip';
            }
        }else{
            $proxy = WB_IMGSPY_Conf::get_proxy();
        }

        IMGSPY_Admin::txt_log($proxy);
        if(!$proxy){
            return;
        }


        if($proxy['type']=='wb'){
            self::$use_proxy_serv = true;
            return;
        }

        if (isset($proxy['ip']) && $proxy['ip'] && !defined('WP_PROXY_HOST') ){
            define('WP_PROXY_HOST', $proxy['ip']);
        }
        if (isset($proxy['port']) && $proxy['port'] && !defined('WP_PROXY_PORT')){
            define('WP_PROXY_PORT', $proxy['port']);
        }
        if(isset($proxy['user']) && $proxy['user'] && !defined('WP_PROXY_USERNAME')){
            define('WP_PROXY_USERNAME',$proxy['user']);
        }
        if(isset($proxy['pwd']) && $proxy['pwd'] && !defined('WP_PROXY_PASSWORD')){
            define('WP_PROXY_PASSWORD',$proxy['pwd']);
        }
    }


}
