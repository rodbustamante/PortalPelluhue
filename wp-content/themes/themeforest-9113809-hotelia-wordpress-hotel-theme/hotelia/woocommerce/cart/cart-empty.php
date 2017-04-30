<?php
/**
 * Empty cart page
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wc_print_notices();

?>

<h3 class="text-dark-blue text-center"><?php _e( 'Your cart is currently empty.', 'hotelia' ) ?></h3>
<div class="text-center font-7x text-grey"><i class="icon-236"></i></div>

<?php do_action( 'woocommerce_cart_is_empty' ); ?>

<p class="return-to-shop text-center"><a class="button-md orange hover-dark-orange" href="<?php echo apply_filters( 'woocommerce_return_to_shop_redirect', get_permalink( wc_get_page_id( 'shop' ) ) ); ?>"><?php _e( 'Return To Shop', 'hotelia' ) ?></a></p>