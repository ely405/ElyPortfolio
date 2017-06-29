

$(document).ready(function(){
  //menu
  $(".button-collapse").sideNav();
  $('#log-in').click(()=>{
    $('#log-in-container').toggle('waves-block');
  });
  //carousel-slider
  $('.carousel').carousel();
});
