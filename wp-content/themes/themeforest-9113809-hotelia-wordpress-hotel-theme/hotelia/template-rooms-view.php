<section class="box">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="text-dark-blue text-center fancy-heading">
					<h1 class="font-700"><?php the_title(); ?></h1>
					<hr class="text-dark-blue size-30 center-me">
					<p><?php the_excerpt(); ?></p>
					<br>			
				</div>
			</div>
		</div> <!-- /.row -->

		<?php
			query_posts( array(
			      'posts' => '',
			      'post_type'=> 'rooms',
			      'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1 ),
			      'post_status' => array('publish')
			 ));
		?>

		<?php
			$rooms_cat = get_terms('rooms_tax');
		?>
		<?php if(!empty($rooms_cat)): ?>
		<div class="row">
			<div class="col-md-12">
				<div class="orange">
					<ul class="inline-list filter-tags center-me">
						<?php foreach ($rooms_cat as $key => $value): ?>
						<li>
							<a href="<?php echo get_term_link($value); ?>" class="text-white hover-text-orange"><?php echo $value->name; ?></a>
						</li>
						<?php endforeach; ?>
					</ul>
				</div>
				<br>
			</div>
		</div> <!-- /.row -->
		<?php endif; ?>

		<ul class="clean-list rooms-items row">
			<?php 
				if ( have_posts() ) {
					while ( have_posts() ) {
						the_post();
						get_template_part( 'content', 'rooms');
					} // end while
				} // end if
			?>				
		</ul> <!-- /.row -->

		<div class="row">
			<div class="col-md-12">
				<?php pagination_nav(); ?>
			</div>
		</div> <!-- /.row -->
	</div> <!-- /.container -->
</section>