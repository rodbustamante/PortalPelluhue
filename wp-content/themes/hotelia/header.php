<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	
	<title> <?php wp_title( '|', true, 'right' ); ?><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Responsive helper -->

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php hotelia_favicon_generate(); ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div id="home" <?php layout_style(); ?>>
		<header class="main-header clearfix">
			<!-- Header Shorcode Area -->
			<div class="header-bar">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-8">
							<ul class="inline-list uppercase font-small header-meta">
								<?php if(_go('header_address')) : ?>
									<li><i class="icon-312 font-13x"></i> <?php _eo('header_address') ?></li>
								<?php endif; ?>
								<?php if(_go('header_email')) : ?>
									<li><i class="icon-402 font-13x"></i> <?php _eo('header_email') ?></li>
								<?php endif; ?>
							</ul>
						</div>

						<div class="col-md-6 col-sm-4">
							<?php
								if(tesla_has_woocommerce()) {
									$menu =  hotelia_theme_menu('top', 'to-right account-menu inline-list');
									if(!empty($menu)) {
										$menu = substr($menu, 0, -5);
										$menu .= generate_menu_cart();
										echo $menu;										
									}
								}

							?>
						</div>
					</div>
				</div>
			</div><!-- /.header-bar -->

			<?php $hide_room_search = _go('no_search_room'); ?>

			<div class="nav-bar sticky-bar white"> <!-- .mega-menu helper class used as switcher -->
				<div class="container">
					<?php navigation_settings(); ?>
					<?php //if(empty($hide_room_search)): ?>
						<!-- <a href="#" class="room-search-switcher green"><i class="icon-3"></i></a> -->
					<?php //endif; ?>
				</div><!-- /.container -->
			</div><!-- /.nav-bar -->
		</header> <!-- /.main-nav -->
		
		<!-- <?php if(empty($hide_room_search)): ?>
		<div class="header-find-room">
			<div class="booking-form grey">
				<div class="container">
					<?php get_template_part('room-searchform') ?>
				</div>
			</div>
		</div>
		<?php endif; ?> -->

		<!-- main content -->