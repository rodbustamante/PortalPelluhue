<?php
/**
 * Lost password form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<div class="row">

    <div class="col-md-12">
        <?php wc_print_notices(); ?>        
    </div>
    <div class="col-md-6 col-md-offset-3">


        <form method="post" class="lost_reset_password">

        	<?php if( 'lost_password' == $args['form'] ) : ?>

                <p><?php echo apply_filters( 'woocommerce_lost_password_message', __( 'Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.', 'hotelia' ) ); ?></p>

                <p class="form-row form-row-first"><label for="user_login"><?php _e( 'Username or email', 'hotelia' ); ?></label> <input class="input-text" type="text" name="user_login" id="user_login" /></p>

        	<?php else : ?>

                <p><?php echo apply_filters( 'woocommerce_reset_password_message', __( 'Enter a new password below.', 'hotelia') ); ?></p>

                <p class="form-row form-row-first">
                    <label for="password_1"><?php _e( 'New password', 'hotelia' ); ?> <span class="required">*</span></label>
                    <input type="password" class="input-text" name="password_1" id="password_1" />
                </p>
                <p class="form-row form-row-last">
                    <label for="password_2"><?php _e( 'Re-enter new password', 'woocommerce' ); ?> <span class="required">*</span></label>
                    <input type="password" class="input-text" name="password_2" id="password_2" />
                </p>

                <input type="hidden" name="reset_key" value="<?php echo isset( $args['key'] ) ? $args['key'] : ''; ?>" />
                <input type="hidden" name="reset_login" value="<?php echo isset( $args['login'] ) ? $args['login'] : ''; ?>" />

            <?php endif; ?>

            <div class="clear"></div>

            <p class="form-row">
                <button  type="submit" name="wc_reset_password" class="button-sm full-size green text-white hover-dark-green"><?php echo 'lost_password' == $args['form'] ? __( 'Reset Password', 'hotelia' ) : __( 'Save', 'hotelia' ); ?></button>
            </p>
        	<?php wp_nonce_field( $args['form'] ); ?>

        </form>

    </div>

</div>