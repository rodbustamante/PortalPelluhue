<?php
/**
 * WPBakery Visual Composer Shortcodes settings
 *
 * @package VPBakeryVisualComposer
 *
 */

$add_css_animation = array(
    'type' => 'dropdown',
    'heading' => __( 'CSS Animation', 'js_composer' ),
    'param_name' => 'css_animation',
    'admin_label' => true,
    'value' => array(
        __( 'No', 'js_composer' ) => '',
        __( 'Top to bottom', 'js_composer' ) => 'top-to-bottom',
        __( 'Bottom to top', 'js_composer' ) => 'bottom-to-top',
        __( 'Left to right', 'js_composer' ) => 'left-to-right',
        __( 'Right to left', 'js_composer' ) => 'right-to-left',
        __( 'Appear from center', 'js_composer' ) => "appear"
    ),
    'description' => __( 'Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers.', 'js_composer' )
);

$column_width_list = array(
    __('1 column - 1/12', 'js_composer') => '1/12',
    __('2 columns - 1/6', 'js_composer') => '1/6',
    __('3 columns - 1/4', 'js_composer') => '1/4',
    __('4 columns - 1/3', 'js_composer') => '1/3',
    __('5 columns - 5/12', 'js_composer') => '5/12',
    __('6 columns - 1/2', 'js_composer') => '1/2',
    __('7 columns - 7/12', 'js_composer') => '7/12',
    __('8 columns - 2/3', 'js_composer') => '2/3',
    __('9 columns - 3/4', 'js_composer') => '3/4',
    __('10 columns - 5/6', 'js_composer') => '5/6',
    __('11 columns - 11/12', 'js_composer') => '11/12',
    __('12 columns - 1/1', 'js_composer') => '1/1'
);

vc_map( array(
	'name' => __( 'Row', 'js_composer' ),
	'base' => 'vc_row',
	'is_container' => true,
	'icon' => 'icon-wpb-row',
	'show_settings_on_create' => false,
	'category' => __( 'Content', 'js_composer' ),
	'description' => __( 'Place content elements inside the row', 'js_composer' ),
	'params' => array(
		array(
	        "type" => "checkbox",
	        "heading" => __('Full size', 'js_composer'),
	        "param_name" => "no_container",
	        "description" => __("Make section 100% wide without container", "js_composer"),
	        "edit_field_class" => 'vc_col-md-12',
	        "value" => array(__("Don't use container", "js_composer") => true)
      	),
        array(
            "type" => "checkbox",
            "heading" => __('Use parallax for background-image', 'js_composer'),
            "param_name" => "parallax",
            "description" => __("Enable parallax for this section", "js_composer"),
            "edit_field_class" => 'vc_col-md-6',
            "value" => array(__("Allow parallax", "js_composer") => true)
        ),
        array(
            "type" => "checkbox",
            "heading" => __('Video Background', 'js_composer'),
            "param_name" => "video",
            "description" => __("Enable video background for this section", "js_composer"),
            "edit_field_class" => 'vc_col-md-6',
            "value" => array(__("Allow video", "js_composer") => 1)
        ),
        array(
            'type' => 'textfield',
            'heading' => __( 'Video source (mp4)', 'js_composer' ),
            'param_name' => 'source1',
            'description' => __( 'Provide video source in mp4', 'js_composer' ),
            "edit_field_class" => 'vc_col-md-12',
            'dependency'  => array(
                'element' => 'video',
                'value'   => array( 1 )
            ),
        ),
        array(
            'type' => 'textfield',
            'heading' => __( 'Video source (ogg)', 'js_composer' ),
            'param_name' => 'source2',
            'description' => __( 'Provide video source in mp4', 'js_composer' ),
            "edit_field_class" => 'vc_col-md-12',
            'dependency'  => array(
                'element' => 'video',
                'value'   => array( 1 )
            ),
        ),
        array(
            'type' => 'textfield',
            'heading' => __( 'Video source (webm)', 'js_composer' ),
            'param_name' => 'source3',
            'description' => __( 'Provide video source in mp4', 'js_composer' ),
            "edit_field_class" => 'vc_col-md-12',
            'dependency'  => array(
                'element' => 'video',
                'value'   => array( 1 )
            ),
        ),
		array(
			'type' => 'colorpicker',
			'heading' => __( 'Font Color', 'js_composer' ),
			'param_name' => 'font_color',
			'description' => __( 'Select font color', 'js_composer' ),
			'edit_field_class' => 'vc_col-md-6 vc_column'
		),
		array(
			'type' => 'textfield',
			'heading' => __( 'Extra class name', 'js_composer' ),
			'param_name' => 'el_class',
			'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
		),
		array(
			'type' => 'css_editor',
			'heading' => __( 'Css', 'js_composer' ),
			'param_name' => 'css',
			// 'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
			'group' => __( 'Design options', 'js_composer' )
		)
	),
	'js_view' => 'VcRowView'
) );

