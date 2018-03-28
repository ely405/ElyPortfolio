window.onload = function (e) {
	$('#page-loader').fadeOut(1000);
	$('#page-loader').css('background', 'black');
}


const showAndHideSocialNetworks = () => {
	$('#socialNetworksFixed').hide();

	$(window).scroll(() => {
		var windowHeight = $(window).scrollTop();
		var contactSection = $("#contact-section").offset();
		contactSection = contactSection.top;

		if (windowHeight >= contactSection) {
			$('#socialNetworksFixed').fadeOut(500);
		} else {
			$('#socialNetworksFixed').fadeIn(500);
		}
	});
}

$(document).ready(function () {
	new Typed('#preloader-text', {
		strings: ['Soy coder', 'Soy <strong>mujer</strong>'],
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		smartBackspace: true,
		loopCount: 3,
		showCursor: false
	});
	//menu
	$(".button-collapse").sideNav({
		menuWidth: 200,
		closeOnClick: true
	});
	$('.parallax').parallax();

	showAndHideSocialNetworks();
});