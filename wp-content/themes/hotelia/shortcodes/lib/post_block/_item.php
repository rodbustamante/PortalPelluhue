<?php
$block = $block_data[0];
$settings = $block_data[1];
$link_setting = empty($settings[0]) ? '' : $settings[0];
?>

<?php if($post->post_type !== 'guestbook'): ?>
<?php if($block === 'title'): ?>
<h3 class="post-title">
    <?php echo empty($link_setting) || $link_setting!='no_link' ? $this->getLinked($post, $post->title, $link_setting, 'link_title') : $post->title ?>
</h3>
<?php elseif($block === 'image' && !empty($post->thumbnail)): ?>
<div class="post-thumb">
    <?php echo empty($link_setting) || $link_setting!='no_link' ? $this->getLinked($post, $post->thumbnail, $link_setting, 'link_image') : $post->thumbnail ?>
</div>
<?php elseif($block === 'text'): ?>
<div class="entry-content">
    <?php echo empty($link_setting) || $link_setting==='text' ?  $post->content : $post->excerpt; ?>
</div>
<?php elseif($block === 'link'): ?>
<a href="<?php echo $post->link ?>" class="vc_read_more"
   title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', "js_composer" ), $post->title_attribute ) ); ?>"<?php echo $this->link_target ?>><?php _e( 'Read more...', "js_composer" ) ?></a>
<?php endif; ?>

<?php else: ?>
	<?php if($block === 'title'): ?>
		<div class="col-md-7">
		<h3><?php echo $post->title; ?> <span class="to-right font-100 font-05x text-green"><?php echo get_the_time('m.d.Y', $post->id); ?></span></h3>
		<p class="no-margin">
			<?php echo $post->content; ?>
		</p>
	</div>
	<?php elseif($block === 'image'): ?>
		<div class="col-md-3 col-md-offset-1">
		<div class="text-center font-5x">
			<?php echo rank(my_meta($post->id, 'rank_guest')); ?>
		</div>
	</div>
	<?php endif; ?>
<?php endif; ?>

