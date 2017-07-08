$(document).ready(function(){
  //menu
  $(".button-collapse").sideNav({
    menuWidth: 200,
    closeOnClick: true
  });
  $('#log-in').click(()=>{
    $('#log-in-container').toggle('waves-block');
  });
  $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 1000});
  $('.parallax').parallax();
  $('.modal').modal();
});
