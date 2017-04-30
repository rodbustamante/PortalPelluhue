<?php

// Icon Param

function generate_font_icon($settings, $value) {
   $dependency = vc_generate_dependencies_attributes($settings);

   $icons_container = '<div class="icons-container"><ul id="icon-picker" class="icon-grid">%1$s</ul></div>';
   $icon_item = '<li class="icon-holder-%1$s" data-icon-id="%1$s">
   					<label><input name="'.$settings['param_name']
             .'" class="wpb-textinput %3$s '
             .$settings['param_name'].' '.$settings['type'].'_field" type="radio" value="%1$s" ' . $dependency . ' onclick="jQuery(\'#icon-picker .wpb_vc_param_value\').removeClass(\'wpb_vc_param_value\');jQuery(this).addClass(\'wpb_vc_param_value\')" %2$s /><i class="icon-%1$s"></i></label></li>';
   $icons = '';

   if(!empty($settings['icons_count'])) {
   		for ($i=1; $i <= $settings['icons_count'] ; $i++) {
   			$checked = ($value == $i) ? 'checked' : '';
        $val_class = ($value == $i) ? 'wpb_vc_param_value' : '';
   			$icons .= sprintf($icon_item, $i, $checked, $val_class);
   		}
   }

   return sprintf($icons_container, $icons);;
}
add_shortcode_param('font_icon', 'generate_font_icon');