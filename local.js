// WINDOW ON LOAD
window.onload = function() {
  monotoneBreather('.loader', 2000);
  removeLoader('.loader', 'no-opacity', 9000, 9400);
  setTimeout(function() {
    indicatorsContainer();
  }, 8400);
  computerImageZoom('.computer .world-clock .timezones clock .border');
}
