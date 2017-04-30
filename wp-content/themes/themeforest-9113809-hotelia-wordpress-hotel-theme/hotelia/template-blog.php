<section class="box blog-box">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<ul class="row blog-post">
					<?php
						while ( have_posts() ) : the_post();			
							get_template_part( 'content', get_post_format() );
						endwhile;
					?>
				</ul><!-- /.row -->	
				<?php if(!have_posts() && is_search()) : ?>
					<div class="row"><h4><?php _e('No results found','hotelia') ?></h4></div>
				<?php endif; ?>
				<?php if(is_single()): ?>
					<div class="row">
						<div class="col-md-12">
							<div class="text-dark-blue text-center fancy-heading">
								<h1 class="font-700"><?php _e('Comments', 'hotelia'); ?></h1>
								<hr class="text-dark-blue">		
							</div>
							<p class="text-center text-aquablue">
								<i class="icon-239 font-2x"></i>
							</p>
							<?php comments_template(); ?>
						</div>
					</div>
				<?php endif; ?>
				<div class="row">
					<div class="col-md-12">
						<?php pagination_nav(); ?>
					</div>
				</div>
			</div> <!-- /.col-md-9 -->
			<div class="col-md-3 col-md-offset-1">
				<aside class="main-sidebar right-sidebar">
					<?php dynamic_sidebar('sidebar-1'); ?>
				</aside> <!-- /.main-sidebar -->
			</div> <!-- /.col-md-3 -->
		</div> <!-- /.row -->			
	</div> <!-- /.container -->
</section>