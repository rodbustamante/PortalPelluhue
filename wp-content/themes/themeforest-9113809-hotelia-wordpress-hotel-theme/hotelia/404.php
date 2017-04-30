<?php
	get_header();

	?>

	<section class="shape-square-50 error-box">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="text-white">
						<h1 class="font-4x red center-me font-100 text-white uppercase"><?php _e('Error 404', 'hotelia'); ?></h1>
						<i class="icon-37 font-6x text-grey"></i><br>
						<span class="font-2x"><b class="uppercase"><?php _e('Are you lost?</b> Come in to drink <br> some coffee, or', 'hotelia'); ?></span>
						<br>
						<?php
							if(function_exists('woocommerce_get_page_id')) {
								$shop_url = get_permalink( woocommerce_get_page_id( 'shop' ) );								
							} else {
								$shop_url = get_home_url();
							}
						?>
						<a href="<?php echo $shop_url; ?>" class="button-md white text-dark font-13x hover-green"><?php _e('Find a room', 'hotelia') ?></a>
					</div>
				</div>
			</div>
		</div>
	</section>

<?php

	get_footer();