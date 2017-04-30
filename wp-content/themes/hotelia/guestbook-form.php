<p class="col-md-12">
	<input type="text" name="guest_name" class="room-select" placeholder="<?php _e('Name', 'hotelia'); ?>">
</p>
<p class="col-md-7">
	<input type="text" name="guest_email" class="room-select" placeholder="<?php _e('Email', 'hotelia'); ?>">
</p>
<div class="col-md-5">
	<input type="text" name="guest_rank" readonly="" class="room-select icon-font text-orange" placeholder="<?php _e('Give your love', 'hotelia'); ?>" value="   ">
	<ul class="clean-list font-small">
		<li><i class="icon-font">    </i></li>
		<li><i class="icon-font">   </i></li>
		<li><i class="icon-font">  </i></li>
		<li><i class="icon-font"> </i></li>
		<li><i class="icon-font"></i></li>
	</ul>
	<br>
	<br>
</div>
<p class="col-md-12">
	<textarea name="guest_message" id="" cols="20" rows="5" placeholder="<?php _e('Message', 'hotelia'); ?>"></textarea>
</p>
<div class="col-md-12 text-right">
	<button type="submit" class="button-md green hover-dark-green soft-corners full-size result-message"><?php _e('Submit', 'hotelia'); ?></button>
	<?php echo wp_nonce_field( 'new-post' ); ?>
</div>
