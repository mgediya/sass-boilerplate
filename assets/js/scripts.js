var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function () {
	//do jQuery stuff when DOM is ready

	/* Responsive Jquery Navigation */
	$('.hamburger').click(function (event) {
		$('.mbnav').toggleClass('is-open');
	});

	$('.mbnav .mbnav__backdrop').click(function () {
		$('.mbnav').removeClass('is-open');
	});

	var clickable = $('.mbnav__state').attr('data-clickable');
	$('.mbnav li:has(ul)').addClass('has-sub');
	$('.mbnav .has-sub>a').after('<em class="mbnav__caret">');
	if (clickable == 'true') {
		$('.mbnav .has-sub>.mbnav__caret').addClass('trigger-caret');
	} else {
		$('.mbnav .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
	}

	/* menu open and close on single click */
	$('.mbnav .has-sub>.trigger-caret').click(function () {
		var element = $(this).parent('li');
		if (element.hasClass('is-open')) {
			element.removeClass('is-open');
			element.find('li').removeClass('is-open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('is-open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('is-open');
			element.siblings('li').find('li').removeClass('is-open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});
});

/* Script on load
------------------------------------------------------------------------------*/
$(window).on('load', function () {
	// page is fully loaded, including all frames, objects and images

});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).on('scroll', function () {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).on('resize', function () {

});

/* Script all functions
------------------------------------------------------------------------------*/