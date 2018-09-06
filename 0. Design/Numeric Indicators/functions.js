function indicatorsContainer() {
                var indicators_interval = setInterval(indicators, 1000);
                function indicators() {
                  var date = new Date(),
                      timezone_offset,
                      this_clock,
                      hour,
                      hour_display,
                      hour_hand,
                      minute,
                      minute_display,
                      minute_hand,
                      second,
                      second_display,
                      second_hand;
   
                  $('.world-clock clock').each(function() {
                    this_clock = $(this);  
                    
                    function hours() {
                      hour = date.getUTCHours() + parseInt(this_clock.attr('timezone-offset'));
                      hour_display = this_clock.find('.numeric-indicators .hour');

                      function overflow() {
                        // NEGETAVE
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
                      overflow();

                      function nonMilitary() {
                        if (hour >= 12) {
                          hour -= 12;
                        }

                        if (hour == 0) {
                          hour = 12;
                        }
                      }
                      nonMilitary();     

                      function highlight() {
                        if (hour == 1) {
                          hour_display.attr('class', 'hour ab-mid one');
                        }

                        if (hour == 2) {
                          hour_display.attr('class', 'hour ab-mid two');
                        }

                        if (hour == 3) {
                          hour_display.attr('class', 'hour ab-mid three');
                        }

                        if (hour == 4) {
                          hour_display.attr('class', 'hour ab-mid four');
                        }

                        if (hour == 5) {
                          hour_display.attr('class', 'hour ab-mid five');
                        }

                        if (hour == 6) {
                          hour_display.attr('class', 'hour ab-mid six');
                        }

                        if (hour == 7) {
                          hour_display.attr('class', 'hour ab-mid seven');
                        }

                        if (hour == 8) {
                          hour_display.attr('class', 'hour ab-mid eight');
                        }

                        if (hour == 9) {
                          hour_display.attr('class', 'hour ab-mid nine');
                        }

                        if (hour == 10) {
                          hour_display.attr('class', 'hour ab-mid ten');
                        }

                        if (hour == 11) {
                          hour_display.attr('class', 'hour ab-mid eleven');
                        }

                        if (hour == 12) {
                          hour_display.attr('class', 'hour ab-mid twelve');
                        }
                      }
                      highlight();
                      
                      function analog() {
                        hour = hour % 12 / 12 * 360 + (date.getMinutes() * 6 / 12);
                        hour_hand = this_clock.find('.hour');
                        hour_hand.css('transform', 'rotate(' + hour + 'deg)');
                      }
                    }
                    hours();
                    
                    function minutes() {
                      minute = date.getMinutes();
                      minute_display = this_clock.find('.numeric-indicators .minute');
                      
                      function highlight() {
                        if (minute == 0) {
                          minute_display.attr('class', 'minute ab-mid zero');
                        }
                        
                        if (minute == 1) {
                          minute_display.attr('class', 'minute ab-mid one');
                        }
                        
                        if (minute == 2) {
                          minute_display.attr('class', 'minute ab-mid two');
                        }
                        
                        if (minute == 3) {
                          minute_display.attr('class', 'minute ab-mid three');
                        }
                        
                        if (minute == 4) {
                          minute_display.attr('class', 'minute ab-mid four');
                        }
                        
                        if (minute == 5) {
                          minute_display.attr('class', 'minute ab-mid five');
                        }
                        
                        if (minute == 6) {
                          minute_display.attr('class', 'minute ab-mid six');
                        }
                        
                        if (minute == 7) {
                          minute_display.attr('class', 'minute ab-mid seven');
                        }
                        
                        if (minute == 8) {
                          minute_display.attr('class', 'minute ab-mid eight');
                        }
                        
                        if (minute == 9) {
                          minute_display.attr('class', 'minute ab-mid nine');
                        }
                        
                        if (minute == 10) {
                          minute_display.attr('class', 'minute ab-mid ten');
                        }
                        
                        if (minute == 11) {
                          minute_display.attr('class', 'minute ab-mid eleven');
                        }
                        
                        if (minute == 12) {
                          minute_display.attr('class', 'minute ab-mid twelve');
                        }
                        
                        if (minute == 13) {
                          minute_display.attr('class', 'minute ab-mid thirteen');
                        }
                        
                        if (minute == 14) {
                          minute_display.attr('class', 'minute ab-mid fourteen');
                        }
                        
                        if (minute == 15) {
                          minute_display.attr('class', 'minute ab-mid fifteen');
                        }
                        
                        if (minute == 16) {
                          minute_display.attr('class', 'minute ab-mid sixteen');
                        }
                        
                        if (minute == 17) {
                          minute_display.attr('class', 'minute ab-mid seventeen');
                        }
                        
                        if (minute == 18) {
                          minute_display.attr('class', 'minute ab-mid eighteen');
                        }
                        
                        if (minute == 19) {
                          minute_display.attr('class', 'minute ab-mid nineteen');
                        }
                        
                        if (minute == 20) {
                          minute_display.attr('class', 'minute ab-mid twenty');
                        }
                        
                        if (minute == 21) {
                          minute_display.attr('class', 'minute ab-mid twenty-one');
                        }
                        
                        if (minute == 22) {
                          minute_display.attr('class', 'minute ab-mid twenty-two');
                        }
                        
                        if (minute == 23) {
                          minute_display.attr('class', 'minute ab-mid twenty-three');
                        }
                        
                        if (minute == 24) {
                          minute_display.attr('class', 'minute ab-mid twenty-four');
                        }
                        
                        if (minute == 25) {
                          minute_display.attr('class', 'minute ab-mid twenty-five');
                        }
                        
                        if (minute == 26) {
                          minute_display.attr('class', 'minute ab-mid twenty-six');
                        }
                        
                        if (minute == 27) {
                          minute_display.attr('class', 'minute ab-mid twenty-seven');
                        }
                        
                        if (minute == 28) {
                          minute_display.attr('class', 'minute ab-mid twenty-eight');
                        }
                        
                        if (minute == 29) {
                          minute_display.attr('class', 'minute ab-mid twenty-nine');
                        }
                        
                        if (minute == 30) {
                          minute_display.attr('class', 'minute ab-mid thirty');
                        }
                        
                        if (minute == 31) {
                          minute_display.attr('class', 'minute ab-mid thirty-one');
                        }
                        
                        if (minute == 32) {
                          minute_display.attr('class', 'minute ab-mid thirty-two');
                        }
                        
                        if (minute == 33) {
                          minute_display.attr('class', 'minute ab-mid thirty-three');
                        }
                        
                        if (minute == 34) {
                          minute_display.attr('class', 'minute ab-mid thirty-four');
                        }
                        
                        if (minute == 35) {
                          minute_display.attr('class', 'minute ab-mid thirty-five');
                        }
                        
                        if (minute == 36) {
                          minute_display.attr('class', 'minute ab-mid thirty-six');
                        }
                        
                        if (minute == 37) {
                          minute_display.attr('class', 'minute ab-mid thirty-seven');
                        }
                        
                        if (minute == 38) {
                          minute_display.attr('class', 'minute ab-mid thirty-eight');
                        }
                        
                        if (minute == 39) {
                          minute_display.attr('class', 'minute ab-mid thirty-nine');
                        }
                        
                        if (minute == 40) {
                          minute_display.attr('class', 'minute ab-mid forty');
                        }
                        
                        if (minute == 41) {
                          minute_display.attr('class', 'minute ab-mid forty-one');
                        }
                        
                        if (minute == 42) {
                          minute_display.attr('class', 'minute ab-mid forty-two');
                        }
                        
                        if (minute == 43) {
                          minute_display.attr('class', 'minute ab-mid forty-three');
                        }
                        
                        if (minute == 44) {
                          minute_display.attr('class', 'minute ab-mid forty-four');
                        }
                        
                        if (minute == 45) {
                          minute_display.attr('class', 'minute ab-mid forty-five');
                        }
                        
                        if (minute == 46) {
                          minute_display.attr('class', 'minute ab-mid forty-six');
                        }
                        
                        if (minute == 47) {
                          minute_display.attr('class', 'minute ab-mid forty-seven');
                        }
                        
                        if (minute == 48) {
                          minute_display.attr('class', 'minute ab-mid forty-eight');
                        }
                        
                        if (minute == 49) {
                          minute_display.attr('class', 'minute ab-mid forty-nine');
                        }
                        
                        if (minute == 50) {
                          minute_display.attr('class', 'minute ab-mid fifty');
                        }
                        
                        if (minute == 51) {
                          minute_display.attr('class', 'minute ab-mid fifty-one');
                        }
                        
                        if (minute == 52) {
                          minute_display.attr('class', 'minute ab-mid fifty-two');
                        }
                        
                        if (minute == 53) {
                          minute_display.attr('class', 'minute ab-mid fifty-three');
                        }
                        
                        if (minute == 54) {
                          minute_display.attr('class', 'minute ab-mid fifty-four');
                        }
                        
                        if (minute == 55) {
                          minute_display.attr('class', 'minute ab-mid fifty-five');
                        }
                        
                        if (minute == 56) {
                          minute_display.attr('class', 'minute ab-mid fifty-six');
                        }
                        
                        if (minute == 57) {
                          minute_display.attr('class', 'minute ab-mid fifty-seven');
                        }
                        
                        if (minute == 58) {
                          minute_display.attr('class', 'minute ab-mid fifty-eight');
                        }
                        
                        if (minute == 59) {
                          minute_display.attr('class', 'minute ab-mid fifty-nine');
                        }
                      }
                      highlight();

                      function analog() {
                        minute = minute * 6;
                        minute_hand = this_clock.find('.minute');
                        minute_hand.css('transform', 'rotate(' + minute + 'deg)');
                      }
                    }
                    minutes();
                    
                    function seconds() {
                      second = date.getSeconds();
                      second_display = this_clock.find('.numeric-indicators .second');
                      
                      function highlight() {       
                        if (second == 0) {
                          second_display.attr('class', 'second ab-mid zero');
                        }
                        
                        if (second == 1) {
                          second_display.attr('class', 'second ab-mid one');
                        }
                        
                        if (second == 2) {
                          second_display.attr('class', 'second ab-mid two');
                        }
                        
                        if (second == 3) {
                          second_display.attr('class', 'second ab-mid three');
                        }
                        
                        if (second == 4) {
                          second_display.attr('class', 'second ab-mid four');
                        }
                        
                        if (second == 5) {
                          second_display.attr('class', 'second ab-mid five');
                        }
                        
                        if (second == 6) {
                          second_display.attr('class', 'second ab-mid six');
                        }
                        
                        if (second == 7) {
                          second_display.attr('class', 'second ab-mid seven');
                        }
                        
                        if (second == 8) {
                          second_display.attr('class', 'second ab-mid eight');
                        }
                        
                        if (second == 9) {
                          second_display.attr('class', 'second ab-mid nine');
                        }
                        
                        if (second == 10) {
                          second_display.attr('class', 'second ab-mid ten');
                        }
                        
                        if (second == 11) {
                          second_display.attr('class', 'second ab-mid eleven');
                        }
                        
                        if (second == 12) {
                          second_display.attr('class', 'second ab-mid twelve');
                        }
                        
                        if (second == 13) {
                          second_display.attr('class', 'second ab-mid thirteen');
                        }
                        
                        if (second == 14) {
                          second_display.attr('class', 'second ab-mid fourteen');
                        }
                        
                        if (second == 15) {
                          second_display.attr('class', 'second ab-mid fifteen');
                        }
                        
                        if (second == 16) {
                          second_display.attr('class', 'second ab-mid sixteen');
                        }
                        
                        if (second == 17) {
                          second_display.attr('class', 'second ab-mid seventeen');
                        }
                        
                        if (second == 18) {
                          second_display.attr('class', 'second ab-mid eighteen');
                        }
                        
                        if (second == 19) {
                          second_display.attr('class', 'second ab-mid nineteen');
                        }
                        
                        if (second == 20) {
                          second_display.attr('class', 'second ab-mid twenty');
                        }
                        
                        if (second == 21) {
                          second_display.attr('class', 'second ab-mid twenty-one');
                        }
                        
                        if (second == 22) {
                          second_display.attr('class', 'second ab-mid twenty-two');
                        }
                        
                        if (second == 23) {
                          second_display.attr('class', 'second ab-mid twenty-three');
                        }
                        
                        if (second == 24) {
                          second_display.attr('class', 'second ab-mid twenty-four');
                        }
                        
                        if (second == 25) {
                          second_display.attr('class', 'second ab-mid twenty-five');
                        }
                        
                        if (second == 26) {
                          second_display.attr('class', 'second ab-mid twenty-six');
                        }
                        
                        if (second == 27) {
                          second_display.attr('class', 'second ab-mid twenty-seven');
                        }
                        
                        if (second == 28) {
                          second_display.attr('class', 'second ab-mid twenty-eight');
                        }
                        
                        if (second == 29) {
                          second_display.attr('class', 'second ab-mid twenty-nine');
                        }
                        
                        if (second == 30) {
                          second_display.attr('class', 'second ab-mid thirty');
                        }
                        
                        if (second == 31) {
                          second_display.attr('class', 'second ab-mid thirty-one');
                        }
                        
                        if (second == 32) {
                          second_display.attr('class', 'second ab-mid thirty-two');
                        }
                        
                        if (second == 33) {
                          second_display.attr('class', 'second ab-mid thirty-three');
                        }
                        
                        if (second == 34) {
                          second_display.attr('class', 'second ab-mid thirty-four');
                        }
                        
                        if (second == 35) {
                          second_display.attr('class', 'second ab-mid thirty-five');
                        }
                        
                        if (second == 36) {
                          second_display.attr('class', 'second ab-mid thirty-six');
                        }
                        
                        if (second == 37) {
                          second_display.attr('class', 'second ab-mid thirty-seven');
                        }
                        
                        if (second == 38) {
                          second_display.attr('class', 'second ab-mid thirty-eight');
                        }
                        
                        if (second == 39) {
                          second_display.attr('class', 'second ab-mid thirty-nine');
                        }
                        
                        if (second == 40) {
                          second_display.attr('class', 'second ab-mid forty');
                        }
                        
                        if (second == 41) {
                          second_display.attr('class', 'second ab-mid forty-one');
                        }
                        
                        if (second == 42) {
                          second_display.attr('class', 'second ab-mid forty-two');
                        }
                        
                        if (second == 43) {
                          second_display.attr('class', 'second ab-mid forty-three');
                        }
                        
                        if (second == 44) {
                          second_display.attr('class', 'second ab-mid forty-four');
                        }
                        
                        if (second == 45) {
                          second_display.attr('class', 'second ab-mid forty-five');
                        }
                        
                        if (second == 46) {
                          second_display.attr('class', 'second ab-mid forty-six');
                        }
                        
                        if (second == 47) {
                          second_display.attr('class', 'second ab-mid forty-seven');
                        }
                        
                        if (second == 48) {
                          second_display.attr('class', 'second ab-mid forty-eight');
                        }
                        
                        if (second == 49) {
                          second_display.attr('class', 'second ab-mid forty-nine');
                        }
                        
                        if (second == 50) {
                          second_display.attr('class', 'second ab-mid fifty');
                        }
                        
                        if (second == 51) {
                          second_display.attr('class', 'second ab-mid fifty-one');
                        }
                        
                        if (second == 52) {
                          second_display.attr('class', 'second ab-mid fifty-two');
                        }
                        
                        if (second == 53) {
                          second_display.attr('class', 'second ab-mid fifty-three');
                        }
                        
                        if (second == 54) {
                          second_display.attr('class', 'second ab-mid fifty-four');
                        }
                        
                        if (second == 55) {
                          second_display.attr('class', 'second ab-mid fifty-five');
                        }
                        
                        if (second == 56) {
                          second_display.attr('class', 'second ab-mid fifty-six');
                        }
                        
                        if (second == 57) {
                          second_display.attr('class', 'second ab-mid fifty-seven');
                        }
                        
                        if (second == 58) {
                          second_display.attr('class', 'second ab-mid fifty-eight');
                        }
                        
                        if (second == 59) {
                          second_display.attr('class', 'second ab-mid fifty-nine');
                        }
                      }
                      highlight();
                      
                      function analog() {
                        second = second * 6;
                        second_hand = this_clock.find('.second');
                        second_hand.css('transform', 'rotate(' + second + 'deg)');
                      }
                    }
                    seconds();
                  });
                }
              }
              indicatorsContainer();
