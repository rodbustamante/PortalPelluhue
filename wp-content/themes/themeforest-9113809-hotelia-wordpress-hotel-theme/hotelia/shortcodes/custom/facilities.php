<?php

class WPBakeryShortCode_facilities extends WPBakeryShortCode {

    protected function content($atts, $content = null) {
        $atts = vc_map_get_attributes( $this->getShortcode(), $atts );
        extract( $atts );
        $facilities = (array) vc_param_group_parse_atts( $facilities_items );

        $extra_class = $this->getExtraClass($el_class);
        $css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $this->getCSSAnimation($css_animation) . ' '.$extra_class.' '.vc_shortcode_custom_css_class( $css, ' ' ), $this->settings['base']);

        $output = '<div class="'.$css_class.'">';
        $output .= '<ul class="clean-list facilities-items text-center row">';

        if(!empty($facilities)) {
          foreach ($facilities as $key => $value) {
            $value = (object) $value;
            if( !empty( $value->facilities_link ) ) {
              $output .= sprintf('<li class="col-md-3 col-sm-4"><div class="facility-item"><div class="shape-square aquablue">
                  <figure><a href="%3$s">%1$s</a></figure>         
                </div><span class="uppercase font-300 text-white facility-text">%2$s</span></div>
                </li>', wp_get_attachment_image($value->facilities_img, 'full'), $value->facilities_title, $value->facilities_link );
            } else {
              $output .= sprintf('<li class="col-md-3 col-sm-4"><div class="facility-item"><div class="shape-square aquablue">
                    <figure>%1$s</figure>         
                  </div><span class="uppercase font-300 text-white facility-text">%2$s</span></div>
              </li>', wp_get_attachment_image($value->facilities_img, 'full'), $value->facilities_title);
              
            }
          }
        }

        $output .= '</ul></div>';


        // Template


        return $output;
    }
}