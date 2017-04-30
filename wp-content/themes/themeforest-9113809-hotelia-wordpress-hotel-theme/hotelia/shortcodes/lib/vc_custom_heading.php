<?php

$output = $text = $custom_color = $separator_style = $google_fonts = $font_container = $el_class = $css = $google_fonts_data = $font_container_data = '';
extract(shortcode_atts(array(
    'text'        			=> '',
    'google_fonts'        	=> '',
    'font_container'        => '',
    'bg_image_repeat' 		=> '',
    'el_class'      		=> '',
    'css'         			=> '',
    'font_container_data'   => '',
    'google_fonts_data'    	=> '', 
    'description' 			=> '',
    'separator_width'       => ''
), $atts));


extract( $this->getAttributes( $atts ) );
extract( $this->getStyles( $el_class, $css, $google_fonts_data, $font_container_data, $atts ) );

if(!empty($font_container_data['values']['color'])) {
    $custom_color = sprintf('style="color: %s !important;"', $font_container_data['values']['color']);
} 

$settings = get_option( 'wpb_js_google_fonts_subsets' );
$subsets  = '';
if ( is_array( $settings ) && ! empty( $settings ) ) {
	$subsets = '&subset=' . implode( ',', $settings );
}
wp_enqueue_style( 'vc_google_fonts_' . vc_build_safe_css_class( $google_fonts_data['values']['font_family'] ), '//fonts.googleapis.com/css?family=' . $google_fonts_data['values']['font_family'] . $subsets );
$output .= '<div class="text-dark-blue text-center fancy-heading ' . $css_class . '"  '.$custom_color.'>';
$output .= '<' . $font_container_data['values']['tag'] . ' style="' . implode( ';', $styles ) . '">';
$output .= !empty($link) ? sprintf( '<a href="%s">', $link ) : '';
$output .= $text;
$output .= !empty($link) ? '</a>' : '';
$output .= '</' . $font_container_data['values']['tag'] . '>';
if($separator_width !== '0') {
    $separator_style = 'width:'.$separator_width.'%;';
    $output .= '<hr class="center-me" style="color: inherit; '.$separator_style.'">';    
} else {
    $output .= '<br>';
}

if(!empty($description)) {
    $output .= '<p>'.$description.'</p>';    
}
$output .= '</div>';

echo $output;