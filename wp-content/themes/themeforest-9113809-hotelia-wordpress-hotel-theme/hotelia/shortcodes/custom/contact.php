<?php

class WPBakeryShortCode_contact_form extends WPBakeryShortCode {

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
          'input_size' => '8',
          'contact_name' => '',
          'contact_email' => '',
          'contact_web' => '',
          'contact_text' => 'Message',
          'text_size' => '12',
          'button_css' => '',
          'button_name' => 'Send',
          'extra_class' => '',
          'css_animation' => '',
          'css' => '',

        ), $atts));

        $extra_class = $this->getExtraClass($extra_class);
        $css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class($css, ' '). $this->getCSSAnimation($css_animation), $this->settings['base']);

        $output = '';

        // Template
        $container = '<form id="contact-from" action="#" class="contact-form row %9$s">';

        if(!empty($contact_name)) {
          $container .= '<p class="col-md-%1$s">
            <input type="text" name="contact_name" placeholder="%2$s">
          </p>';
        }
        if(!empty($contact_email)) {
          $container .= '<p class="col-md-%1$s">
            <input type="email" name="contact_email" placeholder="%3$s">
          </p>';
        }
         if(!empty($contact_web)) {
          $container .= '<p class="col-md-%1$s">
            <input type="text" name="contact_name" placeholder="%4$s">
          </p>';
        }
        $container .= '<p class="col-md-%6$s">
            <textarea name="contact_mess" placeholder="%5$s"></textarea>
          </p>
          <p class="col-md-12">
            <span class="result-message text-red"></span>
            <button type="submit" class="button-md uppercase to-right hover-dark-green green text-white soft-corners long-button %7$s"><i class="icon-274"></i>%8$s</button>
          </p>
        </form>';

       

        // Output

       $output = sprintf($container, $input_size, $contact_name, $contact_email, $contact_web, $contact_text, $text_size, vc_shortcode_custom_css_class($button_css, ' '), $button_name, $css_class);



        //  $content = wpb_js_remove_wpautop($content);

        return $output;
    }
}