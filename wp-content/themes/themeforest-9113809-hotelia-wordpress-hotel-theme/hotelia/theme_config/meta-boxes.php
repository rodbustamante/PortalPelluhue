<?php 
return array(
	'metaboxes'=>array(
		array(
		    'id'             => 'room_options',          // meta box id, unique per meta box
		    'title'          => 'Room Options',         // meta box title
		    'post_type'      => array('rooms'),
		    'priority'		 => 'low',
		    'context'		=> 'normal',
		    'input_fields'   => array(            // list of meta fields (can be added by field arrays)
		    	'room_price'=>array(
		    		'name'=>"Room price per night",
		    		'type'=>"text",
	    		),
	    		'price_currency'=>array(
			    		'name'=>'Currency',
			    		'type'=>'radio',
			    		'values'=>array(
			    				'$'=>'$',
			    				'€'=>'€',
			    				'£'=>'£',
			    			),
			    		'std'=>'$'  //default value selected
	    		),
	    	)
		)
	)
);