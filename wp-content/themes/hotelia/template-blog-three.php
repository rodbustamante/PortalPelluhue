<section class="box">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul class="clean-list row blog-post">
					<?php
						query_posts( array(
						      'posts' => '',
						      'post_type'=> 'post',
						      'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1 ),
						      'post_status' => array('publish')
						));

						global $more;
						$more = 0;

						while ( have_posts() ) : the_post();			
							?>
									<?php if(is_sticky()): ?>
										<li class="col-md-12 col-sm-12">
									<?php else: ?>
										<li class="col-md-4 col-sm-4">
									<?php endif; ?>

									<article id="post-<?php the_ID(); ?>" <?php post_class('blog-item row no-padding'); ?>>
										<?php if(blog_post_thumbnail()):?>
											<?php if(is_sticky()): ?>
												<div class="col-md-5">
													<?php echo blog_post_thumbnail(); ?>
												</div>
												<div class="col-md-7">
											<?php else: ?>
											<div class="col-md-12">
												<?php echo blog_post_thumbnail(); ?>
											</div>
											<div class="col-md-12">
											<?php endif; ?>
										<?php else: ?>
											<div class="col-md-12">
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
														<?php echo blog_category_list( _x( ', ', '', 'hotelia' ) ); ?>
													</li>
												</ul>
											</header>
											<div class="blog-content">
												<?php
													the_content();
													wp_link_pages( array(
														'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'zero' ) . '</span>',
														'after'       => '</div>',
														'link_before' => '<span>',
														'link_after'  => '</span>',
													) );

													if(is_single()) {
														share_post(get_permalink(), get_the_title(), 'test');
														the_tags( '<div class="tagcloud">', ' ', '' );
													}
												?>
											</div>
										</div>
									</article>
								</li>

							<?php
						endwhile;
					?>					
				</ul><!-- /.row -->	
				<div class="row">
					<div class="col-md-12">
						<?php pagination_nav(); ?>
					</div>
				</div>
			</div> <!-- /.col-md-12 -->
		</div> <!-- /.row -->			
	</div> <!-- /.container -->
</section>