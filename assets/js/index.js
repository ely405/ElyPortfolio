window.onload = function (e) {
	$('#page-loader').fadeOut();
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

const detectIfIsMobile = () => {
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		$('.parallax').parallax();
	}
}

$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: '60%',
		closeOnClick: true
	});
	showAndHideSocialNetworks();
	detectIfIsMobile();
});