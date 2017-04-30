<form action="<?php echo  esc_url( home_url( '/'  ) ); ?>" class="row no-padding">
	<input type="hidden" name="post_type" value="product" />
	<div class="col-md-6">
		
		<?php 
			$args = array(
				'post_type' => 'product',
				'posts_per_page' => -1
			);
			$loop = new WP_Query( $args );
		if ( $loop->have_posts() ): ?>

		<i class="icon-201"></i>
		<input type="text" name="s" readonly="" class="room-select" placeholder="<?php _e( 'Room', 'hotelia' ); ?>">
		<ul class="clean-list font-small" style="display: none;">
			<?php
				$i = 0;
				$rooms = array();
				while ( $loop->have_posts() ) : $loop->the_post();
					$rooms[] = $loop->posts[$i]->post_title;
					$i++;
				endwhile;

				$rooms = array_unique($rooms);

				foreach ($rooms as $key => $value) {
					printf('<li>%s</li>', $value);
				}
			?>
		</ul>

		<?php else: ?>
			<i class="icon-383"></i>
			<input type="text" value="<?php echo get_search_query(); ?>" name="s" id="s" placeholder="<?php _e( 'Search for rooms', 'hotelia' ); ?>" />
		<?php endif; wp_reset_postdata(); ?>

	</div>
	<div class="col-md-2">
		<i class="icon-233"></i>
		<input type="text" id="check-in" name="check_in" placeholder="<?php _e('Check in', 'hotelia'); ?>">
	</div>
	<div class="col-md-2">
		<i class="icon-233"></i>
		<input type="text" id="check-out" name="check_out" placeholder="<?php _e('Check_out', 'hotelia');?>">
	</div>
	<div class="col-md-2 text-right">
		<button type="submit" class="button-md green hover-dark-green soft-corners"><?php echo esc_attr__( 'Find now', 'hotelia' ) ?></button>
	</div>
</form>