const showAndHideSocialNetworks = () => {
    $('#socialNetworksFixed').hide();
    
    $(window).scroll(() => {
        var windowHeight = $(window).scrollTop();
        var contactSection = $("#contact-section").offset();
        contactSection = contactSection.top;

        if(windowHeight >= contactSection){
            $('#socialNetworksFixed').fadeOut(500);
        }else{
            $('#socialNetworksFixed').fadeIn(500);
        }
    });
}





$(document).ready(function(){
    //menu
    $(".button-collapse").sideNav({
        menuWidth: '30%',
    closeOnClick: true
});
$('.parallax').parallax();
//   $('.collapsible').collapsible();

showAndHideSocialNetworks();
});