/* Custom Headings */
vc_map( array(
    'name' => __( 'Custom Heading', 'js_composer' ),
    'base' => 'vc_custom_heading',
    'icon' => 'icon-wpb-ui-custom_heading',
    'show_settings_on_create' => true,
    'category' => __( 'Content', 'js_composer' ),
    'description' => __( 'Add custom heading text with google fonts', 'js_composer' ),
    'params' => array(
        array(
            'type' => 'textarea',
            'heading' => __( 'Heading Text', 'js_composer' ),
            'param_name' => 'text',
            'admin_label' => true,
            'value'=> __( 'This is custom heading element with Google Fonts', 'js_composer' ),
            'description' => __( 'Enter your content. If you are using non-latin characters be sure to activate them under Settings/Visual Composer/General Settings.', 'js_composer' ),
        ),
        array(
            'type' => 'textarea',
            'heading' => __( 'Heading Description', 'js_composer' ),
            'param_name' => 'description',
            'admin_label' => true,
            'value'=> __( 'This is a description', 'js_composer' ),
            'description' => __( 'Enter your content. If you are using non-latin characters be sure to activate them under Settings/Visual Composer/General Settings.', 'j	s_composer' ),
        ),
        array(
            'type' => 'textfield',
            'heading' => __( 'Separator width', 'js_composer' ),
            'param_name' => 'separator_width',
            'description' => __( 'Choose range between 0 and 100.', 'js_composer' ),
            'value' => '0',
            'admin_label' => true
        ),

        array(
            'type' => 'textfield',
            'heading' => __( 'Link', 'js_composer' ),
            'param_name' => 'link',
            'description' => __( 'porvide url for heading', 'js_composer' ),
            'value' => '0',
            'admin_label' => true
        ), 

        array(
            'type' => 'font_container',
            'param_name' => 'font_container',
            'value'=>'',
            'settings'=>array(
                'fields'=>array(
                    'tag'=>'h1', // default value h2
                    'text_align' => 'center',
                    'font_size',
                    'line_height',
                    'color',
                    //'font_style_italic'
                    //'font_style_bold'
                    //'font_family'

                    'tag_description' => __('Select element tag.','js_composer'),
                    'text_align_description' => __('Select text alignment.','js_composer'),
                    'font_size_description' => __('Enter font size.','js_composer'),
                    'line_height_description' => __('Enter line height.','js_composer'),
                    'color_description' => __('Select color for your element.','js_composer'),
                    //'font_style_description' => __('Put your description here','js_composer'),
                    //'font_family_description' => __('Put your description here','js_composer'),
                ),
            ),
           // 'description' => __( '', 'js_composer' ),
        ),
        array(
            'type' => 'google_fonts',
            'param_name' => 'google_fonts',
            'value' => '',// Not recommended, this will override 'settings'. 'font_family:'.rawurlencode('Exo:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic').'|font_style:'.rawurlencode('900 bold italic:900:italic'),
            'settings' => array(
                //'no_font_style' // Method 1: To disable font style
                //'no_font_style'=>true // Method 2: To disable font style
                'fields'=>array(
                    'font_family'=>'Roboto:700', //'Exo:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic',// Default font family and all available styles to fetch
                    'font_style'=>'400 regular:400:normal', // Default font style. Name:weight:style, example: "800 bold regular:800:normal"
                    'font_family_description' => __('Select font family.','js_composer'),
                    'font_style_description' => __('Select font styling.','js_composer')
                )
            ),
           // 'description' => __( '', 'js_composer' ),
        ),
        array(
            'type' => 'textfield',
            'heading' => __( 'Extra class name', 'js_composer' ),
            'param_name' => 'el_class',
            'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
        ),
        array(
            'type' => 'css_editor',
            'heading' => __( 'Css', 'js_composer' ),
            'param_name' => 'css',
            // 'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
            'group' => __( 'Design options', 'js_composer' )
        )
    ),
) );

