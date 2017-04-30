<?php

class WPBakeryShortCode_photo_show extends WPBakeryShortCode {

    protected function content($atts, $content = null) {

        extract(shortcode_atts(array(
          'el_class'   => '',
          'css_animation' => '',
          'css'           => '',
          'images'        => ''

        ), $atts));

        $extra_class = $this->getExtraClass($el_class);
        $css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $this->getCSSAnimation($css_animation) . ' '.$extra_class.' '.vc_shortcode_custom_css_class( $css, ' ' ), $this->settings['base']);

        $images = explode( ',', $images );
        $output = '<div class="'.$css_class.'">';
        $output .= '<ul class="clean-list gallery-items row">';

        if(!empty($images)) {
          foreach ($images as $key => $value) {
            $attachment = get_post( $value );

            $image_html = wp_get_attachment_image_src($value, 'full');

            $output .= sprintf('<li class="col-md-3"><div class="shape-square middle-corners">
                <a href="%2$s" class="zoom-image">%1$s</a>
                </div></li>', wp_get_attachment_image($value, 'full'), $image_html[0]);
          }
        }

        $output .= '</ul></div>';


        // Template


        return $output;
    }
}