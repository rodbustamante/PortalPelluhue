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

<section class="box" style="padding:0px;">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-6 text-center font-2x">
						<?php
						global $post, $product;
						?>
						<div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

							<p class="price"><?php echo $product->get_price_html(); ?></p>

							<meta itemprop="price" content="<?php echo $product->get_price(); ?>" />
						</div>
					</div>
					<div class="col-md-6">
						<?php wc_get_template( 'single-product/meta.php' ); ?>
					</div>
				</div>
				<br>
				<?php wc_get_template( 'single-product/tabs/description.php' ); ?>				
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
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
