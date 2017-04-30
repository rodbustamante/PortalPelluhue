<?php

require_once(TEMPLATEPATH . '/tesla_framework/tesla.php');
require_once(TEMPLATEPATH . '/plugins/tgm-plugin-activation/register-plugins.php');
if( TEMPLATEPATH != STYLESHEETPATH && is_file(STYLESHEETPATH .'/booking/init.php') )
        require_once (STYLESHEETPATH . '/booking/init.php');
    else
        require_once (TEMPLATEPATH . '/booking/init.php');

if(class_exists('WPBakeryShortCode')) {
	require_once(TEMPLATEPATH . '/shortcodes/shortcodes.php');	
} else {
	require_once(TEMPLATEPATH . '/shortcodes/callback.php');
}

global $custom_fonts;
 TT_ENQUEUE::$base_gfonts = array('://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900');
 TT_ENQUEUE::$gfont_changer = array(
 		_go('global_typo_font'),
 		_go('links_settings_font'),
 		_go('logo_text_font'),
 		_go('headings_settings_font'),
 	);

function hotelia_no_reply_script() {
	wp_dequeue_script('comment-reply');
}
add_action('wp_print_scripts', 'hotelia_no_reply_script');

/**
 * Theme setup
 *
 * Set up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support post thumbnails.
 *
 * 
 */
function hotelia_theme_setup() {

	// This theme styles the visual editor to resemble the theme style.
	add_editor_style( 'css/editor-style.css' );

	// Add RSS feed links to <head> for posts and comments.
	add_theme_support( 'automatic-feed-links' );

	// Enable support for Post Thumbnails, and declare two sizes.
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 750, 530, true );
	add_image_size( 'full-width', 1170, 576, true );
	add_image_size( 'square-thumb', 800, 800, true );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary'   => __( 'Top primary menu', 'hotelia' ),
		'top'   => __( 'Top menu used for account pages and cart', 'hotelia' ),
		//'secondary' => __( 'Secondary menu in left sidebar', 'hotelia' ),
		'footer' => __( 'Footer menu', 'hotelia' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'audio', 'quote', 'link', 'gallery',
	) );

	// Add support for featured content.
	// add_theme_support( 'featured-content', array(
	// 	'featured_content_filter' => 'twentyfourteen_get_featured_posts',
	// 	'max_posts' => 6,
	// ) );

	// Add support for woocomerce plugin.
	add_theme_support( 'woocommerce' );

	// This theme uses its own gallery styles.
	add_filter( 'use_default_gallery_style', '__return_false' );
}
add_action( 'after_setup_theme', 'hotelia_theme_setup' );

/**
* Layout switcher
*
* Add "boxed-view" class for main wrapper
*
* @return string ($layout_view)
*
*/
function layout_style() {
	$tt_settings = _go('layout_style');
	$layout_view = 'class="boxed-view"';

	if(!empty($tt_settings) && $tt_settings == "Boxed" ) {
		echo $layout_view;
	} else {
		return;
	}
}


/**
* Footer Social
*
* Show social accounts in footer
*
* @return string
*
*/
function social_networks() {
	$socials = array(
			'facebook' 	=> '528',
		    'twitter' 	=> '556',
		    'linkedin' 	=> '544',
		    'rss' 		=> '549',
		    'skype' 	=> '551',
		    'google' 	=> '185',
		);
	$pattern = '<ul class="inline-list social-links">%s</ul>';
	$li = '<li><a href="%1$s" class="social-%2$s shape-square font-2x soft-corners"><i class="icon-%3$s"></i></a></li>';
	$items = '';

	foreach ($socials as $key => $value) {
		$social = _go('social_platforms_'.$key);
		if(!empty($social)) {
			$items .= sprintf($li, $social, $key, $value);
		}
	}

	if(!empty($items)) {
		echo sprintf($pattern, $items);
	}
}

/**
* Helper function - adjust Brightness
*
* Help to make solid color lighter or darker 
*
*
*/
function hotelia_adjustBrightness($hex, $steps) {
    // Steps should be between -255 and 255. Negative = darker, positive = lighter
	if(empty($hex)) {
		return;
	}

    $steps = max(-255, min(255, $steps));

    // Format the hex color string
    $hex = str_replace('#', '', $hex);
    if (strlen($hex) == 3) {
        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
    }

    // Get decimal values
    $r = hexdec(substr($hex,0,2));
    $g = hexdec(substr($hex,2,2));
    $b = hexdec(substr($hex,4,2));

    // Adjust number of steps and keep it inside 0 to 255
    $r = max(0,min(255,$r + $steps));
    $g = max(0,min(255,$g + $steps));  
    $b = max(0,min(255,$b + $steps));

    $r_hex = str_pad(dechex($r), 2, '0', STR_PAD_LEFT);
    $g_hex = str_pad(dechex($g), 2, '0', STR_PAD_LEFT);
    $b_hex = str_pad(dechex($b), 2, '0', STR_PAD_LEFT);

    return '#'.$r_hex.$g_hex.$b_hex;
}

/**
* Custom CSS
*
* Adding inline css for custom needs
*
*/

function custom_styles() {
	$custom_css = _go('custom_css');
	wp_add_inline_style('tt-main-style', $custom_css);
}

add_action('wp_enqueue_scripts', 'custom_styles', 99);

