$(document).ready(function(){
$( '#expandmenu > li > ul' )
	.hide()
	.click(function( e ){
		e.stopPropagation();
	});
  $('#expandmenu > li').toggle(function(){
	  $(this)
      .removeClass('waiting')
      .css('background-position', 'right -27px')
      .find('ul').slideDown();
  }, function(){
  	$( this )
      .removeClass('waiting')
      .css('background-position', 'right top')
      .find('ul').slideUp();
  });
  
  $('#expandmenu > li').hover(function() {
    $(this).addClass('waiting');
    setTimeout(function() {
      $('#expandmenu .waiting')
        .click()
        .removeClass('waiting');
    }, 300);
  }, function() {
    $('#expandmenu .waiting').removeClass('waiting');
  });
});
