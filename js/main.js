$(function() {
	var menu = $('.hamburger-menu');
	var state = false;

	$('.hamburger').on('click', function(e) {
		e.preventDefault();
		if (state) {
			menu.removeClass("active");
			state = false;
		} else {
			menu.addClass("active");
			state = true;
		}
	})

	$(window).resize(function() {
		var width = $(window).width();
		if (width > 768 && menu.hasClass("active")) {
			menu.removeClass("active");
			state = false;
		}
	})


}())




