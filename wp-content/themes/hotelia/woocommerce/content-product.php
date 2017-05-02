<?php
/**
 * The template for displaying product content within loops.
 *
 * Override this template by copying it to yourtheme/woocommerce/content-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product, $woocommerce_loop;

// se evalua que el producto no sea de hospedaje

$category_ids = $product->category_ids;
$isHosting = false; 
	if (!empty($category_ids)) {
		foreach ($category_ids as $key => $value) {
			if ($value == 57) {
				$isHosting = true;
				break;
			}
		}		
	}

// Store loop count we're currently on
if ( empty( $woocommerce_loop['loop'] ) )
	$woocommerce_loop['loop'] = 0;

// Store column count for displaying the grid
if ( empty( $woocommerce_loop['columns'] ) )
	$woocommerce_loop['columns'] = apply_filters( 'loop_shop_columns', is_active_sidebar('shop') ? 6 : 4 );

// Ensure visibility
if ( ! $product || ! $product->is_visible() )
	return;

// Increase loop count
$woocommerce_loop['loop']++;

// Extra post classes
$classes = array();
if ( 0 == ( $woocommerce_loop['loop'] - 1 ) % $woocommerce_loop['columns'] || 1 == $woocommerce_loop['columns'] )
	$classes[] = 'first';
if ( 0 == $woocommerce_loop['loop'] % $woocommerce_loop['columns'] )
	$classes[] = 'last';
?>

<?php 
	$classes = 'col-md-'.$woocommerce_loop['columns'];
?>
<li <?php post_class( $classes ); ?>>
	<div class="text-center">
		<figure>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<?php
					/**
					 * woocommerce_before_shop_loop_item_title hook
					 *
					 * @hooked woocommerce_show_product_loop_sale_flash - 10
					 * @hooked woocommerce_template_loop_product_thumbnail - 10
					 */
					do_action( 'woocommerce_before_shop_loop_item_title' );
				?>
			</a>
		</figure>
		<h3 class="text-dark-blue product-title">
			<a href="<?php the_permalink(); ?>" class="text-dark-blue hover-text-aquablue">
				<?php the_title(); ?>
			</a>
		</h3>
		<div class="rooms-description">
			<?php 
				if ($isHosting) {
					the_excerpt();
				}
			?>
			<div class="rooms-footer clearfix">
				
				<?php 
					if ($isHosting) {
						wc_get_template( 'loop/price.php' );
					} 
				?>
				<a href="<?php the_permalink(); ?>" class="button-sm to-right grey text-black hover-orange soft-corners add_to_cart_button product_type_simple"><?php echo __('Ver Mas'); ?></a>
				<?php //wc_get_template( 'loop/add-to-cart.php' ); ?>
			</div>
		</div>
	</div>

	<?php //do_action( 'woocommerce_before_shop_loop_item' ); ?>

	<?php //do_action( 'woocommerce_after_shop_loop_item' ); ?>

</li>