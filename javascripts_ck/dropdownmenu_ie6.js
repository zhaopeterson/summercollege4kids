$(document).ready(function(){
  $('#topmenu li ul').css({
    display:"none",
    left: "auto"
  });
  $('#topmenu li').hoverIntent(function() {
    $(this)
      .find('ul')
      .stop(true, true)
	  .addClass('menu_program')
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});
