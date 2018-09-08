// CLOCK ZOOM
function clockZoom() {
  $('.computer .world-clock .timezones clock .numeric-indicators')
    .on('mouseover', function() {
    $(this).parents('clock').addClass('zoomed');
  })

    .on('mouseleave', function() {
    $(this).parents('clock').removeClass('zoomed');
  })
}

  


// WINDOW ON LOAD
window.onload = function() {
  specifications();
  clockZoom();
}
