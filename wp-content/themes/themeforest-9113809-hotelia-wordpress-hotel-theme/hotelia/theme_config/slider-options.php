<?php

return array(
	'guestbook' => array(
		'name' => 'Guestbook',
		'term' => 'guestbook',
		'term_plural' => 'guestbook',
		'order' => 'ASC',
		'has_single' => false,
		'post_options' => array('supports'=>array('title','editor')),
		'taxonomy_options' => array('show_ui'=>true),
		'options' => array(
			'email_guest' => array(
				'type' => 'line',
				'description' => 'Guest e-mail',
				'title' => 'E-mail',
				'default' => ''
			),
			'rank_guest' => array(
				'type' => 'line',
				'description' => 'Guest satisfaction',
				'title' => 'The satisfaction',
				'default' => ''
			),
		),
		'icon' => 'icons/portfolio.png',
		'output_default' => 'main',
		'output' => array(
			'main' => array(
				'shortcode' => 'electra_team',
				'view' => 'views/team-view',
				'shortcode_defaults' => array(
					'title' => 'our team',
					'wide' => true,
					'background' => ''
				)
			)
		)
	),
	
);