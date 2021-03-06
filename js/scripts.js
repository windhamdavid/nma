'use strict';

(function ($) {

	$(document).ready(function () {

		var $header = $('.header'),
			$search = $('.fa-search', $header);




		// 3. Menu Mobile
		var $btnMenu = $('.menu-mobile'),
			$hideMenu = $('.hide-menu');

		$btnMenu.on('click', function () {
			$header.toggleClass('active');

			if ($header.hasClass('active')) {
				$hideMenu.addClass('active');
			}
			else {
				$hideMenu.removeClass('active');
			}
		});
		$hideMenu.on('click', function () {
			$header.removeClass('active');
			$hideMenu.removeClass('active');
		});

		$('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
			var ww = $(window).width();

			if (ww <=991) {
				var $parent = $(e.target).closest('.menu-item-has-children');
				e.preventDefault();
				$('>.sub-menu', $parent).slideToggle(400);
			}
		});


		// 5. Preload

		var $preload = $('#preload');

		if ($preload.length) {
			$(window).on('load', function () {
				$preload.fadeOut(400);
			});
		}
	});

})(jQuery);