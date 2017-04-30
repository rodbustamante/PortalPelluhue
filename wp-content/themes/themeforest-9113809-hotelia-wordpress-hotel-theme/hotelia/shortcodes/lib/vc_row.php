<?php
$output = $section =  $source1 =  $source2 =  $source3 = $video_bg = $parallax = $container = $no_container = $el_class = $bg_image = $bg_color = $bg_image_repeat = $font_color = $padding = $margin_bottom = $css = '';
extract(shortcode_atts(array(
    'el_class'        => '',
    'bg_image'        => '',
    'bg_color'        => '',
    'bg_image_repeat' => '',
    'font_color'      => '',
    'padding'         => '',
    'margin_bottom'   => '',
    'no_container'    => '',
    'parallax'        => '',
    'video'           => '',
    'source1'         => '',
    'source2'         => '',
    'source3'         => '',
    'css' => ''
), $atts));

// wp_enqueue_style( 'js_composer_front' );
wp_enqueue_script( 'wpb_composer_front_js' );
// wp_enqueue_style('js_composer_custom_css');

$el_class = $this->getExtraClass($el_class);
$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $el_class . vc_shortcode_custom_css_class( $css, ' ' ), $atts );

$style = $this->buildStyle($bg_image, $bg_color, $bg_image_repeat, $font_color, $padding, $margin_bottom);

if($parallax === '1') {
    $parallax = 'data-stellar-background-ratio="0.5"';
}

if($video === '1')  {
    $video_bg = '<video width="%s" height="%s" loop="" autoplay="" muted="" preload="">
        <source src="%s" type="video/mp4">
        <source src="%s" type="video/ogg">
        <source src="%s" type="video/webm">
    </video>';
    $video_bg = sprintf($video_bg, '100%', '100%', $source1, $source2, $source3);
}

// HTML structure
$section = '<section class="%1$s" %2$s>%3$s</section>';
$container = '<div class="container"><div class="row">%1$s</div></div>';

if($this->settings('base') === 'vc_row') {
	if($no_container === '1') {

        if($video === '1') {
		  $section = sprintf($section, $css_class. ' row video-box', $style.$parallax,  $video_bg. '<div class="container">'.wpb_js_remove_wpautop($content). '</div>');            
        } else {
          $section = sprintf($section, $css_class. ' row', $style.$parallax,  wpb_js_remove_wpautop($content));            
        }
	} else {
		$container = sprintf($container,  wpb_js_remove_wpautop($content));
		$section = sprintf($section, $css_class.' box', $style.$parallax, $container);
	}
} else {
	$section = sprintf('<div class="row %1$s" %2$s>%3$s</div>', $css_class, $style, wpb_js_remove_wpautop($content));
}
echo $section.$this->endBlockComment('row');