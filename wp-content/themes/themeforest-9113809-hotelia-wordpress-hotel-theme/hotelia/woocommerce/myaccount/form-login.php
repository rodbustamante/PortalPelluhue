<?php
/**
 * Login Form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<div class="row">
	<div class="col-md-12">
		<?php wc_print_notices(); ?>
		<?php do_action( 'woocommerce_before_customer_login_form' ); ?>
	</div>

	<div class="col-md-6">		
		<?php if ( get_option( 'woocommerce_enable_myaccount_registration' ) === 'yes' ) : ?>
			<div id="customer_login">
				<h3 class="text-dark-blue"><?php _e( 'Login', 'hotelia' ); ?></h3>

				<form method="post" class="login">

					<?php do_action( 'woocommerce_login_form_start' ); ?>

					<p class="form-row form-row-wide">
						<label for="username"><?php _e( 'Username or email address', 'hotelia' ); ?> <span class="required">*</span></label>
						<input type="text" class="input-text" name="username" id="username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
					</p>
					<p class="form-row form-row-wide">
						<label for="password"><?php _e( 'Password', 'hotelia' ); ?> <span class="required">*</span></label>
						<input class="input-text" type="password" name="password" id="password" />
					</p>

					<?php do_action( 'woocommerce_login_form' ); ?>

					<p class="form-row">
						<?php wp_nonce_field( 'woocommerce-login' ); ?>
						<button  type="submit" name="login" class="button-sm to-right green text-white hover-dark-green"><?php _e( 'Login', 'hotelia' ); ?></button>
						<label for="rememberme" class="inline">
							<input name="rememberme" type="checkbox" id="rememberme" value="forever" /> <?php _e( 'Remember me', 'hotelia' ); ?>
						</label>
					</p>
					<p class="lost_password">
						<a href="<?php echo esc_url( wc_lostpassword_url() ); ?>" class="text-orange"><?php _e( 'Lost your password?', 'hotelia' ); ?></a>
					</p>

					<?php do_action( 'woocommerce_login_form_end' ); ?>

				</form>
			</div>
		<?php endif; ?>
		
	</div>

	<div class="col-md-6">
		<?php if ( get_option( 'woocommerce_enable_myaccount_registration' ) === 'yes' ) : ?>
		<div>
			<h3 class="text-dark-blue"><?php _e( 'Register', 'hotelia' ); ?></h3>
			<form method="post" class="register">

				<?php do_action( 'woocommerce_register_form_start' ); ?>

				<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

					<p class="form-row form-row-wide">
						<label for="reg_username"><?php _e( 'Username', 'hotelia' ); ?> <span class="required">*</span></label>
						<input type="text" class="input-text" name="username" id="reg_username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
					</p>

				<?php endif; ?>

				<p class="form-row form-row-wide">
					<label for="reg_email"><?php _e( 'Email address', 'hotelia' ); ?> <span class="required">*</span></label>
					<input type="email" class="input-text" name="email" id="reg_email" value="<?php if ( ! empty( $_POST['email'] ) ) echo esc_attr( $_POST['email'] ); ?>" />
				</p>

				<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>
		
					<p class="form-row form-row-wide">
						<label for="reg_password"><?php _e( 'Password', 'hotelia' ); ?> <span class="required">*</span></label>
						<input type="password" class="input-text" name="password" id="reg_password" />
					</p>

				<?php endif; ?>

				<!-- Spam Trap -->
				<div style="left:-999em; position:absolute;"><label for="trap"><?php _e( 'Anti-spam', 'hotelia' ); ?></label><input type="text" name="email_2" id="trap" tabindex="-1" /></div>

				<?php do_action( 'woocommerce_register_form' ); ?>
				<?php do_action( 'register_form' ); ?>

				<p class="form-row">
					<?php wp_nonce_field( 'woocommerce-register', 'register' ); ?>
					<button  type="submit" name="register" class="button-sm to-right green text-white hover-dark-green"><?php _e( 'Register', 'hotelia' ); ?></button>
				</p>

				<?php do_action( 'woocommerce_register_form_end' ); ?>

			</form>
		</div>
		<?php endif; ?>
	</div>
</div>

<div class="row">
	<div class="col-md-12">
		<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
	</div>
</div>
