<?php

function get_google_fonts(){
  $fonts_json = include TT_FW_DIR . '/static/google_fonts.php';
  return json_decode($fonts_json);
}

function seek_multidim_array($haystack, $needle){ // function to return the value of a key from a multidimensional array - mostly used by get_option method
  foreach($haystack as $key => $value){
    if($key === $needle){
      return $value;
      break;
    }elseif(is_array($value)){
      $found = seek_multidim_array($value, $needle);
      if (!empty($found)){
        return $found;
      }
    }
  }
}

function seek_multidim_array_all($haystack, $needle){ // function to return ALL VALUES of a same key from a multidimensional array - mostly used to insert default values in DB at theme init
  $found = '';
  foreach($haystack as $key => $value){
    $seek = FALSE;
    if($key === $needle){
      return $value . " "; //delimiter for implode latter used
    }elseif(is_array($value)){
      $seek = seek_multidim_array_all($value, $needle);
      if (!empty($seek) && $seek !=''){
        $found .= $seek;
      }
    }
  }
  if (!empty($found)){
    return $found;
  }else
    return FALSE;
}

function seek_options($haystack, $needles){ // function to return ALL VALUES of a same key from a multidimensional array - mostly used to insert default values in DB at theme init
  $found = '';
  foreach($haystack as $key => $value){
    $seek = FALSE;
    if($key === $needles){
      $result = $value . " "; //delimiter for implode latter used
      if (array_key_exists('font_changer',$haystack) && !empty($haystack['font_changer']))
        $result .= $value . " " . $value . "_font ";
      if (array_key_exists('color_changer',$haystack) && !empty($haystack['color_changer']))
        $result .= $value . " " . $value . "_color ";
      if (array_key_exists('font_size_changer',$haystack) && !empty($haystack['font_size_changer']))
        $result .= $value . " " . $value . "_size ";
      if (array_key_exists('icons',$haystack) && !empty($haystack['icons']))
        $result .= $value . " " . $value . "_icon ";
      return $result;
    }elseif(is_array($value)){
      $seek = seek_options($value, $needles);
      if (!empty($seek) && $seek !=''){
        $found .= $seek;
      }
    }
  }
  if (!empty($found)){
    return $found;
  }else
    return FALSE;
}

function _go($option_key){ // get admin options by array id
  $tt_theme_options = get_option(THEME_OPTIONS);
  if (isset($tt_theme_options[$option_key]))
    return $tt_theme_options[$option_key];
  else
    return NULL;
}

function _eo($option_key){ // get admin options by array id
  $tt_theme_options = get_option(THEME_OPTIONS);
  if (isset($tt_theme_options[$option_key]))
    print $tt_theme_options[$option_key];
  else
    return NULL;
}

function _gall(){
  $tt_theme_options = get_option(THEME_OPTIONS);
  return $tt_theme_options;
}
//Function that gets the correct array of repeated items from options by box key that contains the repeated box key
function _go_repeated($repeated_box_key){
  $admin_opt = include TT_THEME_DIR . '/theme_config/admin-options.php';
  $tt_theme_options = get_option(THEME_OPTIONS);
  $the_array = array();
  $repeated_box_fields = array();

  foreach ($admin_opt['tabs'] as $tab) {
    if (!empty($tab['boxes'][$repeated_box_key]['input_fields'])){
      $repeated_box_fields = $tab['boxes'][$repeated_box_key]['input_fields'];
      break;
    }
  }
  //print_r($repeated_box_fields);
  //var_dump( $tt_theme_options[  $repeated_box_fields [key($repeated_box_fields)]['id']  ] );
  $nr_items = count( $tt_theme_options[ $repeated_box_fields [key($repeated_box_fields)]['id'] ] ) ;
  if (!empty($repeated_box_fields)){
    for ($i = 0; $i < $nr_items ;$i++) {

      foreach ($repeated_box_fields as $repeated_input) {
        $new_row[$repeated_input['id']] = isset($tt_theme_options[$repeated_input['id']][$i]) ? $tt_theme_options[$repeated_input['id']][$i] : NULL;
      }
      $the_array[$i] = $new_row;
      
    }
    return $the_array;
  }
  return NULL;
}
//Function to escape html tags if text is wrapped in " [ html ] "
function escape_html($html){
  if(preg_match("@\[([^\]]+)\]@is",$html,$match))
    if (isset($match[1])){
      $html = preg_replace("#\[([^\]]+)\]#is", htmlspecialchars($match[1]),$html);
    }
  return $html;
}
//does the same as escape_html() only that it echoes the result
function escape_htmle($html){
  echo escape_html($html);
}

//-------------------Function to render gmap--------------------------------
function tt_gmap($map_id,$container_id ,$container_class='',$scrollzoom = 'true',$echo=true){
  global $tt_maps;
  $tt_maps[] = array(
    'tt_map_id' => $map_id,
    'tt_container_id' => $container_id ,
    'tt_scrollzoom' => $scrollzoom 
    );
  add_action('wp_footer','_gmap');  
  wp_enqueue_script('google_map', 'https://maps.googleapis.com/maps/api/js?key=' . _go($tt_maps[0]['tt_map_id'] . '_key') . '&v=3.exp&sensor=false&libraries=places', '', false, true);
  if($echo)
    echo "<div id='$container_id' class='$container_class'></div>";
  else
    return "<div id='$container_id' class='$container_class'></div>";
}

