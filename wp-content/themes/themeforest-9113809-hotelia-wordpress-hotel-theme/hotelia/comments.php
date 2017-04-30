<?php
  if ( post_password_required() )
	 return;
?>

<div id="review-slider">
	<ul class="clean-list">
		<?php if ( have_comments() ) : ?>
			<li>
				<div id="custom-scroll" class="comments-holder">
					<ul class="clean-list comment-items grey">
						<?php theme_display_comments(); ?>
					</ul>
					<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
				      <nav class="navigation comment-navigation" role="navigation">
				        <ul>
				          <li class="nav-previous">
				            <?php previous_comments_link( __( '&larr; Older Comments', 'hotelia' ) ); ?>
				          </li>
				          <li class="nav-next">
				            <?php next_comments_link( __( 'Newer Comments &rarr;', 'hotelia' ) ); ?>
				          </li>
				        </ul>
				      </nav><!-- .comment-navigation -->
				    <?php endif; // Check for comment navigation ?>
				</div>
				<br>
				<a href="#" class="uppercase text-green hover-text-dark-green review-nav" data-target="next"><i class="icon-3"></i> <?php _e('Add a comment', 'hotelia'); ?></a>
			</li>
		<?php endif; ?>
		<li>
			<?php theme_comment_form(); ?>
		</li>
	</ul>
</div>