/**
* Helper function - background_settings
*
* Adding inline css for background settings
*
*
*/
function hotelia_background_settings($class = null, $image = null, $color = null, $repeat = null, $position = null) {
	$custom_css = '';
	$tt_settings_bg_img = !empty($image) ? $image : '';
	$tt_settings_bg_color = !empty($color) ? $color : 'transparent';
	$tt_settings_bg_repeat = !empty($repeat) ? $repeat : '';
	$tt_settings_bg_position = !empty($position) ? $position : '';

	if(!empty($tt_settings_bg_img)) {
		$custom_css = $class."{background: url(".$tt_settings_bg_img.") ". $tt_settings_bg_color ." ". $tt_settings_bg_repeat . " ". $tt_settings_bg_position ." !important;}";
	} else {
		if(!empty($color)) {
			$custom_css = $class."{background: ". $color ."!important;}";
		}
	}

	wp_add_inline_style('tt-main-style', $custom_css);
}

/**
* Helper function - block_space
*
* Adding inline css for background settings
*
*
*/

function block_space($class = null, $margin = null, $padding = null) {
	$custom_css = '';
	$tt_settings_padding = !empty($padding) ? $padding : '';
	$tt_settings_margin = !empty($margin) ? $margin : '';

	if(!empty($tt_settings_margin)) {
		$custom_css = $class. "{margin: ".$tt_settings_margin.";}";
	}

	if(!empty($tt_settings_padding)) {
		$custom_css .= $class. "{padding: ".$tt_settings_padding.";}";
	}

	wp_add_inline_style('tt-main-style', $custom_css);

}

/**
* Helper function - font changer
*
* Generate CSS for custom typo
*
*
*/

function font_changer($class = null, $color = null, $size = null, $font = null) {
	$custom_css = '';
	$tt_settings_font = !empty($font) ? $font : '';
	$tt_settings_color = !empty($color) ? $color : '';
	$tt_settings_size = !empty($size) ? $size : '';

	global $custom_fonts;

	if(!empty($tt_settings_font)) {
		$custom_css = $class. "{font-family: ".$tt_settings_font." ;}";
	}

	if(!empty($tt_settings_color)) {
		$custom_css .= $class. "{color: ".$tt_settings_color.";}";
	}

	if(!empty($tt_settings_size)) {
		$custom_css .= $class. "{font-size: ".$tt_settings_size."px;}";
	}

	wp_add_inline_style('tt-main-style', $custom_css);

}

/**
* Background Manipulation
*
* Generate all needed classes for the header background
*
*
*/
function background_manipulation() {
	hotelia_background_settings("body",
						_go('body_background'), 
						_go('body_color'), 
						strtolower(_go('body_background_repeat')),
						strtolower(_go('body_background_position')));

	hotelia_background_settings(".main-header, .sticky-bar",
						_go('header_image'), 
						_go('header_color'), 
						strtolower(_go('header_image_repeat')),
						strtolower(_go('header_image_position')));
	hotelia_background_settings('.header-bar', '', _go('header_bar_color'));
	hotelia_background_settings('.identity', '', _go('logo_color'));
	hotelia_background_settings('.main-nav', '', _go('menu_color'));
	hotelia_background_settings('.main-nav > ul > li > a', '', _go('menu_link_color'));
	$check_hover = _go('no_menu_link_hover_color');
	$check_hover = !empty($check_hover) ? 'transparent' : _go('menu_link_hover_color');
	hotelia_background_settings('.main-nav > ul > li a:hover, 
						.main-nav > ul > li:hover > a, .main-nav > ul > li.current_page_item > a,
						.main-nav > ul > li.current_page_parent > a', 
						'', $check_hover);

	hotelia_background_settings('body .blue, body .hover-blue:hover', '', _go('blue_color'));
	hotelia_background_settings('body .red, body .hover-red:hover', '', _go('red_color'));
	hotelia_background_settings('body .green, body .hover-green:hover', '', _go('green_color'));
	hotelia_background_settings('body .yellow, body .hover-yellow:hover', '', _go('yellow_color'));
	hotelia_background_settings('body .brown, body .hover-brown:hover', '', _go('brown_color'));
	hotelia_background_settings('body .violet, body .hover-violet:hover', '', _go('violet_color'));

	hotelia_background_settings('body .light-blue, body .hover-light-blue:hover', '', hotelia_adjustBrightness(_go('blue_color'), 50));

	hotelia_background_settings('body .dark-blue, body .hover-dark-blue:hover', '', hotelia_adjustBrightness(_go('blue_color'), -100));
	hotelia_background_settings('body .dark-red, body .hover-dark-red:hover', '', hotelia_adjustBrightness(_go('red_color'), -100));
	hotelia_background_settings('body .dark-green, body .hover-dark-green:hover', '', hotelia_adjustBrightness(_go('green_color'), -100));
	hotelia_background_settings('body .dark-yellow, body .hover-dark-yellow:hover', '', hotelia_adjustBrightness(_go('yellow_color'), -100));
	hotelia_background_settings('body .dark-brown, body .hover-dark-brown:hover', '', hotelia_adjustBrightness(_go('brown_color'), -100));
	hotelia_background_settings('body .dark-violet, body .hover-dark-violet:hover', '', hotelia_adjustBrightness(_go('violet_color'), -100));

	hotelia_background_settings(".main-footer",
						_go('footer_background'), 
						_go('footer_color'), 
						strtolower(_go('footer_background_repeat')),
						strtolower(_go('footer_background_position')));

}
add_action('wp_enqueue_scripts', 'background_manipulation', 99);

/**
* Block Manipulation
*
* Generate all needed classes for the header block
*
*
*/
function hotelia_block_manipulation() {
	block_space(".main-header",
				_go('header_margin'),
				_go('header_padding'));

	block_space(".header-bar",
				_go('header_bar_margin'),
				_go('header_bar_padding'));
	block_space(".main-nav",
				_go('menu_margin'),
				_go('menu_padding'));
	block_space(".identity",
				_go('logo_margin'),
				_go('logo_padding'));
	block_space(".main-nav > ul > li > a",
				'',
				_go('menu_link_padding'));
	block_space(".main-nav > ul > li",
				_go('menu_link_margin'));

}
add_action('wp_enqueue_scripts', 'hotelia_block_manipulation', 99);

