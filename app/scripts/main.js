$(function() {
	console.log('DOM ready . . .');

	var $menuButton = $('#mobile-menu-toggle'),
		$mobileNavModal = $('.mobile-navigation-modal'),
		$mobileOverlay = $('.mobile-menu-overlay');

	$menuButton.click(function(e) {
		e.preventDefault();
		console.log('Menu button clicked');
		$mobileNavModal.toggleClass('mobile-navigation-modal-active');
		$mobileOverlay.toggleClass('mobile-menu-overlay-active');
	});
	$mobileOverlay.click(function() {
		console.log('Closed with overlay');
		$mobileNavModal.toggleClass('mobile-navigation-modal-active');
		$mobileOverlay.toggleClass('mobile-menu-overlay-active');
	});
});
