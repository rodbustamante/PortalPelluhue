<?php
/*
Template Name: Blog col two
*/

get_header();

if ( have_posts() ) :
	// Start the Loop.	
	get_template_part( 'template', 'blog-two');
else :
	// If no content, include the "No posts found" template.
	//get_template_part( 'content', 'none' );

endif;

get_footer();