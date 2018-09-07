// GLOBAL VARIABLES
var mac_os = $('.mac-os'),
    application = $('.application'), 
    world_clock = $('.application.world-clock'), 
    world_clock_title = "World Clock",
    top_bar = $('.application > .header .top-bar'),
    title_scroll = $('.application > .header .title-scroll'),
    parent_container = $('.application .parent-container');

 


// DEVICE SPECIFICATIONS
function userDeviceSpecifications() {
  if (computer) {
    function draggableApp() {
      $('.application').draggable({
        handle: '.header',
        cursor: 'move', 
        drag: function(event, ui) {
          backgroundImageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
        }
      });
    } 
    draggableApp(); 

    if (firefox) {
      $('.menu-bar, .desktop').remove();
    }
  }
  
  checkDeviceLength();
  
  if (device_width_longer) {
    manuallyCenter('.desktop', '.application');
    $('.application > .blur').removeClass('contain').addClass('cover');
  }
  
  if (device_height_longer) {
    $('.application > .blur').removeClass('cover').addClass('contain');
  }
}




// FIRST IMPRESSION 
function firstImpressionContainer() { 
  if (firstImpression()) {
    console.log("New User");
    $('.loader').addClass('new-user');
    $('.loader .gta .skip-loader').remove();
  }
}

 


// USER ACTIVE STATUS
function userActiveStatus() {    
  $(window).focus(); 
  
  $(window).on('blur', function() {
    if (mobile) {
      // alert("The webpage was paused because you were offline.");
    }
  });
}

  


// WINDOW ON LOAD
window.onload = function() {
  specifications();
  firstImpressionContainer();
  userActiveStatus();
  callRemainderFunctions();
}

 


// CALL REMAINDER FUNCTIONS
function callRemainderFunctions() {
  userDeviceSpecifications();
  clock();
}
