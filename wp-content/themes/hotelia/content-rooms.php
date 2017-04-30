<?php
	$clearfix = '';
	$meta = get_post_meta(get_the_ID());
	$price = $currency = '';

	if(!empty($meta['hotelia_room_price'][0])) {
		$price = $meta['hotelia_room_price'][0];
	}

	if(!empty($meta['hotelia_price_currency'][0])) {
		$currency = $meta['hotelia_price_currency'][0];
	}
?>
<?php //var_dump(3%3); ?>
<?php if($wp_query->current_post  % 3 === 0) {
	$clearfix = 'clearbox';
}?>
<li class="col-md-4 col-sm-6 <?php echo $clearfix; ?>">
	<div class="text-center">
		<h3 class="text-dark-blue"><a href="<?php the_permalink(); ?>" class="text-dark-blue hover-text-aquablue"><?php the_title(); ?></a></h3>
		<figure>
			<a href="<?php the_permalink(); ?>"  title="<?php the_title(); ?>">
				<?php the_post_thumbnail('full'); ?>
			</a>
			<figcaption class="green text-white">
				<?php show_amenities(get_the_ID()); ?>
			</figcaption>
		</figure>
		<div class="rooms-description">
			<?php the_excerpt(); ?>
			<div class="rooms-footer clearfix">
				<span class="to-left align-button">
					<?php _e('Price:', 'hotelia'); ?>
					<b class="text-aquablue font-13x font-300"><?php if_exist($price)+if_exist($currency) ?> <small class="font-05x">/<?php _e('night', 'hotelia') ?></small></b>
				</span>
				<a href="#" class="button-sm to-right grey text-black hover-orange soft-corners"><?php _e('Book now', 'hotelia'); ?></a>
			</div>
		</div>
	</div>
</li>		