function _gmap(){
  global $tt_maps;
  if(!empty($tt_maps))
    foreach($tt_maps as $map){
      extract($map);
      $zoom_lvl = (_go($tt_map_id . '_zoom') != '')? _go($tt_map_id . '_zoom') : 4;
      $coords = (_go($tt_map_id . '_coords') != '')? _go($tt_map_id . '_coords') : "42.60,-41.16";
      $key = (_go($tt_map_id . '_key') != '')? _go($tt_map_id . '_key') : "";
      $marker_coords = (_go($tt_map_id . '_marker_coords') != '')? _go($tt_map_id . '_marker_coords') : "";
      $icon = (_go($tt_map_id . '_icon') != '')? _go($tt_map_id . '_icon') : "";
      $styles = (_go($tt_map_id . '_mapOptions') != '')? _go($tt_map_id . '_mapOptions') : "";
      $func_name = str_replace("-", '_', $tt_container_id);
      if(!empty($key))
        echo "<script type='text/javascript'>
                jQuery(document).ready(function($){

                  if (document.getElementById('$tt_container_id')) {

                    function initialize_".$func_name."() {
                      var mapOptions_".$func_name." = {
                                center: new google.maps.LatLng($coords),
                                zoom:$zoom_lvl,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                scrollwheel: $tt_scrollzoom,
                                $styles
                              };
                      var map_".$func_name." = new google.maps.Map(document.getElementById('$tt_container_id'),mapOptions_".$func_name.");
                      var icon = '$icon';
                      var shadow = '';
                      var shadow_link = icon.replace(/\.[^/.]+$/, '') + '-shadow.png' ;
                      if(shadow_link !== '')
                        shadow = new google.maps.MarkerImage(shadow_link ,
                            new google.maps.Size(25, 25),
                            new google.maps.Point(0, 0),
                            new google.maps.Point(12, 12)
                        );
                      var marker_".$func_name." = new google.maps.Marker({
                                map:map_".$func_name.",
                                animation: google.maps.Animation.DROP,
                                position: new google.maps.LatLng($marker_coords),
                                icon: icon
                              });
                    }
                    google.maps.event.addDomListener(window, 'load', initialize_".$func_name.");
                  }
                })
                </script>
                <style type='text/css' scoped>
                  .gmnoprint img{
                    max-width: none;
                  }
                </style>";
        else
          echo '<p class="tt_explain">Google map is disabled. Create an API key as per instructions here: <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">https://developers.google.com/maps/documentation/javascript/get-api-key</a></p>';
    }
}

/** 
* @updated : 1.9.3
*/
function tt_get_subscriptions(){
  return get_option( THEME_OPTIONS . '_subscribers' );
}

/* Convert hexdec color string to rgb(a) string */

function hex2rgba($color, $opacity = false) {

  $default = 'rgb(0,0,0)';

  //Return default if no color provided
  if(empty($color))
          return $default; 

  //Sanitize $color if "#" is provided 
        if ($color[0] == '#' ) {
          $color = substr( $color, 1 );
        }

        //Check if color has 6 or 3 characters and get values
        if (strlen($color) == 6) {
                $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
        } elseif ( strlen( $color ) == 3 ) {
                $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
        } else {
                return $default;
        }

        //Convert hexadec to rgb
        $rgb =  array_map('hexdec', $hex);

        //Check if opacity is set(rgba or rgb)
        if($opacity){
          if(abs($opacity) > 1)
            $opacity = 1.0;
          $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
        } else {
          $output = 'rgb('.implode(",",$rgb).')';
        }

        //Return rgb(a) color string
        return $output;
}

function darker_color($color,$darker_percent){
  if(preg_match('/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i', $color, $parts)){
    $darker_color = ""; // Prepare to fill with the results
    for($i = 1; $i <= 3; $i++) {
        $parts[$i] = hexdec($parts[$i]);
        $parts[$i] = round($parts[$i] * $darker_percent/100); // 80/100 = 80%, i.e. 20% darker
        // Increase or decrease it to fit your needs
        $darker_color .= str_pad(dechex($parts[$i]), 2, '0', STR_PAD_LEFT);
    }
    return $darker_color;
  }
  return FALSE;
}

//latest function for color adjusting
function adjustBrightness($hex, $steps) {
  // Steps should be between -255 and 255. Negative = darker, positive = lighter
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

function tt_get_value($input_nr,$input_id,$inputs_count){
  $options = get_option(THEME_OPTIONS);
  if ( ! empty( $options[ $input_id ] ) ){
    if(is_array($options[$input_id]))
      if(!empty($options[$input_id][(int)$input_nr/$inputs_count]))
        return $options[$input_id][(int)$input_nr/$inputs_count];
      else
        return NULL;
    return $options[ $input_id ] ;
  }else
    return NULL;
}

function tesla_locate_uri($template_names) {
  $located = '';
  foreach ( (array) $template_names as $template_name ) {
    if ( !$template_name )
      continue;
    if ( file_exists(STYLESHEETPATH . '/' . $template_name)) {
      $located = TT_STYLE_URI . '/' . $template_name;
      break;
    } else if ( file_exists(TEMPLATEPATH . '/' . $template_name) ) {
      $located = TT_THEME_URI . '/' . $template_name;
      break;
    }
  }

  return $located;
}