$(document).ready(function(){
  $('#topmenu li ul').css({
    display: "none",
    left: "auto"
  });
  $('#topmenu li').hoverIntent(function() {
    $(this)
      .find('ul')
      .stop(true, true)
	  .css('zIndex',20)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});
