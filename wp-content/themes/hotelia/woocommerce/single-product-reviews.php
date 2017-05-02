<?php
/**
 * Display single product reviews (comments)
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.1.0
 */
global $woocommerce, $product;

if ( ! defined( 'ABSPATH' ) )
	exit; // Exit if accessed directly

if ( ! comments_open() )
	return;
?>
<div id="reviews">				
		<div class="text-dark-blue text-center fancy-heading"><h1 class="font-500"><?php
				_e( 'Comentarios', 'hotelia' );
		?></h1><hr class="text-dark-blue"></div>

		<div id="review-slider">
			<ul class="clean-list">
				<li>
					<div id="custom-scroll" class="comments-holder">
						<div id="comments">


							<?php if ( have_comments() ) : ?>

								<ol class="commentlist">
									<?php wp_list_comments( apply_filters( 'woocommerce_product_review_list_args', array( 'callback' => 'woocommerce_comments' ) ) ); ?>
								</ol>

								<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
									echo '<nav class="woocommerce-pagination">';
									paginate_comments_links( apply_filters( 'woocommerce_comment_pagination_args', array(
										'prev_text' => '&larr;',
										'next_text' => '&rarr;',
										'type'      => 'list',
									) ) );
									echo '</nav>';
								endif; ?>

							<?php else : ?>

								<p class="woocommerce-noreviews"><?php _e( 'Sin comentarios aún', 'woocommerce' ); ?></p>

							<?php endif; ?>
						</div>
					</div>
					
				</li>
				<li>

				<?php if ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' || wc_customer_bought_product( '', get_current_user_id(), $product->id ) ) : ?>

					<div id="review_form_wrapper">
						<div id="review_form">
							<?php
								$commenter = wp_get_current_commenter();

								$comment_form = array(
									'title_reply'          => have_comments() ? __( 'Escribe un comentario', 'woocommerce' ) : __( 'Sé el primero en comentar', 'woocommerce' ) . ' &ldquo;' . get_the_title() . '&rdquo;',
									'title_reply_to'       => __( 'Leave a Reply to %s', 'woocommerce' ),
									'comment_notes_before' => '',
									'comment_notes_after'  => '',
									'fields'               => array(
										'author' => '<p class="comment-form-author">' . '<label for="author">' . __( 'Name', 'woocommerce' ) . ' <span class="required">*</span></label> ' .
										            '<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" aria-required="true" /></p>',
										'email'  => '<p class="comment-form-email"><label for="email">' . __( 'Email', 'woocommerce' ) . ' <span class="required">*</span></label> ' .
										            '<input id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30" aria-required="true" /></p>',
									),
									'label_submit'  => __( 'Enviar', 'woocommerce' ),
									'logged_in_as'  => '',
									'comment_field' => ''
								);

								if ( get_option( 'woocommerce_enable_review_rating' ) === 'yes' ) {
									$comment_form['comment_field'] = '<p class="comment-form-rating"><label for="rating">' . __( 'Tu valoración', 'woocommerce' ) .'</label><select name="rating" id="rating">
										<option value="">' . __( '	Rate&hellip;', 'woocommerce' ) . '</option>
										<option value="5">' . __( 'Perfecto', 'woocommerce' ) . '</option>
										<option value="4">' . __( 'Bueno', 'woocommerce' ) . '</option>
										<option value="3">' . __( 'Regular', 'woocommerce' ) . '</option>
										<option value="2">' . __( 'No tan mal', 'woocommerce' ) . '</option>
										<option value="1">' . __( 'Mal', 'woocommerce' ) . '</option>
									</select></p>';
								}

								$comment_form['comment_field'] .= '<p class="comment-form-comment"><label for="comment">' . __( 'Tu comentario', 'woocommerce' ) . '</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>';

								comment_form( apply_filters( 'woocommerce_product_review_comment_form_args', $comment_form ) );
							?>
						</div>
					</div>

				<?php else : ?>

					<p class="woocommerce-verification-required"><?php _e( 'Sólo usuarios registrados pueden comentar.', 'woocommerce' ); ?></p>

				<?php endif; ?>

			<div class="clear"></div>
				</li>
			</ul>
		</div>
		<br>
		<a href="#" class="uppercase text-green hover-text-dark-green review-nav" data-target="next"><i class="icon-366"></i> <?php esc_html_e( 'Escribe un comentario', 'hotelia' ); ?></a>
</div>