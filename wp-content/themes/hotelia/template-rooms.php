<?php
/*
Template Name: Rooms
*/

get_header();

if ( have_posts() ) :
	// Start the Loop.	
	get_template_part( 'template', 'rooms-view');
else :
	// If no content, include the "No posts found" template.
	//get_template_part( 'content', 'none' );

endif;

get_footer();