<?php

// 'size'=>'half_last',
// 'id'=>'logo_text',
// 'type'=>'text',
// 'note' => "Type the logo text here, then select a color, set a size and font",
// 'color_changer'=>true,
// 'font_changer'=>true,
// 'font_size_changer'=>array(1,10, 'em'),
// 'font_preview'=>array(true, true)

function make_input($size = null, $id = null, $type = null, $note = null, $values = null, $placeholder = null, $class= null) {
        $input_settings = array();
        $f = new ReflectionFunction('make_input');

        foreach ($f->getParameters() as $key => $value) {
               if(!empty($value->name))
                        $input_settings[$value->name] = ${$value->name};
        }

        return $input_settings;
}


return array(
        'favico' => array(
                'dir' => '/img/hotelia.png'
        ),
        'tabs' => array(
                    array(
                        'title' => 'General Options',
                        'icon' => 1,
                        'boxes' => array(
                                'Layout' => array(
                                        'icon' => 'customization',
                                        'size' => 'half',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => 'layout-style',
                                        'input_fields' => array(
                                                'Layout Style' => make_input('half', 'layout_style', 'radio', 'Set your layout style. This setting will be applied for all pages. Pay attention, only with "Boxed" layout you will be abile to view "Main Background" image or color.', array('Wide', 'Boxed'), ''),
                                        ),      
                                ),
                                'Favicon' => array(
                                        'icon' => 'customization',
                                        'size' => 'half_last',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => '',
                                        'input_fields' => array(
                                                'Favicon image' => make_input('half', 'favicon_link', 'image_upload', '' )
                                        ),      
                                ),
                                'Background Settings' => array(
                                        'icon' => 'customization',
                                        'size' => 'full',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => '',
                                        'input_fields' => array(
                                                'Main background' => make_input('half', 'body_background', 'image_upload', '' ),
                                                'Background Color' => make_input('half', 'body_color', 'colorpicker', '' ),
                                                'Background Repeat' => make_input('half', 'body_background_repeat', 'radio', '', array('Repeat', 'No-repeat', 'Repeat-X', 'Repeat-Y') ),
                                                'Background Position' => make_input('half', 'body_background_position', 'radio', '', array('Scroll', 'Fixed') ),
                                        ),      
                                ),
                    ),
                ),
                array(
                    'title' => 'Typography',
                    'icon' => 3,
                    'boxes' => array(
                        'Global Typography' => array(
                            'icon' => 'customization',
                            'size' => 'half',
                            'columns' => true,
                            'description' => '',
                            'class' => '',
                            'input_fields' => array(
                                'Global Typo'=>array(
                                        'size'=>'half',
                                        'id'=>'global_typo',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>true,
                                        'font_changer'=>true,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                            ),      
                        ),
                        'Links style' => array(
                            'icon' => 'customization',
                            'size' => 'half',
                            'columns' => true,
                            'description' => '',
                            'class' => '',
                            'input_fields' => array(
                                'Links options'=>array(
                                        'size'=>'half',
                                        'id'=>'links_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>true,
                                        'font_changer'=>true,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                            ),      
                        ),
                        'Headings style' => array(
                            'icon' => 'customization',
                            'size' => 'full',
                            'columns' => true,
                            'description' => '',
                            'class' => '',
                            'input_fields' => array(
                                'Headings options'=>array(
                                        'size'=>'full',
                                        'id'=>'headings_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>true,
                                        'font_changer'=>true,
                                        'font_size_changer'=> false,
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 1'=>array(
                                        'size'=>'1_3',
                                        'id'=>'headings_one_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 2'=>array(
                                        'size'=>'1_3',
                                        'id'=>'headings_two_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 3'=>array(
                                        'size'=>'1_3_last',
                                        'id'=>'headings_three_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 4'=>array(
                                        'size'=>'1_3',
                                        'id'=>'headings_four_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 5'=>array(
                                        'size'=>'1_3',
                                        'id'=>'headings_five_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                                'Headings 6'=>array(
                                        'size'=>'1_3_last',
                                        'id'=>'headings_six_settings',
                                        'type'=>'text',
                                        'note' => "",
                                        'color_changer'=>false,
                                        'font_changer'=>false,
                                        'font_size_changer'=>array(1,300, 'px'),
                                        'font_preview'=>array(false, false),
                                        'hide_input'=>true,
                                ),
                            ),      
                        ),
                    )
                ),
                array(
                    'title' => 'Customize defaults',
                    'icon' => 1,
                    'boxes' => array(
                            
                            'Main background colors' => array(
                                    'icon' => 'customization',
                                    'size' => 'full',
                                    'columns' => true,
                                    'description' => 'Overwrite default colors.',
                                    'class' => '',
                                    'input_fields' => array(
                                            'Blue' => make_input('1_3', 'blue_color', 'colorpicker', '' ),
                                            'Red' => make_input('1_3', 'red_color', 'colorpicker', '' ),
                                            'Green' => make_input('1_3_last', 'green_color', 'colorpicker', '' ),
                                            'Yellow' => make_input('1_3', 'yellow_color', 'colorpicker', '' ),
                                            'Brown' => make_input('1_3', 'brown_color', 'colorpicker', '' ),
                                            'Violet' => make_input('1_3_last', 'violet_color', 'colorpicker', '' ),
                                    ),      
                            ),
                    ),
                ),
                array(
                        'title' => 'Header',
                        'icon' => 8,
                        'boxes' => array(
                            'Header Settings' => array(
                                'icon' => 'customization',
                                'size' => 'full',
                                'columns' => true,
                                'description' => '',
                                'class' => '',
                                'input_fields' => array(
                                        'Header image' => make_input('half', 'header_image', 'image_upload', '' ),
                                        'Header Color' => make_input('half', 'header_color', 'colorpicker', '' ),
                                        'Background Repeat' => make_input('half', 'header_image_repeat', 'radio', '', array('Repeat', 'No-repeat', 'Repeat-X', 'Repeat-Y') ),
                                        'Background Position' => make_input('half', 'header_image_position', 'radio', '', array('Scroll', 'Fixed') ),
                                        'Header Margin' => make_input('mini', 'header_margin', 'text', '', '', 'top     right     bottom     left'),
                                        'Header Padding' => make_input('mini', 'header_padding', 'text', '', '', 'top     right     bottom     left'),
                                        'Header Bar Phone' => make_input('half', 'header_email', 'text', 'Header Email', '', ''),
                                        'Header Bar Address' => make_input('half', 'header_address', 'text', 'Header Address', '', ''),
                                        'Header bar Color' => make_input('half', 'header_bar_color', 'colorpicker', '' ),
                                        'Header bar Margin' => make_input('mini', 'header_bar_margin', 'text', '', '', 'top     right     bottom     left'),
                                        'Header bar Padding' => make_input('mini', 'header_bar_padding', 'text', '', '', 'top     right     bottom     left'),

                                ),      
                            ),
                            'Identity Settings' => array(
                                'icon' => 'customization',
                                'size' => 'full',
                                'columns' => true,
                                'description' => '',
                                'class' => 'identity-helper',
                                'input_fields' => array(
                                        'Logo' => make_input('half', 'logo_image', 'image_upload', '' ),
                                        'Logo As Text'=>array(
                                                        'size'=>'half',
                                                        'id'=>'logo_text',
                                                        'type'=>'text',
                                                        'note' => "",
                                                        'color_changer'=>true,
                                                        'font_changer'=>true,
                                                        'font_size_changer'=>array(1,300, 'px'),
                                                        'font_preview'=>array(true, true)
                                                ),
                                        'Logo Color' => make_input('half', 'logo_color', 'colorpicker', '' ),
                                        'logo Margin' => make_input('mini', 'logo_margin', 'text', '', '', 'top     right     bottom     left'),
                                        'Logo Padding' => make_input('mini', 'logo_padding', 'text', '', '', 'top     right     bottom     left'),
                                        'Logo Container Size' => array(
                                                        'size' => 'mini',
                                                        'id' => 'logo_size',
                                                        'type' => 'select',
                                                        'note' => '',
                                                        'options' => array('4'=>'default',1=>1,2=>2,3=>3,4=>4,5=>5,6=>6,7=>7,8=>8,9=>9,10=>10,11=>11,12=>12),
                                                ),
                                        'Logo position' => array(
                                                        'size' => 'mini',
                                                        'id' => 'logo_position',
                                                        'type' => 'select',
                                                        'note' => '',
                                                        'options' => array('Left' => 'left', 'Center' => 'center', 'Right' => 'right')
                                                ),
                                ),      
                            ),
                            'Menu Settings' => array(
                                'icon' => 'customization',
                                'size' => 'full',
                                'columns' => true,
                                'description' => '',
                                'class' => 'identity-helper',
                                'input_fields' => array(
                                        'Menu background' => make_input('half', 'menu_color', 'colorpicker', '' ),
                                        'Menu Margin' => make_input('mini', 'menu_margin', 'text', '', '', 'top     right     bottom     left'),
                                        'Menu Padding' => make_input('mini', 'menu_padding', 'text', '', '', 'top     right     bottom     left'),
                                        'Menu Container Size' => array(
                                                        'size' => 'mini',
                                                        'id' => 'menu_size',
                                                        'type' => 'select',
                                                        'note' => '',
                                                        'options' => array('Default'=>'default',1=>1,2=>2,3=>3,4=>4,5=>5,6=>6,7=>7,8=>8,9=>9,10=>10,11=>11,12=>12),
                                                ),
                                        'Menu position' => array(
                                                        'size' => 'mini',
                                                        'id' => 'menu_position',
                                                        'type' => 'select',
                                                        'note' => '',
                                                        'options' => array('Right' => 'to-right', 'Left' => 'to-left', 'Center' => 'center-me')
                                                ),
                                        'Menu link background' => make_input('half', 'menu_link_color', 'colorpicker', '' ),
                                        'Menu link Margin' => make_input('mini', 'menu_link_margin', 'text', '', '', 'top     right     bottom     left'),
                                        'Menu link Padding' => make_input('mini', 'menu_link_padding', 'text', '', '', 'top     right     bottom     left'),
                                        'Menu link hover background' => make_input('mini', 'menu_link_hover_color', 'colorpicker', '' ),
                                        'No menu hover background' => make_input('mini', 'no_menu_link_hover_color', 'checkbox', '', '' ),
                                        'Don\'t use the search room form' => make_input('half', 'no_search_room', 'checkbox', '', '' ),
                                ),      
                            ),
                        )
                ),
                array(
                        'title' => 'Footer',
                        'icon' => 8,
                        'boxes' => array(
                                'Footer style' => array(
                                        'icon' => 'customization',
                                        'size' => 'full',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => '',
                                        'input_fields' => array(
                                                'Footer background' => make_input('half', 'footer_background', 'image_upload', '' ),
                                                'Footer Color' => make_input('half', 'footer_color', 'colorpicker', '' ),
                                                'Footer background Repeat' => make_input('half', 'footer_background_repeat', 'radio', '', array('Repeat', 'No-repeat', 'Repeat-X', 'Repeat-Y') ),
                                                'Footer background Position' => make_input('half', 'footer_background_position', 'radio', '', array('Scroll', 'Fixed') ),
                                                 'No footer widgets' => make_input('mini', 'footer_widgets', 'checkbox', '', '' ),
                                        ),      
                                ),
                                'Footer info' => array(
                                        'icon' => 'customization',
                                        'size' => 'full',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => '',
                                        'input_fields' => array(
                                            'Footer logo' => make_input('half', 'footer_logo', 'image_upload', '' ),
                                            'Footer info' => make_input('half', 'footer_info', 'textarea', 'Use any shortcode to show any UI component in the footer', '', 'your content'),
                                            'Footer copyright' => make_input('half', 'copyright_message', 'textarea', 'Insert here footer copyright message', '', 'your content'),
                                        ),      
                                ),
                                'Social Platforms'=>array(
                                        'icon'=>'social',
                                        'description'=>"Insert the link to the social share page.",
                                        'size'=>'full',
                                        'columns'=>true,
                                        'input_fields'=>array(
                                                'Social title' => make_input('full', 'social_title', 'text', '', '', 'Section title'),
                                                array(
                                                        'id'=>'social_platforms',
                                                        'size'=>'full',
                                                        'type'=>'social_platforms',
                                                        'platforms'=>array('facebook','twitter','linkedin','rss','skype','google')
                                                )
                                        )
                                ),
                                'Flickr gallery' => array(
                                        'icon' => 'customization',
                                        'size' => 'full',
                                        'columns' => true,
                                        'description' => '',
                                        'class' => '',
                                        'input_fields' => array(
                                            'Flickr title' => make_input('half', 'flickr_title', 'text', '', '', 'Flickr Photo'),
                                            'Flickr user' => make_input('half', 'flickr_user', 'text', '', '', '36587311@N08'),
                                            'Flickr items' => make_input('half', 'flickr_items', 'text', '', '', '6'),
                                        ),      
                                ),
                    ),
                ),
                array(
                        'title' => '404 eror',
                        'icon' => 8,
                        'boxes' => array(
                                '404 content' => array(
                                        'icon'=>'',
                                        'size'=>'full',
                                        'description'=>'Here you can drop your 404 error content',
                                            'input_fields' => array(
                                                     '404 error page content' => make_input('full', '404_error', 'textarea', 'Add content for your 404 page', '', 'your content'),
                                            )
                                ),
                            )
                ),
                array(
                        'title' => 'Developer',
                        'icon' => 6,
                        'boxes' => array(
                                'Custom CSS' => array(
                                        'icon'=>'css',
                                        'size'=>'full',
                                        'description'=>'Here you can write your personal CSS for customizing the classes you choose to modify.',
                                            'input_fields' => array(
                                                    make_input('half', 'custom_css', 'textarea', '' )
                                            )
                                ),
                                'Custom JS' => array(
                                        'icon'=>'css    ',
                                        'size'=>'full',
                                        'description'=>'Here you can write your personal JS that will be appended to footer.',
                                            'input_fields' => array(
                                                    make_input('half', 'custom_js', 'textarea', '' )
                                            )
                                ),
                            ),
                ),
                array(
                        'title' => 'Subscribers',
                        'icon' => 3,
                        'boxes' => array(
                                'Subscribe form meta' => array(
                                        'icon'=>'',
                                        'size'=>'full',
                                        'description'=>'Here you can add additional info for subscribe form',
                                            'input_fields' => array(
                                                'subscribe title and text'   => make_input('full', 'subscribe_title', 'text', '' ),
                                                make_input('full', 'subscribe_text', 'textarea', '' ),
                                            )
                                ),
                                'Subscribers'=>array(
                                        'icon' => 'social',
                                        'description'=>'First 20 subscribers are listed here. To get the full list export files using buttons below:',
                                        'size'=>'full',
                                        'input_fields' => array(
                                                array(
                                                        'type'=>'subscription',
                                                        'id'=>'subscribe-form'
                                                )
                                        )
                                )
                            ),
                ),
            array(
                        'title' => 'Our Themes',
                        'icon'  => 8,
                        'type'=>'iframe',
                        'link'=>'http://teslathemes.com/our-themes/'
                )

        ),
        'option_saved_text' => 'Options successfully saved',
        'styles' => array( array('wp-color-picker'),'style','select2' ),
        'scripts' => array( array( 'jquery', 'jquery-ui-core','jquery-ui-datepicker','wp-color-picker' ), 'select2.min','jquery.cookie','tt_options', 'admin_js' )
);