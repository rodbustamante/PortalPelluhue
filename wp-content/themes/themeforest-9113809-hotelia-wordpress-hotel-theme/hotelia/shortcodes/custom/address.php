<?php

class WPBakeryShortCode_address extends WPBakeryShortCode {

    protected function content($atts, $content = null) {

        extract(shortcode_atts(array(
          'el_class'   => '',
          'css_animation' => '',
          'css'           => '',
          'street'        => '',
          'phone'         => '',
          'email'         => '',

        ), $atts));

        $street_data = $phone_data = $email_data = '';

        $extra_class = $this->getExtraClass($el_class);
        $css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $this->getCSSAnimation($css_animation) . ' '.$extra_class.' '.vc_shortcode_custom_css_class( $css, ' ' ), $this->settings['base']);
        
        $output = '<div class="grey contact-data '.$css_class.'">';
        $output .= '<ul class="row clean-list">';

        if(!empty($street)) {
          $street = explode('|', $street);
          foreach ($street as $key => $value) {
            $street_data .= sprintf('<span>%s</span>', $value);
          }
        }

        $street_data = sprintf('<li class="col-md-4"><div class="center-me"><i class="icon-338 font-3x"></i>%s</div></li>', $street_data);

        if(!empty($phone)) {
          $phone = explode('|', $phone);
          foreach ($phone as $key => $value) {
            $phone_data .= sprintf('<span>%s</span>', $value);
          }
        }

        $phone_data = sprintf('<li class="col-md-4"><div class="center-me"><i class="icon-402 font-3x"></i>%s</div></li>', $phone_data);

        if(!empty($email)) {
          $email = explode('|', $email);
          foreach ($email as $key => $value) {
            $email_data .= sprintf('<span>%s</span>', $value);
          }
        }
        $email_data = sprintf('<li class="col-md-4"><div class="center-me"><i class="icon-274 font-3x"></i>%s</div></li>', $email_data);

        $output .= $street_data.$phone_data.$email_data.'</ul></div>';


        // Template


        return $output;
    }
}