/* Facilities */

vc_map( array(
    'name' => __( 'Facilities', 'js_composer' ),
    'base' => 'facilities',
    'icon' => '',
    'show_settings_on_create' => true,
    'category' => __( 'Content', 'js_composer' ),
    'description' => __( 'Add facilities on your page', 'js_composer' ),
    'params' => array(
        array(
            'type' => 'param_group',
            'heading' => __( 'Contact info', 'js_composer' ),
            'param_name' => 'facilities_items',
            'description' => __( 'Enter values for graph - value, title and color.', 'js_composer' ),
            'value' => urlencode( json_encode( array(
                array(
                    'facilities_img'        => '',
                    'facilities_title'      => '',
                    'facilities_link'       => '',
                ),
        ) ) ),
        'params' => array(
                 array(
                    'type' => 'attach_image',
                    'heading' => __( 'Facility image', 'js_composer' ),
                    'param_name' => 'facilities_img',
                    'value' => '',
                    'description' => __( 'Select image from media library.', 'js_composer' )
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __( 'Facility name', 'js_composer' ),
                    'param_name' => 'facilities_title',
                    'description' => __( 'Enter text used as facility title', 'js_composer' ),
                    'admin_label' => true,
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __( 'Facility link', 'js_composer' ),
                    'param_name' => 'facilities_link',
                    'description' => __( 'Enter url for facility description', 'js_composer' ),
                    'admin_label' => true,
                ),
            )
        ),
        $add_css_animation,
        array(
            'type' => 'textfield',
            'heading' => __( 'Extra class name', 'js_composer' ),
            'param_name' => 'el_class',
            'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
        ),
        array(
            'type' => 'css_editor',
            'heading' => __( 'Css', 'js_composer' ),
            'param_name' => 'css',
            // 'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
            'group' => __( 'Design options', 'js_composer' )
        )
    ),
    //'js_view' => 'VcRowView'
) );

/* Gallery */

vc_map( array(
    'name' => __( 'Gallery', 'js_composer' ),
    'base' => 'photo_show',
    'icon' => '',
    'show_settings_on_create' => true,
    'category' => __( 'Content', 'js_composer' ),
    'description' => __( 'Create gallery ', 'js_composer' ),
    'params' => array(
        array(
            'type' => 'attach_images',
            'heading' => __( 'Images', 'js_composer' ),
            'param_name' => 'images',
            'value' => '',
            'description' => __( 'Select images from media library.', 'js_composer' )
        ),
        $add_css_animation,
        array(
            'type' => 'textfield',
            'heading' => __( 'Extra class name', 'js_composer' ),
            'param_name' => 'el_class',
            'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
        ),
        array(
            'type' => 'css_editor',
            'heading' => __( 'Css', 'js_composer' ),
            'param_name' => 'css',
            // 'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
            'group' => __( 'Design options', 'js_composer' )
        ),
    ),
) );

/* Address */

