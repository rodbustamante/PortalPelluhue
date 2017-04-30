<?php

/**
* Include all shortcodes 
*
* Use shortcodes for visual composer plugin
*
*
*/

function shortcode_css($css = null) {
   if(!empty($css)) {
      $css = explode('{', $css);
      $css = $css[0];
      $css = substr($css, 1);

      return $css;  
   }

   return;
}

// function using_bootstrap($class_string, $tag) {
//   if ($tag=='vc_row' || $tag=='vc_row_inner') {
//     $class_string = str_replace('vc_row-fluid', 'row', $class_string);
//   }
//   if ($tag=='vc_column' || $tag=='vc_column_inner') {
//     $class_string = preg_replace('/vc_span(\d{1,2})/', 'col-md-$1', $class_string);
//   }
//   return $class_string;
// }
// Filter to Replace default css class for vc_row shortcode and vc_column
//add_filter('vc_shortcodes_css_class', 'using_bootstrap', 10, 2);

// function position_el($text ='', $position = '') {
//     if(!empty($text)) {
//       switch ($text) {
//           case 'right':
//               return "text-right";
//               break;
//           case 'left':
//               return "text-left";
//               break;
//           case 'center':
//               return "text-center";
//               break;
//       }
//     }

//     if(!empty($position)) {
//       switch ($position) {
//           case 'right':
//               return "to-right";
//               break;
//           case 'left':
//               return "to-left";
//               break;
//           case 'center':
//               return "center-me";
//               break;
//       }
//     }
// }

define('SHORTCODE_URL', get_template_directory() . '/shortcodes/');
vc_set_template_dir(SHORTCODE_URL.'lib/');

require_once(get_template_directory() .'/shortcodes/params.php');
require_once(get_template_directory() .'/shortcodes/map.php');

$shortcodes_tree = array('facilities', 'gallery', 'address', 'contact', 'booking', 'review', 'guestbook-form');

if(!empty($shortcodes_tree)) {
   foreach ($shortcodes_tree as $key => $value) {
     require_once(SHORTCODE_URL.'custom/' . $value. '.php');
   }
}


/* Shortcode Settings */


function heading_tags() {   
   return $allowed_tags = array('h1','h2','h3','h4','h5','h6','p','div',);
}

add_filter( 'vc_font_container_get_allowed_tags', 'heading_tags' );