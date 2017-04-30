<footer class="main-footer">
			<!-- Footer widgets -->
			<div class="big-footer box darken-less">
				<div class="container">
					<div class="footer-sidebar row">
				<?php if(!is_active_sidebar('sidebar-2')): ?>
						<div class="col-md-4 col-sm-6 widget">
							<figure>
								<?php $footer_logo = _go('footer_logo'); echo !empty($footer_logo) ? sprintf('<img src="%s" alt="%s">', $footer_logo, '') : ''; ?>
							</figure>
							<br>
							
							<?php echo do_shortcode( _go('footer_info') ); ?>
						</div>
						
						<div class="col-md-4 col-sm-6 widget post-widget">
							<?php
								$title = _go('social_title');

								echo sprintf('<h4>%s</h4>', !(empty($title)) ? $title : __('Follow', 'hotelia'));
							?>
							<?php social_networks(); ?>
							<div class="subscribe-wrapper">
								<form action="#" class="subscribe-form row" data-tt-subscription>
									<div class="col-md-12">
										<?php
											$title_subscribe = _go('subscribe_title');
											$text_subscribe = _go('subscribe_text');

											echo !empty($title_subscribe) ? sprintf('<h4>%s</h4>', $title_subscribe) : '';
											echo !empty($text_subscribe) ? sprintf('<p>%s</p>', $text_subscribe) : '';
										?>
									</div>
									<p class="col-md-12">
										<input type="text" name="subscribe" data-tt-subscription-required data-tt-subscription-type="email">
									</p>
									<p class="col-md-12">
										<button type="submit" class="button-md green hover-dark-green full-size"><?php _e('Submit', 'hotelia'); ?></button>
									</p>
								</form>
							</div>							
						</div>
						<div class="col-md-4 col-sm-12 widget">
							<?php 
								$flickr_title = _go('flickr_title');
								$flickr_user = _go('flickr_user');
								$flickr_items = _go('flickr_items');
								$pattern = '<ul class="flickr-widget clean-list row" data-userid="%s" data-items="%s">';
								echo !empty($flickr_title) ? sprintf('<h4>%s</h4>', $flickr_title) : '';
								echo !empty($flickr_user) && !empty($flickr_items) ? sprintf($pattern, $flickr_user, $flickr_items) : '';
								echo !empty($flickr_user) && !empty($flickr_items) ? "</ul>" : '';
							?>

							<div class="usefull-links">
								<?php 
									$menu = hotelia_theme_menu('footer', '');
									$menu = str_replace('class="menu', 'class="col-md-4 col-sm-4 menu', $menu);

									if(!empty($menu)) {
										echo sprintf('<h4>%s</h4>', __('Usefull link', 'hotelia'));
									}
									echo $menu;
								?>
							</div>
						</div>
					<?php else: dynamic_sidebar('sidebar-2'); endif;?>
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- /.big-footer -->
			<!-- Copyright section -->
			<div class="small-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="copyright center-me uppercase font-small">
		                        <?php if(_go('copyright_message')): 
		                            _eo('copyright_message');
		                        else:?>
		                            <?php esc_attr_e('Copyright ','hotelia'); echo date('Y').' '; esc_attr_e('Designed by ','hotelia');?><a href="<?php echo esc_url('https://www.teslathemes.com/'); ?>" target="_blank"><?php esc_attr_e('TeslaThemes','hotelia'); ?></a>, <?php esc_attr_e('Supported by ', 'hotelia');?><a href="<?php echo esc_url('https://wpmatic.io/'); ?>" target="_blank"><?php esc_attr_e('WPmatic','hotelia');?></a>
		                        <?php endif;?>
							</p>
						</div>
					</div> <!-- /.row -->
				</div>			
			</div><!-- /.small-footer -->			
		</footer><!-- /.main-footer -->
	</div><!-- /.boxed-view -->
	
	<?php wp_footer(); ?>
</body>
</html>