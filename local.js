// CLOCK ZOOM
function clockZoom() {
  $('.computer .world-clock .timezones clock .numeric-indicators')
    .on('mouseover', function() {
    $(this).parents('clock').addClass('zoomed');
  })

    .on('mouseleave', function() {
    $(this).parents('clock').removeClass('zoomed');
  })
  
  
  // $('.world-clock .timezones clock').on('mousemove', function(e){
  //   $(this).children('.border').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
// })
}

  


// WINDOW ON LOAD
window.onload = function() {
  specifications();
  clockZoom();
}
