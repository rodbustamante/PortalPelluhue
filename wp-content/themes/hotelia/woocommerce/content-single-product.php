<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * Override this template by copying it to yourtheme/woocommerce/content-single-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>

<section class="box">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<?php wc_get_template( 'single-product/title.php' ); ?>
			</div>
			<?php wc_get_template( 'single-product/product-image.php' ); ?>
		</div>
	</div> <!-- /.container -->
</section> <!-- /.box -->
<section>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="grey room-disponibility text-center">
					<div class="row">
						<div class="col-md-4">
							<?php _e('Room is available','hotelia') ?>
						</div>
						<div class="col-md-3">
							<span class="white">
								<?php

									$room_available_from = get_post_meta(get_the_ID(), '_available_room_from');
									echo !empty($room_available_from[0]) ? $room_available_from[0] : '-'; ?>
							</span>
						</div>
						<div class="col-md-1">
							-
						</div>
						<div class="col-md-3">
							<span class="white">
								<?php
									$room_available_to = get_post_meta(get_the_ID(), '_available_room_to');
									echo !empty($room_available_to[0]) ? $room_available_to[0] : '-'; ?>								
							</span>
						</div>
					</div>
				</div>
				

				<div class="row">
					<div class="col-md-6">
						<?php wc_get_template( 'single-product/rating.php' ); ?>
						<?php the_excerpt(); ?>
					</div>
					<div class="col-md-6">
						<?php wc_get_template( 'single-product/meta.php' ); ?>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="text-center font-2x">
					<?php wc_get_template( 'single-product/price.php' ); ?>
				</div>
				<div class="add-cart text-center">
					<?php woocommerce_template_single_add_to_cart(); ?>					
				</div>
			</div>
		</div>
	</div>
</section>
<section class="box">
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<?php wc_get_template( 'single-product/tabs/description.php' ); ?>				
			</div>
			<div class="col-md-5">
				<?php comments_template(); ?>
			</div>
		</div>
	</div>
</section>
<section class="box">
	<div class="container">
		<?php 

			wc_get_template( 'single-product/up-sells.php', array(
				'posts_per_page'	=> 3,
				'orderby'			=> apply_filters( 'woocommerce_upsells_orderby', 'rand' ),
				'columns'			=> 4
			) );

		?>
	</div> <!-- /.container -->
</section>
