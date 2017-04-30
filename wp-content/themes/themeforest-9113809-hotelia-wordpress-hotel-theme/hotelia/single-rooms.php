<?php

get_header();

if ( have_posts() ) :
	// Start the Loop.	
	while ( have_posts() ) : the_post();
		the_content();
	endwhile;
	
endif;

get_footer();