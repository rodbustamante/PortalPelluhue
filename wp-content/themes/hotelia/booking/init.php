<?php

	add_filter( 'product_type_selector', 'add_product_type' );
	function add_product_type( $types ){
	    $types[ 'simple' ] = __( 'Rooms', 'hotelia');
	    return $types;
	}

	add_action( 'woocommerce_product_options_pricing', 'new_pricing_options');

	function new_pricing_options() {
		 global $woocommerce, $post;
        echo '<div class="options_group">';
        // Checkbox
        woocommerce_wp_checkbox(array(
            'id' 				=> '_booking_option', 
            'class' 			=> 'wc_booking_option checkbox', 
            'wrapper_class' 	=> 'show_if_simple',
            'label' 			=> __( 'Add booking option', 'hotelia' )
        ));

        woocommerce_wp_text_input( array(
        	'id' 				=> '_available_room_from',
        	'data_type' 		=> '',
        	'label' 			=> __( 'Room available from:', 'hotelia' ), 
        	'description'		 => '' )
        );

        woocommerce_wp_text_input( array(
        	'id' 				=> '_available_room_to',
        	'data_type' 		=> '',
        	'label' 			=> __( 'Room available to:', 'hotelia' ), 
        	'description'		 => '' )
        );

        echo '</div>';
	}

	add_action( 'woocommerce_process_product_meta', 'save_meta');
	function save_meta($post_id) {
		$woocommerce_checkbox = isset( $_POST['_booking_option'] ) ? 'yes' : '';
        update_post_meta( $post_id, '_booking_option', $woocommerce_checkbox );

        $woo_from = isset( $_POST['_available_room_from'] ) ?  $_POST['_available_room_from'] : '';
        update_post_meta( $post_id, '_available_room_from', $woo_from );

        $woo_to = isset( $_POST['_available_room_to'] ) ? $_POST['_available_room_to']  : '';
        update_post_meta( $post_id, '_available_room_to', $woo_to );
	}

	add_filter('woocommerce_get_price_html', 'price_per_day');

	function price_per_day($content) {
		global $woocommerce, $post, $product;

		$booking_opt = get_post_meta($post->ID, '_booking_option', true);

		if($booking_opt === 'yes') {
			return $content . __(' / night', 'hotelia');
		} else {
			return $content;
		}

	}

	remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs' );

	function woocommerce_output_product_data_tabs() {
		return;
	}

	add_filter( 'woocommerce_output_related_products_args', 'jk_related_products_args' );
		
		function jk_related_products_args( $args ) {
		 
			$args['posts_per_page'] = 4; // 4 related products
			$args['columns'] = 5; // arranged in 2 columns
			return $args;
	}