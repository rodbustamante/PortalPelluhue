<?php

class WPBakeryShortCode_booking_form extends WPBakeryShortCode {

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

        $output = $form = $room_search = '';

        $button_css = vc_shortcode_custom_css_class($button_css, ' ');

        // Template

        $container = '<div class="dark-blue booking-form %s">%s</div>';

        $room_search = locate_template( 'room-searchform.php' );

        if('' != $room_search) {
          ob_start();
          require($room_search);
          $form = ob_get_clean();
          $form = str_replace('<button type="submit" class="', '<button type="submit" class="%s ', $form);
          $form = sprintf($form, $button_css);
        }

        $output = sprintf($container, $css_class, $form);

        return $output;
    }
}