/**
* typography Manipulation
*
* Generate all needed classes for typography changer
*
*
*/
function hotelia_typo_manipulation() {
	font_changer('html, body',
				_go('global_typo_color'),
				_go('global_typo_size'),
				_go('global_typo_font'));

	font_changer('a, a:hover',
				_go('links_settings_color'),
				_go('links_settings_size'),
				_go('links_settings_font'));
	font_changer('.identity a',
				_go('logo_text_color'),
				_go('logo_text_size'),
				_go('logo_text_font'));
	font_changer('h1, h2, h3, h4, h5, h6',
				_go('headings_settings_color'),
				'',
				_go('headings_settings_font'));

	font_changer('h1', '', _go('headings_one_settings_size'));
	font_changer('h2', '', _go('headings_two_settings_size'));
	font_changer('h3', '', _go('headings_three_settings_size'));
	font_changer('h4', '', _go('headings_four_settings_size'));
	font_changer('h5', '', _go('headings_five_settings_size'));
	font_changer('h6', '', _go('headings_six_settings_size'));

	font_changer('body .text-blue, body .hover-text-blue:hover, body .before-blue:before', _go('blue_color'));
	font_changer('body .text-red, body .hover-text-red:hover, body .before-red:before', _go('red_color'));
	font_changer('body .text-green, body .hover-text-green:hover, body .before-green:before', _go('green_color'));
	font_changer('body .text-yellow, body .hover-text-yellow:hover, body .before-yellow:before', _go('yellow_color'));
	font_changer('body .text-brown, body .hover-text-brown:hover, body .before-brown:before', _go('brown_color'));
	font_changer('body .text-violet, body .hover-text-violet:hover, body .before-violet:before', _go('violet_color'));

	font_changer('body .text-dark-blue, body .hover-text-dark-blue:hover, body .before-dark-blue:before',hotelia_adjustBrightness( _go('blue_color'), -100));
	font_changer('body .text-dark-red, body .hover-text-dark-red:hover, body .before-dark-red:before',hotelia_adjustBrightness( _go('red_color'), -100));
	font_changer('body .text-dark-green, body .hover-text-dark-green:hover, body .before-dark-green:before',hotelia_adjustBrightness( _go('green_color'), -100));
	font_changer('body .text-dark-yellow, body .hover-text-dark-yellow:hover, body .before-dark-yellow:before',hotelia_adjustBrightness( _go('yellow_color'), -100));
	font_changer('body .text-dark-brown, body .hover-text-dark-brown:hover, body .before-dark-brown:before', hotelia_adjustBrightness(_go('brown_color'), -100));
	font_changer('body .text-dark-violet, body .hover-text-dark-violet:hover, body .before-dark-violet:before',hotelia_adjustBrightness( _go('violet_color'), -100));


}
add_action('wp_enqueue_scripts', 'hotelia_typo_manipulation', 99);

/**
* Favicon generator
*
* Add all needed markup for awesome favicon crossplatform
*
* @return string ($favicon_markup)
*
*/
function hotelia_favicon_generate() {
	$favicon_markup = '';
	$rel = array('apple-touch-icon-precomposed', 'icon', 'shortcut icon');
	$tt_settings_favicon = _go('favicon_link');

	foreach ($rel as $key => $value) {
		if($value == 'shortcut icon') {
			$favicon_markup .= '<!--[if IE]><link rel="'. $value . '" href="'. $tt_settings_favicon .'" ><![endif]--> ' . "\n";
		} else {
			$favicon_markup .= '<link rel="'. $value . '" href="'. $tt_settings_favicon .'" > ' . "\n";			
		}
	}

	$favicon_markup .= '<meta name="msapplication-TileColor" content="#D83434">' . "\n";
	$favicon_markup .= '<meta name="msapplication-TileImage" content="'.$tt_settings_favicon.'">' . "\n";

	if(!empty($tt_settings_favicon)) {
		echo $favicon_markup;		
	} else {
		return;
	}

}

/**
* Navigation bar settings
*
* Customize navigation
*
*
*/
function navigation_settings() {
	$content = '';
	$row = '<div class="row">%1$s</div>';
	$col = '<div class="col-md-%1$s">%2$s</div>';
	$logo_markup = '<figure class="identity text-%1$s">
					<a href="' 
					. esc_url( home_url( '/' ) ). 
					'" rel="home">%2$s</a> <a href="#" class="mobile-switch to-right">
								<i class="icon-467 font-2x text-dark hover-text-grey"></i>
							</a></figure>';
	$logo = _go('logo_image');
	$logo_col_size =  _go('logo_size');

	if($logo_col_size === 'default') {
		$logo_col_size = 4;
	}

	$logo_position = _go('logo_position');
	$logo_text = _go('logo_text');

	$menu_position = _go('menu_position');
	$menu = hotelia_theme_menu('primary', $menu_position);

	$menu_col_size =  _go('menu_size');
	if($menu_col_size === 'default') {
		$menu_col_size = 8;
	}
	$menu_markup = '<nav class="main-nav clearfix">%2$s</nav>';

	if(empty($logo_col_size)) {
		$logo_col_size = 2;
	}

	if(empty($menu_col_size)) {
		$menu_col_size = 8;
	}

	if(empty($logo)) {
		$logo = '<img alt="logo" src="'. get_template_directory_uri() . '/img/logo.png'. '">';
	} else {
		$logo = '<img alt="logo" src="'. $logo . '">';
	}

	if(!empty($logo_text)) {
		$logo = $logo_text;
	}

	if(empty($logo_position)) {
		$logo_position = 'left';
	}

	if(empty($menu_position)) {
		$logo_position = 'to-left';
	}

	$logo_markup = sprintf($logo_markup, $logo_position, $logo);
	$logo_markup = sprintf($col, $logo_col_size, $logo_markup);

	$menu_markup = sprintf($menu_markup, $menu_position, $menu);
	$menu_markup = sprintf($col, $menu_col_size, $menu_markup);

	$content = $logo_markup . $menu_markup;

	$content = sprintf($row, $content);

	echo $content;

}

