<?php
/**
 * Single Product Image
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.14
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post, $woocommerce, $product;

$attachment_ids = $product->get_gallery_attachment_ids();

if( has_post_thumbnail() && !empty($attachment_ids)) {
	array_unshift($attachment_ids, get_post_thumbnail_id());
}

?>
<div class="col-md-12">
	<div class="preview-room">
		<ul class="clean-list">
			<?php
				if(!empty($attachment_ids)):
					foreach ($attachment_ids as $key => $id):
						$image_title = esc_attr( get_the_title( $id ) );
						$image_link  = wp_get_attachment_url( $id );
						$image       = wp_get_attachment_image( $id, apply_filters( 'single_product_large_thumbnail_size', 'full' ), array(
							'title' => $image_title
						) );
			?>
			<li>
				<figure>
					<?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="zoom-image" title="%s" >%s</a>', $image_link, $image_title, $image ), $post->ID ); ?>
				</figure>
			</li>
			<?php endforeach; endif; ?>							
		</ul>
	</div>
</div>
<div class="col-md-12">
	<div class="preview-room-nav">
		<ul class="clean-list">
			<?php
				if(!empty($attachment_ids)):
					foreach ($attachment_ids as $key => $id):
						$image_title = esc_attr( get_the_title( $id ) );
						$image_link  = wp_get_attachment_url( $id );
						$image       = wp_get_attachment_image( $id, apply_filters( 'single_product_small_thumbnail_size', 'shop_single' ), array(
							'title' => $image_title
						) );
			?>
			<li>
				<figure>
					<?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" data-target="%s" itemprop="image" title="%s" >%s</a>', $image_link, $key+1, $image_title, $image ), $post->ID ); ?>
				</figure>
			</li>
			<?php endforeach; endif; ?>									
		</ul>
	</div>
</div>