vc_map( array(
    'name' => __( 'Address', 'js_composer' ),
    'base' => 'address',
    'icon' => '',
    'show_settings_on_create' => true,
    'category' => __( 'Content', 'js_composer' ),
    'description' => __( 'Create gallery ', 'js_composer' ),
    'params' => array(
        array(
            'type' => 'exploded_textarea',
            'heading' => __( 'Address (town, street, zip, etc.)', 'js_composer' ),
            'param_name' => 'street',
            'description' => __( 'Input graph values, titles and color here. Divide values with linebreaks (Enter). Example: 90|Development|#e75956', 'js_composer' ),
            'value' => "HSC Pediatric Center|1731 Bunker Hill Road Northeast|Washington, DC 20017"
        ),
        array(
            'type' => 'exploded_textarea',
            'heading' => __( 'Phone numbers', 'js_composer' ),
            'param_name' => 'phone',
            'description' => __( 'Input graph values, titles and color here. Divide values with linebreaks (Enter). Example: 90|Development|#e75956', 'js_composer' ),
            'value' => "(202) 832-4400|(202) 832-4422"
        ),
        array(
            'type' => 'exploded_textarea',
            'heading' => __( 'Email addresses', 'js_composer' ),
            'param_name' => 'email',
            'description' => __( 'Input graph values, titles and color here. Divide values with linebreaks (Enter). Example: 90|Development|#e75956', 'js_composer' ),
            'value' => "hotelia@gmail.com|oteliagroup@gmail.com"
        ),
        $add_css_animation,
        array(
            'type' => 'textfield',
            'heading' => __( 'Extra class name', 'js_composer' ),
            'param_name' => 'el_class',
            'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
        ),
        array(
            'type' => 'css_editor',
            'heading' => __( 'Css', 'js_composer' ),
            'param_name' => 'css',
            // 'description' => __( 'If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.', 'js_composer' ),
            'group' => __( 'Design options', 'js_composer' )
        ),
    ),
) );


vc_map( array(
  "name" => __("Contact Form", "js_composer"),
  "base" => "contact_form",
  "is_container" => false,
  "icon" => "",
  "show_settings_on_create" => true,
  "category" => __('Content', 'js_composer'),
  "description" => __('Contact form', 'js_composer'),
  "params" => array(
    array(
       "type" => "dropdown",
        "heading" => __("Input Size", "js_composer"),
        "param_name" => "input_size",
        "value" => array(12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2),
        "description" => __("Set size for inputs", "js_composer"),
    ),
    array(
       "type" => "dropdown",
        "heading" => __("Text Size", "js_composer"),
        "param_name" => "text_size",
        "value" => array(12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2),
        "description" => __("Set size for inputs", "js_composer"),
    ),
    array(
      "type" => "textfield",
      "heading" => __("Placeholder for 'Name input'", "js_composer"),
      "param_name" => "contact_name",
      "description" => __("This string will be used as placeholder", "js_composer"),
    ),
    array(
      "type" => "textfield",
      "heading" => __("Placeholder for 'E-mail input'", "js_composer"),
      "param_name" => "contact_email",
      "description" => __("This string will be used as placeholder", "js_composer"),
    ),
     array(
      "type" => "textfield",
      "heading" => __("Placeholder for 'Web input'", "js_composer"),
      "param_name" => "contact_web",
      "description" => __("This string will be used as placeholder", "js_composer"),
    ),
    array(
      "type" => "textfield",
      "heading" => __("Placeholder for 'Textarea'", "js_composer"),
      "param_name" => "contact_text",
      "description" => __("This string will be used as placeholder", "js_composer"),
    ),
    array(
      "type" => "textfield",
      "heading" => __("Submit button value", "js_composer"),
      "param_name" => "button_name",
      "description" => __("Give submit button name", "js_composer"),
    ),
    array(
      "type" => "dropdown",
      "heading" => __("CSS Animation", "js_composer"),
      "param_name" => "css_animation",
      "admin_label" => true,
      "value" => array(__("No", "js_composer") => '', __("Top to bottom", "js_composer") => "top-to-bottom", __("Bottom to top", "js_composer") => "bottom-to-top", __("Left to right", "js_composer") => "left-to-right", __("Right to left", "js_composer") => "right-to-left", __("Appear from center", "js_composer") => "appear"),
      "description" => __("Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers.", "js_composer")
    ),
    array(
      "type" => "textfield",
      "heading" => __("Extra class name", "js_composer"),
      "param_name" => "extra_class",
      "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Design options', 'js_composer')
    ),
     array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "button_css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Button options', 'js_composer')
    ),
  )
) );