/**
* Theme menu
*
* Generate all needed classes for the header block
*
*
*/
function hotelia_theme_menu($menu_name, $position = null) {

	$callback = 'hotelia_theme_menu_fallback_footer';

	if($menu_name !== 'footer' && $menu_name !== 'top') {
		$callback = 'hotelia_theme_menu_fallback';
	}

	$defaults = array(
                    'theme_location'  => strtolower(str_replace(" ", "_", $menu_name)),
                    'menu'            => '',
                    'container'       => false,
                    'container_class' => '',
                    'container_id'    => '',
                    'menu_class'      => 'clean-list '. $position,
                    'menu_id'         => '',
                    'echo'            => false,
                    'fallback_cb'     => $callback,
                    'before'          => '',
                    'after'           => '',
                    'link_before'     => '',
                    'link_after'      => '',
                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => ''
                );

    return wp_nav_menu( $defaults );
}

function hotelia_theme_menu_fallback() {
	//wp_page_menu
	$defaults = array(
			       	'authors'      => '',
					'child_of'     => 0,
					'date_format'  => get_option('date_format'),
					'depth'        => 0,
					'echo'         => 0,
					'exclude'      => '',
					'include'      => '',
					'link_after'   => '',
					'link_before'  => '',
					'post_type'    => 'page',
					'post_status'  => 'publish',
					'show_date'    => '',
					'sort_column'  => 'menu_order, post_title',
					'title_li'     => '', 
					'walker'       => '' 
	);

	return sprintf('<ul class="clean-list %1$s">%2$s</ul>', _go('menu_position'), wp_list_pages($defaults));
}

function hotelia_theme_menu_fallback_footer() {
	return;
}

/**
* Theme blog
*
* Generate blog thumbnail
*
*
*/

function blog_post_thumbnail($size = null) {

	$thumb_size = 'post-thumbnail';

	if(!empty($size)) {
		$thumb_size = $size;
	}
	
	if(has_post_thumbnail()) {
		$thumb_markup = '<figure><a href="%1$s">%2$s</a>%3$s</figure>';
		$thumb_caption = '<figcaption><div class="post-date text-center">
						  <b class="font-13x">%1$s</b><span>%2$s</span></div></figcaption>';
		$thumb_caption = sprintf($thumb_caption,  esc_html(get_the_date('d')), esc_html(get_the_date('M')));
		return sprintf($thumb_markup, get_permalink(), get_the_post_thumbnail(get_the_ID(), $thumb_size), $thumb_caption);		
	} else {
		return false;
	}
}

/**
* Theme blog
*
* Generate read more 
*
*
*/

function hotelia_custom_more_link( $link ) {	
	return  '</p><p class="read-more-holder"><a href="'. get_permalink() .'" class="read-more soft-corners text-dark button-sm hover-orange grey">'.__('Read more', 'hotelia').'</a>';
}
add_filter( 'the_content_more_link', 'hotelia_custom_more_link' );

/**
* Theme blog
*
* Generate category blog post
*
*
*/

function blog_category_list( $separator = '', $parents='', $post_id = false ) {

	global $wp_rewrite;

	$categories = get_the_category( $post_id );

	if ( !is_object_in_taxonomy( get_post_type( $post_id ), 'category' ) )

		return apply_filters( 'the_category', '', $separator, $parents );



	if ( empty( $categories ) )

		return apply_filters( 'the_category', __( 'Uncategorized', 'hotelia' ), $separator, $parents );



	$rel = ( is_object( $wp_rewrite ) && $wp_rewrite->using_permalinks() ) ? 'rel="category tag"' : 'rel="category"';



	$thelist = '';

	if ( '' == $separator ) {

		$thelist .= '<ul class="post-categories">';

		foreach ( $categories as $category ) {

			$thelist .= "\n\t<li>";

			switch ( strtolower( $parents ) ) {

				case 'multiple':

					if ( $category->parent )

						$thelist .= get_category_parents( $category->parent, true, $separator );

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s" , 'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>' . $category->name.'</a></li>';

					break;

				case 'single':

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s" , 'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>';

					if ( $category->parent )

						$thelist .= get_category_parents( $category->parent, false, $separator );

					$thelist .= $category->name.'</a></li>';

					break;

				case '':

				default:

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s" , 'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>' . $category->name.'</a></li>';

			}

		}

		$thelist .= '</ul>';

	} else {

		$i = 0;

		foreach ( $categories as $category ) {

			if ( 0 < $i )
				$thelist .= $separator;

			switch ( strtolower( $parents ) ) {


				case 'multiple':

					if ( $category->parent )

						$thelist .= get_category_parents( $category->parent, true, $separator );

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s" ,'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>' . $category->name.'</a>';

					break;

				case 'single':

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s" ,'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>';

					if ( $category->parent )

						$thelist .= get_category_parents( $category->parent, false, $separator );

					$thelist .= "$category->name</a>";

					break;

				case '':

				default:

					$thelist .= '<a class="text-aquablue hover-text-dark-aquablue '.$category->category_nicename.'" href="' . get_category_link( $category->term_id ) . '" title="' . esc_attr( sprintf( __( "View all posts in %s"  ,'hotelia'), $category->name ) ) . '" ' . $rel . '><i class="icon-491"></i>' . $category->name.'</a>';

			}

			++$i;

		}

	}

	return apply_filters( 'the_category', $thelist, $separator, $parents );

}

