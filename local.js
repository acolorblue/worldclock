// REMOVE LOADER
function loaderRandomColor() {
  setTimeout(function() {
    indicatorsContainer();
  }, 2000);
  
  setTimeout(function() {
    $('.loader').addClass('hide');
  }, 3000);
  
  setTimeout(function() {
    $('.loader').remove();
    window.clearInterval(random_color_generator_interval);
  }, 3400);
}




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
  randomColorGeneratorContainer();
  loaderRandomColor();
  clockZoom();
}
