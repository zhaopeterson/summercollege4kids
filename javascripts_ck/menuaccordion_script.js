$(document).ready(function(){
  $('#information_bar_classesmenu ul > li ul')
    .click(function(e){
      e.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
    
  $('#information_bar_classesmenu ul > li').click(function(){
    var selfClick = $(this).find('ul:first').is(':visible');
    if(!selfClick) {
      $(this)
        .parent()
        .find('> li ul:visible')
        .slideToggle();
    }
    
    $(this)
      .find('ul:first')
      .stop(true, true)
      .slideToggle();
  });
});