/**
* Theme blog
*
* Generate pagination
*
*
*/
function pagination_nav() {
	// Don't print empty markup if there's only one page.
	if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
		return;
	}

	$paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
	$pagenum_link = html_entity_decode( get_pagenum_link() );
	$query_args   = array();
	$url_parts    = explode( '?', $pagenum_link );

	if ( isset( $url_parts[1] ) ) {
	 wp_parse_str( $url_parts[1], $query_args );
	}

	$pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
	$pagenum_link = trailingslashit( $pagenum_link ) . '%_%';

	$format  = $GLOBALS['wp_rewrite']->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
	$format .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit( 'page/%#%', 'paged' ) : '?paged=%#%';

	// Set up paginated links.
	$links = paginate_links( array(
		'base'     => $pagenum_link,
		'format'   => $format,
		'total'    => $GLOBALS['wp_query']->max_num_pages,
		'current'  => $paged,
		'mid_size' => 1,
		'add_args' => array_map( 'urlencode', $query_args ),
		'prev_text' => __( 'Previous', 'hotelia' ),
		'next_text' => __( 'Next', 'hotelia' ),
		'type'		=> 'array',
	) );

	if ( $links ) :

	?>
	 <ul class="inline-list center-me pagination-links" role="navigation">
	 	<li>
	     <?php echo join("</li>\n\t<li>", $links); ?>
		</li>
	 </ul><!-- .pagination -->

	<?php
	endif;
}

/**
 * Register three theme widget areas.
 *
 * 
 */
