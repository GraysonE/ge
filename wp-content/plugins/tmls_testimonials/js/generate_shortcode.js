(function($){
$(window).load(function(){
	
	// inputs
	
	tmls_category = $('#tmls_category');
	tmls_layout = $('#tmls_layout');
	tmls_style = $('#tmls_style');
	tmls_image_size = $('#tmls_image_size');
	tmls_image_radius = $('#tmls_image_radius');
	tmls_font_style = $('#tmls_font_style');
	tmls_text_font_family = $('#tmls_text_font_family');
	tmls_text_font_color = $('#tmls_text_font_color');
	tmls_text_font_size = $('#tmls_text_font_size');
	tmls_name_font_family = $('#tmls_name_font_family');
	tmls_name_font_color = $('#tmls_name_font_color');
	tmls_neme_font_size = $('#tmls_neme_font_size');
	tmls_neme_font_weight = $('#tmls_neme_font_weight');
	tmls_position_font_family = $('#tmls_position_font_family');
	tmls_position_font_color = $('#tmls_position_font_color');
	tmls_position_font_size = $('#tmls_position_font_size');
	tmls_orderByList = $('#tmls_orderByList');
	tmls_orderList = $('#tmls_orderList');
	tmls_numberInput = $('#tmls_numberInput');
	tmls_auto_play = $('#tmls_auto_play');
	tmls_transitionEffect = $('#tmls_transitionEffect');
	tmls_pause_on_hover = $('#tmls_pause_on_hover');
	tmls_next_prev_visibility = $('#tmls_next_prev_visibility');
	tmls_next_prev_radius = $('#tmls_next_prev_radius');
	tmls_next_prev_position = $('#tmls_next_prev_position');
	tmls_next_prev_bgcolor = $('#tmls_next_prev_bgcolor');
	tmls_next_prev_arrowscolor = $('#tmls_next_prev_arrowscolor');
	tmls_scroll_duration = $('#tmls_scroll_duration');
	tmls_pause_duration = $('#tmls_pause_duration');
	tmls_border_style = $('#tmls_border_style');
	tmls_border_color = $('#tmls_border_color');
	tmls_columns_number = $('#tmls_columns_number');
	tmls_ratingStars = $('#tmls_ratingStars');
	tmls_ratingStarsSize = $('#tmls_ratingStarsSize');
	tmls_ratingStarscolor = $('#tmls_ratingStarscolor');
	tmls_grayscale = $('#tmls_grayscale');
	tmls_slider2_unselectedOverlayBgColor = $('#tmls_slider2_unselectedOverlayBgColor');
	
	
	tmls_controls = $('input,select');
	tmls_buttons = $('.button-primary');
	
	// containers
	
	tmls_div_shortcode = $('#tmls_div_shortcode');
	
	tmls_gene_short_preview = $('#tmls_gene_short_preview');
	
	// options rows
	slider_options = $('.slider_options');
	slider2_options = $('.slider2_options');
	border_options = $('.border_options');
	grid_options = $('.grid_options');
	list_options = $('.list_options');
	image_options = $('.image_options');
	font_options = $('.font_options');
	border_color = $('.border_color');
	rating_options = $('.rating_options');

	slider2_options.slideUp('slow');
	border_options.slideUp('slow');
	grid_options.slideUp('slow');
	list_options.slideUp('slow');
	slider_options.slideDown('slow');
	
	generate_shortcode();
	
	
	tmls_controls.change(function(){
		generate_shortcode();
	});
	
	tmls_buttons.click(function(){
		generate_shortcode();
	});
	
	
	// Layout
	tmls_layout.change(function(){
		
		if( tmls_layout.val() == 'tmls_slider' ) {
			slider2_options.slideUp('slow');
			border_options.slideUp('slow');
			grid_options.slideUp('slow');
			list_options.slideUp('slow');
			slider_options.slideDown('slow');
		}
		else if( tmls_layout.val() == 'tmls_slider2' ) {
			slider_options.slideUp('slow');
			border_options.slideUp('slow');
			grid_options.slideUp('slow');
			list_options.slideUp('slow');
			slider2_options.slideDown('slow');
		}
		else if( tmls_layout.val() == 'tmls_grid' ) {
			slider_options.slideUp('slow');
			slider2_options.slideUp('slow');
			border_options.slideDown('slow');
			list_options.slideUp('slow');
			grid_options.slideDown('slow');
			
			if( tmls_border_style.val() == 'no_border' ) {
				border_color.slideUp('slow');
			}
			else {
				border_color.slideDown('slow');
			}
		}
		else if( tmls_layout.val() == 'tmls_list' ) {
			slider_options.slideUp('slow');
			slider2_options.slideUp('slow');
			border_options.slideDown('slow');
			grid_options.slideUp('slow');
			list_options.slideDown('slow');
			
			if( tmls_border_style.val() == 'no_border' ) {
				border_color.slideUp('slow');
			}
			else {
				border_color.slideDown('slow');
			}
		}
		
	});
	
	// Image Size
	tmls_image_size.change(function(){
	
		if( tmls_image_size.val() == 'no_image' ) {
			image_options.slideUp('slow');
		}
		else {
			image_options.slideDown('slow');
		}
		
	});
	
	// Font Style
	tmls_font_style.change(function(){
	
		if( tmls_font_style.val() == 'default' ) {
			font_options.slideUp('slow');
		}
		else {
			font_options.slideDown('slow');
		}
		
	});
	
	// Border Style
	tmls_border_style.change(function(){
	
		if( tmls_border_style.val() == 'no_border' ) {
			border_color.slideUp('slow');
		}
		else {
			border_color.slideDown('slow');
		}
		
	});
	
	
	// Rating
	tmls_ratingStars.change(function(){
	
		if( tmls_ratingStars.val() == 'disabled' ) {
			rating_options.slideUp('slow');
		}
		else {
			rating_options.slideDown('slow');
		}
		
	});
	
	

});

function generate_shortcode() {
	
	var postarray = {};
	var shortcode='[tmls ';
	
	postarray['category'] = tmls_category.val();
	shortcode+='category="'+tmls_category.val()+'" ';
	
	postarray['layout'] = tmls_layout.val();
	shortcode+='layout="'+tmls_layout.val()+'" ';
	
	postarray['style'] = tmls_style.val();
	shortcode+='style="'+tmls_style.val()+'" ';
	
	postarray['image_size'] = tmls_image_size.val();
	shortcode+='image_size="'+tmls_image_size.val()+'" ';
	
	if( tmls_image_size.val()!='no_image' ) {
		postarray['image_radius'] = tmls_image_radius.val();
		shortcode+='image_radius="'+tmls_image_radius.val()+'" ';
	}
	
	if( tmls_font_style.val()!='default' ) {
		postarray['text_font_family'] = tmls_text_font_family.val();
		shortcode+='text_font_family="'+tmls_text_font_family.val()+'" ';
		
		postarray['text_font_color'] = tmls_text_font_color.val();
		shortcode+='text_font_color="'+tmls_text_font_color.val()+'" ';
		
		postarray['text_font_size'] = tmls_text_font_size.val();
		shortcode+='text_font_size="'+tmls_text_font_size.val()+'" ';
		
		postarray['name_font_family'] = tmls_name_font_family.val();
		shortcode+='name_font_family="'+tmls_name_font_family.val()+'" ';
		
		postarray['name_font_color'] = tmls_name_font_color.val();
		shortcode+='name_font_color="'+tmls_name_font_color.val()+'" ';
		
		postarray['neme_font_size'] = tmls_neme_font_size.val();
		shortcode+='neme_font_size="'+tmls_neme_font_size.val()+'" ';
		
		postarray['neme_font_weight'] = tmls_neme_font_weight.val();
		shortcode+='neme_font_weight="'+tmls_neme_font_weight.val()+'" ';
		
		postarray['position_font_family'] = tmls_position_font_family.val();
		shortcode+='position_font_family="'+tmls_position_font_family.val()+'" ';
		
		postarray['position_font_color'] = tmls_position_font_color.val();
		shortcode+='position_font_color="'+tmls_position_font_color.val()+'" ';
		
		postarray['position_font_size'] = tmls_position_font_size.val();
		shortcode+='position_font_size="'+tmls_position_font_size.val()+'" ';
	}
	
	postarray['order_by'] = tmls_orderByList.val();
	shortcode+='order_by="'+tmls_orderByList.val()+'" ';
	
	postarray['order'] = tmls_orderList.val();
	shortcode+='order="'+tmls_orderList.val()+'" ';
	
	if( tmls_numberInput.val()!='' ) {
		postarray['number'] = tmls_numberInput.val();
		shortcode+='number="'+tmls_numberInput.val()+'" ';
	}
	
	if( tmls_layout.val()=='tmls_slider' ) {
		postarray['auto_play'] = tmls_auto_play.val();
		shortcode+='auto_play="'+tmls_auto_play.val()+'" ';
		
		postarray['transitioneffect'] = tmls_transitionEffect.val();
		shortcode+='transitioneffect="'+tmls_transitionEffect.val()+'" ';
		
		postarray['pause_on_hover'] = tmls_pause_on_hover.val();
		shortcode+='pause_on_hover="'+tmls_pause_on_hover.val()+'" ';
		
		postarray['next_prev_visibility'] = tmls_next_prev_visibility.val();
		shortcode+='next_prev_visibility="'+tmls_next_prev_visibility.val()+'" ';
		
		postarray['next_prev_radius'] = tmls_next_prev_radius.val();
		shortcode+='next_prev_radius="'+tmls_next_prev_radius.val()+'" ';
		
		postarray['next_prev_position'] = tmls_next_prev_position.val();
		shortcode+='next_prev_position="'+tmls_next_prev_position.val()+'" ';
		
		postarray['next_prev_bgcolor'] = tmls_next_prev_bgcolor.val();
		shortcode+='next_prev_bgcolor="'+tmls_next_prev_bgcolor.val()+'" ';
		
		postarray['next_prev_arrowscolor'] = tmls_next_prev_arrowscolor.val();
		shortcode+='next_prev_arrowscolor="'+tmls_next_prev_arrowscolor.val()+'" ';
		
		postarray['scroll_duration'] = tmls_scroll_duration.val();
		shortcode+='scroll_duration="'+tmls_scroll_duration.val()+'" ';
		
		postarray['pause_duration'] = tmls_pause_duration.val();
		shortcode+='pause_duration="'+tmls_pause_duration.val()+'" ';
	}
	
	if( tmls_layout.val()!='tmls_slider' ) {
		postarray['border_style'] = tmls_border_style.val();
		shortcode+='border_style="'+tmls_border_style.val()+'" ';
		
		postarray['border_color'] = tmls_border_color.val();
		shortcode+='border_color="'+tmls_border_color.val()+'" ';
	}
	
	if( tmls_layout.val()=='tmls_slider2' ) {
		
		postarray['auto_play'] = tmls_auto_play.val();
		shortcode+='auto_play="'+tmls_auto_play.val()+'" ';
		
		postarray['transitioneffect'] = tmls_transitionEffect.val();
		shortcode+='transitioneffect="'+tmls_transitionEffect.val()+'" ';
		
		postarray['pause_on_hover'] = tmls_pause_on_hover.val();
		shortcode+='pause_on_hover="'+tmls_pause_on_hover.val()+'" ';
		
		postarray['scroll_duration'] = tmls_scroll_duration.val();
		shortcode+='scroll_duration="'+tmls_scroll_duration.val()+'" ';
		
		postarray['pause_duration'] = tmls_pause_duration.val();
		shortcode+='pause_duration="'+tmls_pause_duration.val()+'" ';
		
		postarray['slider2_unselectedoverlaybgcolor'] = tmls_slider2_unselectedOverlayBgColor.val();
		shortcode+='slider2_unselectedoverlaybgcolor="'+tmls_slider2_unselectedOverlayBgColor.val()+'" ';
	}
	
	if( tmls_layout.val()=='tmls_grid' ) {
		postarray['columns_number'] = tmls_columns_number.val();
		shortcode+='columns_number="'+tmls_columns_number.val()+'" ';
	}
	
	postarray['ratingstars'] = tmls_ratingStars.val();
	shortcode+='ratingstars="'+tmls_ratingStars.val()+'" ';
		
	if( tmls_ratingStars.val()=='enabled' ) {
	
		postarray['ratingstarssize'] = tmls_ratingStarsSize.val();
		shortcode+='ratingstarssize="'+tmls_ratingStarsSize.val()+'" ';
		
		postarray['ratingstarscolor'] = tmls_ratingStarscolor.val();
		shortcode+='ratingstarscolor="'+tmls_ratingStarscolor.val()+'" ';
	
	}
	
	if( tmls_grayscale.val()=='enabled' ) {
		postarray['grayscale'] = tmls_grayscale.val();
		shortcode+='grayscale="'+tmls_grayscale.val()+'" ';
	}
	
	shortcode+=']';
	
	tmls_div_shortcode.html(shortcode);
	
	tmls_gene_short_preview.html('<p>Loading ...</p>');
	
	tmls_gene_short_preview.load('../wp-content/plugins/tmls_testimonials/inc/generate_shortcode/do_shortcode.php', postarray , function(){
		
		$.getScript('../wp-content/plugins/tmls_testimonials/js/testimonials.js');
		
		if( typeof jQuery.wp === 'object' && typeof jQuery.wp.wpColorPicker === 'function' ){

			jQuery( '#tmls_text_font_color' ).wpColorPicker();
			jQuery( '#tmls_name_font_color' ).wpColorPicker();
			jQuery( '#tmls_position_font_color' ).wpColorPicker();
			jQuery( '#tmls_border_color' ).wpColorPicker();
			jQuery( '#tmls_ratingStarscolor' ).wpColorPicker();
			jQuery( '#tmls_next_prev_bgcolor' ).wpColorPicker();
			jQuery( '#tmls_slider2_unselectedOverlayBgColor' ).wpColorPicker();

		}
		else {
			//We use farbtastic if the WordPress color picker widget doesn't exist
			jQuery('#tmls_text_font_colorpicker').farbtastic('#tmls_text_font_color');
			jQuery('#tmls_name_font_colorpicker').farbtastic('#tmls_name_font_color');
			jQuery('#tmls_position_font_colorpicker').farbtastic('#tmls_position_font_color');
			jQuery('#tmls_border_colorpicker').farbtastic('#tmls_border_color');
			jQuery('#tmls_ratingStars_colorpicker').farbtastic('#tmls_ratingStarscolor');
			jQuery('#tmls_next_prev_bgcolor_colorpicker').farbtastic('#tmls_next_prev_bgcolor');
			jQuery('#tmls_slider2_unselectedOverlayBgColor_colorpicker').farbtastic('#tmls_slider2_unselectedOverlayBgColor');
			
			tmls_farbtastic_inputs = $('#tmls_text_font_color,#tmls_name_font_color,#tmls_position_font_color,#tmls_border_color,#tmls_ratingStarscolor,#tmls_next_prev_bgcolor,#tmls_slider2_unselectedOverlayBgColor');
			
			tmls_farbtastic_inputs.focus(function(){
				$(this).parent().children('.tmls_farbtastic').slideDown();
			});
			
			tmls_farbtastic_inputs.focusout(function(){
				$(this).parent().children('.tmls_farbtastic').slideUp();
			});
		}		
				
	
	});
	
	
}


})(jQuery);