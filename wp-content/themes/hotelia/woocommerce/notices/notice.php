<?php
/**
 * Show messages
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( ! $messages ) return;
?>

<div class="alert-box grey soft-corners">
	<?php foreach ( $messages as $message ) : ?>
		<h4 class="text-dark"><i class="icon-1 text-orange"></i><?php echo wp_kses_post( $message ); ?></h4>
	<?php endforeach; ?>
	<a href="#" class="close-alert text-dark"><i class="icon-131"></i></a>
</div>