function hotelia_sidebar_init() {
	// require get_template_directory() . '/inc/widgets.php';
	// register_widget( 'Twenty_Fourteen_Ephemera_Widget' );

	register_sidebar( array(
		'name'          => __( 'Blog Sidebar Area', 'hotelia' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Sidebar that appears in the header.', 'hotelia' ),
		'before_widget' => '<div id="%1$s" class="widget-item %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4 class="widget-title text-dark-blue font-300">',
		'after_title'   => '</h4>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer Widget Area', 'hotelia' ),
		'id'            => 'sidebar-2',
		'description'   => __( 'Appears in the footer section of the site.', 'hotelia' ),
		'before_widget' => '<div id="%1$s" class="col-md-4 widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => __( 'Woocommerce Widget Area', 'hotelia' ),
		'id'            => 'shop',
		'description'   => __( 'Rooms sidebar.', 'hotelia' ),
		'before_widget' => '<div id="%1$s" class="widget-item %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4 class="widget-title text-dark-blue">',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'hotelia_sidebar_init' );

/**
 * Comments template
 *
 * 
 */

function theme_comment_form() {
	$user = wp_get_current_user();
	$user_identity = $user->exists() ? $user->display_name : '';

	$fields = array(
	        'author'    => '<p class="col-md-12">
	        					<input class="input_line" id="name" name="author" type="text" placeholder="' . __( 'Name', 'hotelia' ) . '" >
	                        </p>',

	        'email'     => '<p class="col-md-12">
	                            <input class="input_line" id="email" name="email" type="text" placeholder="' . __( 'E-mail', 'hotelia' ) . '" >
	                        </p>',

	        'url'       => '<p class="col-md-12">
	                           <input class="input_line" id="website" name="website" type="text" placeholder="' . __( 'Website', 'hotelia' ) . '" >
	                        </p>'
	    );

	$comment_field = '<p class="col-md-12"><textarea id="comment" class="input_area" aria-required="true" name="comment" placeholder="'.__('Message', 'hotelia').'"></textarea></p>';

	$must_log_in = '<p class="logged-in-as">' 
	                    . sprintf( 
	                        __( 'Logged in as <a href="%1$s">%2$s</a>. 
	                        <a href="%3$s" title="Log out of this account">Log out?</a>', 'hotelia'), 
	                        get_edit_user_link(),
	                        $user_identity,
	                        wp_logout_url() ) . '</p>';

	$logged_in_as = '';

	$comment_notes_before = '<p class="comment-notes col-md-12">' 
	                            . __( 'If you want to share your opinion, leave a comment.', 'hotelia' ) .
	                        '</p>';

	$comment_notes_before = '';

	$comment_notes_after = '<div class="form-allowed-tags col-md-12"><p>' 
	                            .  __( 'You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes:' , 'hotelia') .
	                            ' </p><pre>' . allowed_tags() . '</pre>' .
	                        '</div>';

	$comment_notes_after = '';

	$id_form            = 'commentform';
	$id_submit          = 'comment-submit';
	$title_reply        = __( 'Leave a comment', 'hotelia' );
	$title_reply_to     = __( 'Leave a comment to %s', 'hotelia' );
	$cancel_reply_link  = __( 'Cancel reply', 'hotelia' );
	$label_submit       = 'a';
	$format             = 'html5';

	$args = array(
	        'fields'                    => apply_filters( 'comment_form_default_fields', $fields ),
	        'comment_field'             => $comment_field,
	        'must_log_in'               => $must_log_in,
	        'logged_in_as'              => $logged_in_as,
	        'comment_notes_before'      => $comment_notes_before,
	        'comment_notes_after'       => $comment_notes_after,
	        'id_form'                   => $id_form,
	        'id_submit'                 => $id_submit,
	        'title_reply'               => $title_reply,
	        'title_reply_to'            => $title_reply_to,
	        'cancel_reply_link'         => $cancel_reply_link,
	        'label_submit'              => $label_submit,
	        'format'                    => $format
	    );

	if(have_comments()) {
		$return_btn = '<button type="submit" class="button-md uppercase to-right hover-orange grey text-dark soft-corners review-nav" data-target="prev">'.__('Back to comments', 'hotelia').'</button>'; 
	} else {
		$return_btn = '';
	}

	ob_start();
    comment_form($args);
    $form = str_replace('class="comment-form"','class="contact-form row"',ob_get_clean());
    $form = str_replace('<input name="submit" type="submit" id="'.esc_attr( $id_submit ).'" value="'.esc_attr( $label_submit ).'" />','</p><p class="col-md-12">
								<button type="submit" name="submit" id="comment-submit" class="button-md uppercase to-right hover-dark-green green text-white soft-corners long-button"><i class="icon-274"></i>'.__('Write', 'hotelia').'</button>'.$return_btn.'
							', $form);
    echo $form;
}

function theme_display_comments() {
    $args = array(
        'walker'            => null,
        'max_depth'         => '',
        'style'             => 'ul',
        'callback'          => 'hotelia_theme_comment_template',
        'end-callback'      => null,
        'type'              => 'all',
        'reply_text'        => 'Reply',
        'page'              => '',
        'per_page'          => '',
        'avatar_size'       => 69,
        'reverse_top_level' => null,
        'reverse_children'  => '',
        'format'            => 'html5', //or html5 @since 3.6
        'short_ping'        => true // @since 3.6
    );

    wp_list_comments($args);
}

/*==== Comment template ====*/
function hotelia_theme_comment_template($comment, $args, $depth) {
    $GLOBALS['comment'] = $comment;
    extract($args, EXTR_SKIP);

    if ( 'div' == $args['style'] ) {
        $tag = 'div';
        $add_below = 'comment';
    } else {
        $tag = 'li';
        $add_below = 'div-comment';
    }

    echo '<' . $tag . ' '; 
    comment_class(empty( $args['has_children'] ) ? '' : 'parent');
    echo ' id="comment-';
    comment_ID();
    echo '">';

    if ( 'div' != $args['style'] ) {
        echo ' <div id="div-comment-';
        comment_ID();
        echo '" class="comment-post">';
    }
    
    echo '<figure class="avatar soft-corners">';
    if ($args['avatar_size'] != 0) 
    	echo get_avatar( $comment, $args['avatar_size'] , false, 'avatar');
    edit_comment_link(__('Edit', 'hotelia'),'  ','' );
    echo '</figure>';
    echo '<div class="comment-content">';
    $author_url = get_comment_author_url() ? get_comment_author_url() : '#';
    echo '<h5> <a href="'.$author_url.'"  rel="external nofollow" class="text-dark-blue hover-text-blue">'.get_comment_author().'</a>';
   	echo '<br><b class="text-orange font-small">';
   	printf( __('%1$s at %2$s', 'hotelia'), get_comment_date(),  get_comment_time());
    echo '</b></h5>';
    echo '<div class="font-small">';
    if ($comment->comment_approved == '0') {
    	echo '<div class="alert-box green soft-corners opacity-50">
						<h4 class="text-white font-small"><i class="icon-2"></i>';
        _e('Your comment is awaiting moderation.', 'hotelia');

        echo '</h4><a href="#" class="close-alert"><i class="icon-21"></i></a></div>';
    }
    comment_text();

    echo '</div>';
    $reply_link = get_comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'])));
    echo str_replace("class='comment-reply-link'","class='button-sm font-small green hover-dark-green'", $reply_link);
    echo '</div>';

    if ( 'div' != $args['style'] ) {
        echo '</div>';
    }
}


function share_post($url = false, $title = false, $image = false) {
	$share_container = '<br><ul class="rrssb-buttons inline-list text-center">%1$s</ul><br>';
	$share_item = '<li><a href="%1$s" class="popup button-md soft-corners full-size social-%2$s">
									            <span class="icon"><i class="icon-%3$s font-13x"></i></span>
									        </a></li>';
	$items = '';
	$network = '';

	$title = rawurlencode($title);

	$social_networks = array(
						528 => 'https://www.facebook.com/sharer/sharer.php?u='.$url,
						556 => 'http://twitter.com/home?status='.$title.'%20'.$url,
						186 => 'https://plus.google.com/share?url='.$title.'%20'.$url,
						545 => 'http://pinterest.com/pin/create/button/?url='.$url.'&amp;media='.$image.'&amp;description='.$title.'%20'.$url,
		);


	foreach ($social_networks as $key => $value) {
		switch ($key) {
			case 528:
				# code...
				$network = 'facebook';
				break;

			case 556:
				# code...
				$network = 'twitter';
				break;

			case 186:
				# code...
				$network = 'google';
				break;

			case 545:
				# code...
				$network = 'pinterest';
				break;
			
			default:
				# code...
				$network = 'facebook';
				break;
		}
		$items .= sprintf($share_item, $value, $network, $key);
	}

	echo sprintf($share_container, $items);						
}

/**
 * Custom Taxonomy
 *
 * 
 */

function hotelia_custom_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Amenities', 'Taxonomy General Name', 'hotelia' ),
		'singular_name'              => _x( 'Amenities', 'Taxonomy Singular Name', 'hotelia' ),
		'menu_name'                  => __( 'Amenities', 'hotelia' ),
		'all_items'                  => __( 'All Items', 'hotelia' ),
		'parent_item'                => __( 'Parent Item', 'hotelia' ),
		'parent_item_colon'          => __( 'Parent Item:', 'hotelia' ),
		'new_item_name'              => __( 'New Item Name', 'hotelia' ),
		'add_new_item'               => __( 'Add New Item', 'hotelia' ),
		'edit_item'                  => __( 'Edit Item', 'hotelia' ),
		'update_item'                => __( 'Update Item', 'hotelia' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'hotelia' ),
		'search_items'               => __( 'Search Items', 'hotelia' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'hotelia' ),
		'choose_from_most_used'      => __( 'Choose from the most used items', 'hotelia' ),
		'not_found'                  => __( 'Not Found', 'hotelia' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => false,
		'show_tagcloud'              => false,
	);
	register_taxonomy( 'amenities', array( 'rooms' ), $args );

}

// Hook into the 'init' action
add_action( 'init', 'hotelia_custom_taxonomy', 0 );

//add extra fields to custom taxonomy edit form callback function
function extra_tax_fields($tag) {
    $t_id = $tag->term_id;
    $term_meta = get_option( "taxonomy_$t_id" );
    $logo_ids = 601;
?>
<tr class="form-field">
<th scope="row" valign="top"><label for="logo_amenities"><?php _e('Set logo for this item', 'hotelia'); ?></label></th>
<td>
	<select name="term_meta[logo]" id="term_meta[logo]">
		<?php for ($i=1;$i<=$logo_ids;$i++): ?>
			<?php if((int)$term_meta['logo'] === $i) {
				$selected = ' selected';
			} else {$selected='';} ?>
			<option value="<?php echo $i; ?>" <?php echo $selected; ?>><?php echo $i; ?></option>
		<?php endfor; ?>
	</select> <span class="description"><?php _e(' You selected:', 'hotelia'); ?> <i class="font-3x ico-<?php echo $term_meta['logo']; ?>"></i></span>
        </td>
</tr>
<?php
}
 
// save extra taxonomy fields callback function
function hotelia_save_extra_taxonomy_fields( $term_id ) {
    if ( isset( $_POST['term_meta'] ) ) {
        $t_id = $term_id;
        $term_meta = get_option( "taxonomy_$t_id");
        $cat_keys = array_keys($_POST['term_meta']);
            foreach ($cat_keys as $key){
            if (isset($_POST['term_meta'][$key])){
                $term_meta[$key] = $_POST['term_meta'][$key];
            }
        }
        //save the option array
        update_option( "taxonomy_$t_id", $term_meta );
    }
}

add_action('amenities_edit_form_fields','extra_tax_fields', 10, 2 );  
add_action('edited_amenities','hotelia_save_extra_taxonomy_fields', 10, 2);

/**
 * Contact Form
 *
 * 
 */
if(!function_exists('tt_ajax_contact_form')):
	
function tt_ajax_contact_form () {
    $receiver_mail = get_option('admin_email');
    $mail_title    = ( ! empty( $_POST[ 'contact_web' ] )) ? $_POST[ 'contact_name' ] . __(' from ', 'hotelia') . $_POST[ 'contact_web' ] : ' ';

    /* SECTION II - CODE */

    if ( !empty( $_POST[ 'contact_name' ] ) && !empty( $_POST [ 'contact_email' ] ) && !empty( $_POST [ 'contact_mess' ] ) ) {
        $email   = $_POST[ 'contact_email' ];
        $message = $_POST[ 'contact_mess' ];
        $message = wordwrap( $message, 70, "\r\n" );
        $subject = $mail_title;
        $header = __('From: ', 'hotelia') . $_POST[ 'contact_name' ] . "\r\n";
        $header .= __('Reply-To: ', 'hotelia') . $email;
        if ( @mail( $receiver_mail, $subject, $message, $header ) )
            $result = __('Message successfully sent.', 'hotelia');
        else
            $result = __('Message could not be sent.', 'hotelia');
    } else {
        $result  = __('Please fill all the fields in the form.', 'hotelia');
    }
    die($result);
}
add_action('wp_ajax_tt_ajax_contact_form', 'tt_ajax_contact_form');           // for logged in user  
add_action('wp_ajax_nopriv_tt_ajax_contact_form', 'tt_ajax_contact_form');    // if user not logged in

endif;

function hotelia_guestbook_form () {

	$form_data = $_POST;
	$result = '';

	if(!empty($form_data) 
			&& array_key_exists('guest_name', $form_data)
			&& array_key_exists('guest_email', $form_data)
			&& array_key_exists('guest_rank', $form_data)
			&& array_key_exists('guest_message', $form_data)) {

		extract($form_data);

		$args = array(
						'posts_per_page'   => -1,
						'offset'           => 0,
						'category'         => '',
						'orderby'          => 'post_date',
						'order'            => 'DESC',
						'include'          => '',
						'exclude'          => '',
						'meta_key'         => '',
						'meta_value'       => '',
						'post_type'        => 'guestbook',
						'post_mime_type'   => '',
						'post_parent'      => '',
						'post_status'      => array('publish', 'pending', 'draft', 'auto-draft', 'future', 'private'),
						'suppress_filters' => true );

		$posts = get_posts($args);

		if(!empty($posts)) {
			$post_id = array();
			foreach ($posts as $key => $value) {
				$post_id[] = $value->ID;
			}
		}

		if(!empty($post_id)) {
			foreach ($post_id as $key => $id) {
				$not_repeat = get_post_meta($id, 'slide_options', TRUE);
				$repeted = 1;
				
			}
		}

		if($repeted == 1):

			$post = array(
	            'post_title'    => $guest_name,
	            'post_content'  => $guest_message,
	            'post_status'   => 'pending', // Choose: publish, preview, future, etc.
	            'post_type'     => 'guestbook' // Set the post type based on the IF is post_type X
	        );

	        $post_id = wp_insert_post($post);

	        if(!empty($post_id)) {
	        	update_post_meta($post_id, 'slide_options',  array('email_guest' => $guest_email,
	        														'rank_guest' => $guest_rank));

	        	$result = __('Feedback was submited, thank you!', 'hotelia');
	        } else {
	        	$result = __('Feedback could not be submited', 'hotelia');
	        }
        else:
        	$result = __('Your request was submited', 'hotelia');
        endif;

	} else {
		$result = __('Please fill all the fields in the form', 'hotelia');
	}
    die($result);
}
add_action('wp_ajax_guestbook_form', 'hotelia_guestbook_form');           // for logged in user  
add_action('wp_ajax_nopriv_guestbook_form', 'hotelia_guestbook_form');    // if user not logged in



add_filter('wpb_widget_title', 'hotelia_override_widget_title', 10, 2);
function hotelia_override_widget_title($output = '', $params = array('')) {
  $extraclass = (isset($params['extraclass'])) ? " ".$params['extraclass'] : "";
  return '<h4 class="uppercase '.$extraclass.'">'.$params['title'].'</h4>';
}


/**
 * Helper function
 *
 * 
 */

function if_exist($val = null) {
	if(!empty($val)) {
		echo $val;
	}
}


/**
 * Generate Amenities
 *
 * 
 */
function show_amenities($id = null) {
	$container = '<ul class="inline-list center-me amenities">%s</ul>';
	$item = '<li><i class="icon-%s font-13x"></i></li>';

}

// Woocomerce settings

//Removing breadcrumbs
remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0);

global $pagenow;
if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' ) {
	add_action( 'init', 'hotelia_shop_thumbs_size', 1 );
	
}

 
/**
 * Define image sizes
 */
function hotelia_shop_thumbs_size() {
  	$catalog = array(
		'width' 	=> '400',	// px
		'height'	=> '400',	// px
		'crop'		=> 1 		// true
	);
 
	$single = array(
		'width' 	=> '600',	// px
		'height'	=> '600',	// px
		'crop'		=> 1 		// true
	);
 
	$thumbnail = array(
		'width' 	=> '120',	// px
		'height'	=> '120',	// px
		'crop'		=> 0 		// false
	);
 
	// Image sizes
	update_option( 'shop_catalog_image_size', $catalog ); 		// Product category thumbs
	update_option( 'shop_single_image_size', $single ); 		// Single product image
	update_option( 'shop_thumbnail_image_size', $thumbnail ); 	// Image gallery thumbs
}

/**
 * Shopping cart
 */
function generate_menu_cart() {
	global $woocommerce;

	$output = '<li class="the-cart">';
	$output .= sprintf('<span class="text-orange"><i class="icon-236"></i>%s</span>', $woocommerce->cart->get_cart_subtotal());	
	$container = '<div class="cart-preview"><ul>%1$s<li class="go-cart">%2$s</li></ul></div>';
	$button = sprintf('<a href="%1$s">%2$s</a>', get_permalink( wc_get_page_id( 'cart' )), __('View cart', 'hotelia'));
	$item = '<li><div class="row no-padding">
				<div class="col-xs-5"><figure>%1$s</figure></div>
				<div class="col-xs-7"><div class="preview-item-title">%2$s</div></div>
			</div></li>';
	$items = '';
	$link = '<a href="%1$s">%2$s</a>';	

	if (count($woocommerce->cart->get_cart()) > 0) :
		foreach ($woocommerce->cart->get_cart() as $cart_item_key => $cart_item) :
			$_product = $cart_item['data'];
	        // Only display if allowed
	        if (!apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key) || !$_product->exists() || $cart_item['quantity'] == 0)
	        continue;
	        // Get price
	        $product_price = get_option('woocommerce_tax_display_cart') == 'excl' ? $_product->get_price_excluding_tax() : $_product->get_price_including_tax();
	        $product_price = apply_filters('woocommerce_cart_item_price_html', woocommerce_price($product_price), $cart_item, $cart_item_key);

	        $close_link = apply_filters('woocommerce_cart_item_remove_link', sprintf('<a href="%s" class="remove" title="%s">&times;</a>', esc_url($woocommerce->cart->get_remove_url($cart_item_key)), __('Remove this item', 'hotelia')), $cart_item_key);
	   		$prod_image = sprintf($link, get_permalink($cart_item['product_id']), $_product->get_image());
	   		$prod_content = sprintf($link, get_permalink($cart_item['product_id']), apply_filters('woocommerce_widget_cart_product_title', $_product->get_title(), $_product) );
	   		$prod_content .= sprintf('<span>%1$s</span><span>%2$s</span>', __('Unit price ','hotelia').$product_price, __('Q-ty: ','hotelia').$cart_item['quantity']);
	  		$items .= sprintf($item, $prod_image, $close_link.$prod_content);

		endforeach;
	else:
	    $items = '<li class="cart-empty">'. __('No items in cart. Keep shopping.', 'hotelia').'</li>';
	endif;

	return $output .= sprintf($container, $items, $button).'</li></ul>';
}

