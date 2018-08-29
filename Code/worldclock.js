  // WORLD CLOCK
  var timezone_adjustments_interval = setInterval(timezoneAdjustments, 1000);
function timezoneAdjustments() {
  var date = new Date(),
      timezone_offset,
      this_clock,
      hour,
      hour_hand,
      minute,
      minute_hand,
      second,
      second_hand;

  // TIMEZONE OFFSET   
  $('clock').each(function() {
    this_clock = $(this);
    hour = date.getUTCHours() + parseInt($(this).attr('timezone-offset'));
            
    function timezoneOverflow() {
      if (hour == -1) {
        hour = 23;
      }

      if (hour == -2) {
        hour = 22;
      }

      if (hour == -3) {
        hour = 21;
      }

      if (hour == -4) {
        hour = 20;
      }

      if (hour == -5) {
        hour = 19;
      }

      if (hour == -6) {
        hour = 18;
      }



      if (hour == 25) {
        hour = 1;
      }

      if (hour == 26) {
        hour = 2;
      }

      if (hour == 27) {
        hour = 3;
      }

      if (hour == 28) {
        hour = 4;
      }

      if (hour == 29) {
        hour = 5;
      }

      if (hour == 30) {
        hour = 6;
      }
    }
    timezoneOverflow();

            
    function twelveHour() {
      if (hour >= 12) {
        hour -= 12;
      }

      if (hour == 0) {
        hour = 12;
      }
    }
    twelveHour();     

            
    function hourHighlight() {
      if (hour == 1) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .one').addClass('highlight');
      }
      
      if (hour == 2) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .two').addClass('highlight');
      }
      
      if (hour == 3) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .three').addClass('highlight');
      }
      
      if (hour == 4) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .four').addClass('highlight');
      }
      
      if (hour == 5) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .five').addClass('highlight');
      }
      
      if (hour == 6) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .six').addClass('highlight');
      }
      
      if (hour == 7) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .seven').addClass('highlight');
      }
      
      if (hour == 8) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .eight').addClass('highlight');
      }
      
      if (hour == 9) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .nine').addClass('highlight');
      }
      
      if (hour == 10) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .ten').addClass('highlight');
      }
      
      if (hour == 11) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .eleven').addClass('highlight');
      }
      
      if (hour == 12) {
        this_clock.find('.numeric-indicators div').removeClass('highlight');
        this_clock.find('.numeric-indicators .twelve').addClass('highlight');
      }
    }
    hourHighlight();
    
    hour_hand = $(this).find('.hour');
    hour = hour % 12 / 12 * 360 + (date.getMinutes() * 6 / 12);
    hour_hand.css('transform', 'rotate(' + hour + 'deg)');
      
            
            
    function minuteHighlight() {
//       if (minute == 0) {
//         this_clock.find('.numeric-indicators div').removeClass('highlight');
//         this_clock.find('.numeric-indicators .one').addClass('highlight');
//       }
    }
    minuteHighlight();
    
    minute_hand = $(this).find('.minute');
    minute = date.getMinutes() * 6;
    minute_hand.css('transform', 'rotate(' + minute + 'deg)');
    
    second = date.getSeconds() * 6;
    second_hand = $(this).find('.second');
    second_hand.css('transform', 'rotate(' + second + 'deg)');
  });
}
