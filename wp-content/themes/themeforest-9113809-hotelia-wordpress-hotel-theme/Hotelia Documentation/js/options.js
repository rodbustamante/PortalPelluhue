jQuery(document).ready(function(){
	var $ = jQuery;
    var $window = $(window);
    var $body = $(document.body);

	$('.section-demo img').not('.custom')
		.wrap('<span style="display:inline-block"></span>')
		.css('display', 'block')
		.parent()
		.zoom({
			on: 'click'
		})
	.parent('p').css({
		'padding': '3px',
		'background': 'white',
		'border': '1px solid #e1e1e1',
		'cursor': 'crosshair'
	});

	// ScrollSpy
    $body.scrollspy({
        target: '.sidebar-demo',
        offset: 100
    });
    $window.on('load', function() {
        setTimeout(function () {
            $body.scrollspy('refresh');
        }, 1000);
    });
});