<?php
get_header();

if ( have_posts() ) :
	// Start the Loop.
	if(is_home() || is_author() || is_category() || is_tag() || is_search()):	
		get_template_part( 'template', 'blog');

	else :
		while ( have_posts() ) : the_post();

			$check_visual = substr(get_the_content(), 0, 7);
			preg_match_all('/\[vc_row/', get_the_content(), $comment_find);

			if($check_visual === '[vc_row' || $comment_find[0] ) {
				the_content();				
			} else {
				?><section class="box"><div class="container"><div class="row"><div class="col-md-12"><?php
					the_content();	
				?></div></div></div></section><?php
			}

		endwhile;
	endif;
else :
	// If no content, include the "No posts found" template.
	//get_template_part( 'content', 'none' );
	if(is_search()) :
		get_template_part( 'template', 'blog');
	endif;

endif;

get_footer();