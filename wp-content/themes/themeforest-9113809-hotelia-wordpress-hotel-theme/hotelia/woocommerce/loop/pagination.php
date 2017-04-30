<?php
/**
 * Pagination - Show numbered pagination for catalog pages.
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $wp_query;

if ( $wp_query->max_num_pages <= 1 )
	return;
?>

<div class="row">
	<div class="col-md-12">
<ul class="inline-list center-me pagination-links">
	<?php
		$pagination =  paginate_links( apply_filters( 'woocommerce_pagination_args', array(
			'base'         => str_replace( 999999999, '%#%', get_pagenum_link( 999999999 ) ),
			'format'       => '',
			'current'      => max( 1, get_query_var( 'paged' ) ),
			'total'        => $wp_query->max_num_pages,
			'prev_text'    => __('Prev', 'hotelia'),
			'next_text'    => __('Next', 'hotelia'),
			'type'         => 'array',
			'end_size'     => 3,
			'mid_size'     => 3
		) ) );

		//var_dump($pagination);

		if(!empty($pagination)) {
			foreach ($pagination as $key => $menu_item) {
				# code...			
				echo sprintf('<li>%s</li>', $menu_item);
			}
		}
	?>
</ul>
</div>
</div>

