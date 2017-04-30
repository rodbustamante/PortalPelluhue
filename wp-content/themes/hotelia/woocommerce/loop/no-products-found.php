<?php
/**
 * Displayed when no products are found matching the current query.
 *
 * Override this template by copying it to yourtheme/woocommerce/loop/no-products-found.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>
<div class="alert-box grey soft-corners">
	<h4 class="text-dark"><i class="icon-181"></i> <?php _e( 'No products were found matching your selection.', 'hotelia' ); ?></h4>
	<a href="#" class="close-alert text-dark"><i class="icon-131"></i></a>
</div>