// Remove each style one by one
add_filter( 'woocommerce_enqueue_styles', 'hotelia_dequeue_styles' );
function hotelia_dequeue_styles( $enqueue_styles ) {
	//unset( $enqueue_styles['woocommerce-general'] );	// Remove the gloss
	unset( $enqueue_styles['woocommerce-layout'] );		// Remove the layout
	//unset( $enqueue_styles['woocommerce-smallscreen'] );	// Remove the smallscreen optimisation
	return $enqueue_styles;
}

if(!function_exists('my_meta')) {
	function my_meta($post_id = null, $key = null) {
		$meta = get_post_meta( $post_id, 'slide_options');

		if(array_key_exists($key, $meta[0])) {
			$meta = $meta[0][$key];
			return $meta;
		}
	}
}

function rank($num = null) {
	if(!empty($num)) {
		$pattern = '%s <i class="icon-%s text-red opacity-%s"></i>';
		switch ($num) {
			case $num == 1 || $num == 2:
				return sprintf($pattern, $num, '179', '30');
				break;

			case $num == 3 || $num == 4:
				return sprintf($pattern, $num, '178', '30');
				break;

			case $num = 5:
				return sprintf($pattern, $num, '178', '80');
				break;
			
			default:
				return;
				break;
		}
	}
}