vc_map( array(
  "name" => __("Booking Form", "js_composer"),
  "base" => "booking_form",
  "is_container" => false,
  "icon" => "",
  "show_settings_on_create" => true,
  "category" => __('Content', 'js_composer'),
  "description" => __('Booking form', 'js_composer'),
  "params" => array(
    array(
      "type" => "textfield",
      "heading" => __("Extra class name", "js_composer"),
      "param_name" => "extra_class",
      "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Design options', 'js_composer')
    ),
    array(
      "type" => "dropdown",
      "heading" => __("CSS Animation", "js_composer"),
      "param_name" => "css_animation",
      "admin_label" => true,
      "value" => array(__("No", "js_composer") => '', __("Top to bottom", "js_composer") => "top-to-bottom", __("Bottom to top", "js_composer") => "bottom-to-top", __("Left to right", "js_composer") => "left-to-right", __("Right to left", "js_composer") => "right-to-left", __("Appear from center", "js_composer") => "appear"),
      "description" => __("Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers.", "js_composer")
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "button_css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Button options', 'js_composer')
    ),
  )
) );

vc_map( array(
  "name" => __("Review Form", "js_composer"),
  "base" => "review_form",
  "is_container" => false,
  "icon" => "",
  "show_settings_on_create" => true,
  "category" => __('Content', 'js_composer'),
  "description" => __('Contact form', 'js_composer'),
  "params" => array(
    array(
      "type" => "textfield",
      "heading" => __("Extra class name", "js_composer"),
      "param_name" => "extra_class",
      "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Design options', 'js_composer')
    ),
    array(
      "type" => "dropdown",
      "heading" => __("CSS Animation", "js_composer"),
      "param_name" => "css_animation",
      "admin_label" => true,
      "value" => array(__("No", "js_composer") => '', __("Top to bottom", "js_composer") => "top-to-bottom", __("Bottom to top", "js_composer") => "bottom-to-top", __("Left to right", "js_composer") => "left-to-right", __("Right to left", "js_composer") => "right-to-left", __("Appear from center", "js_composer") => "appear"),
      "description" => __("Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers.", "js_composer")
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "button_css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Button options', 'js_composer')
    ),
  )
) );

vc_map( array(
  "name" => __("Guestbook Form", "js_composer"),
  "base" => "guestbook_form",
  "is_container" => false,
  "icon" => "",
  "show_settings_on_create" => true,
  "category" => __('Content', 'js_composer'),
  "description" => __('Guestbook form to submit client\'s feedback', 'js_composer'),
  "params" => array(
    array(
      "type" => "textfield",
      "heading" => __("Extra class name", "js_composer"),
      "param_name" => "extra_class",
      "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Design options', 'js_composer')
    ),
    array(
      "type" => "dropdown",
      "heading" => __("CSS Animation", "js_composer"),
      "param_name" => "css_animation",
      "admin_label" => true,
      "value" => array(__("No", "js_composer") => '', __("Top to bottom", "js_composer") => "top-to-bottom", __("Bottom to top", "js_composer") => "bottom-to-top", __("Left to right", "js_composer") => "left-to-right", __("Right to left", "js_composer") => "right-to-left", __("Appear from center", "js_composer") => "appear"),
      "description" => __("Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers.", "js_composer")
    ),
    array(
        "type" => "css_editor",
        "heading" => __('Css', "js_composer"),
        "param_name" => "button_css",
        // "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "js_composer"),
        "group" => __('Button options', 'js_composer')
    ),
  )
) );