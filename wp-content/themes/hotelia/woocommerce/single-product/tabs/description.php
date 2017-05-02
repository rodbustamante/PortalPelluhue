<?php
/**
 * Description tab
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $woocommerce, $post;
print($isHosting);
$heading = esc_html( apply_filters( 'woocommerce_product_description_heading', __( 'Descripción', 'hotelia' ) ) );
?>
<?php if ($isHosting) : ?>
	<div class="text-dark-blue text-center fancy-heading">
		<h1 class="font-500"><?php echo $heading; ?></h1>
		<hr class="text-dark-blue">		
	</div>
<?php endif; ?>

<?php the_content(); ?>
