<?php

class WPBakeryShortCode_review_form extends WPBakeryShortCode {

    /*
     * This methods returns HTML code for frontend representation of your shortcode.
     * You can use your own html markup.
     *
     * @param $atts - shortcode attributes
     * @param @content - shortcode content
     *
     * @access protected
     *
     * @return string
     */

    protected function content($atts, $content = null) {

        extract(shortcode_atts(array(
          'extra_class' => '',
          'css_animation' => '',
          'css' => '',
          'button_css' => ''

        ), $atts));

        $extra_class = $this->getExtraClass($extra_class);
        $css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class($css, ' '). $this->getCSSAnimation($css_animation), $this->settings['base']);

        $output = $rooms_arr = $rooms_li = '';

        $button_css = vc_shortcode_custom_css_class($button_css, ' ');

        // Template

        ob_start();
        comments_template();
        $output = ob_get_contents();
        ob_end_clean();

        $str_to_translate = esc_html__( 'Write a review', 'hotelia' );

        $output = str_replace('<i class="icon-3"></i> Add a comment'
            , '<i class="icon-366"></i>' . $str_to_translate, $output);

        //  $content = wpb_js_remove_wpautop($content);

        return $output;
    }
}