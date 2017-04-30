<?php
/**
 * Loop Price
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product;
?>

<?php if ( $price_html = $product->get_price_html() ) : ?>
	<span class="price to-left align-button"><b class="text-aquablue font-13x font-300"><?php echo 'Precio: ' . $price_html; ?></b></span>
<?php endif; ?>