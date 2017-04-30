<li class="col-md-12">
	<article id="post-<?php the_ID(); ?>" <?php post_class('blog-item row no-padding'); ?>>
		<?php if(blog_post_thumbnail()):?>
			<?php if(is_single()): ?>
				<div class="col-md-12 col-sm-12">
					<?php echo blog_post_thumbnail(''); ?>
				</div>
				<div class="col-md-12 col-sm-12"><!-- Opening div -->
			<?php else: ?>
				<div class="col-md-5 col-sm-5">
					<?php echo blog_post_thumbnail('square-thumb'); ?>
				</div>
				<div class="col-md-7 col-sm-7"><!-- Opening div -->
			<?php endif; ?>
		<?php else: ?>
			<div class="col-md-12 col-sm-12"><!-- Opening div -->
		<?php endif; ?>
			<header class="blog-head">
				<h3 class="post-title">
					<?php if(!blog_post_thumbnail()):?>
						<span class="post-date-full text-center">
							<b class="font-13x"><?php echo esc_html(get_the_date('d')); ?></b>
							<span><?php echo esc_html(get_the_date('M')); ?></span>
						</span>
					<?php endif; ?>
					<?php
						$check_title = get_the_title();

						if ( is_single() ) :
							?><span><?php
							the_title();
							?></span><?php

						else :
							the_title( '<a href="' . esc_url( get_permalink() ) . '" class="font-500 text-dark-blue hover-text-blue" rel="bookmark">', '</a>' );
							
							if(empty($check_title)) {
								echo '<a href="' . esc_url( get_permalink() ) . '" class="font-500 text-dark-blue hover-text-blue" rel="bookmark">'.__('No title', 'hotelia').'</a>';
							}
						endif;
					?>
				</h3>
				<ul class="blog-meta clean-list">
					<li>
						<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" class="font-500 text-aquablue hover-text-dark-aquablue"> <i class="icon-347 font-13x"></i><?php echo get_the_author(); ?></a>
					</li>
					<?php if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) : ?>
						<li><?php comments_popup_link('<i class="icon-121 font-13x"></i> (0)', '<i class="icon-121 font-13x"></i> (1)','<i class="icon-121 font-13x"></i> (%)', 'text-aquablue hover-text-dark-aquablue' ); ?></li>
					<?php endif; ?>
					<li>
						<?php echo blog_category_list( __( ', ', 'hotelia' ) ); ?>
					</li>
				</ul>
			</header>
			<div class="blog-content">
				<?php
					the_excerpt();
					wp_link_pages( array(
						'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'hotelia' ) . '</span>',
						'after'       => '</div>',
						'link_before' => '<span>',
						'link_after'  => '</span>',
					) );

					if(is_single()) {
						share_post(get_permalink(), get_the_title(), 'test');
						the_tags( '<div class="tagcloud">', ' ', '</div>' );
					}
				?>
			</div>
		</div><!-- Closing -->
	</article>
</li>