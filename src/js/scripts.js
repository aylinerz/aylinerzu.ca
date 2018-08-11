(function ($, window, document, undefined) {
  'use strict';


      var patterns = {
          canvas1 : document.getElementById("canvas1"),
          canvas2 :  document.getElementById("canvas2"),
          activeCanvas : true,

          setBackground : function () {
              var pattern = Trianglify({
                  width: window.innerWidth,
                  height: window.innerHeight,
                  x_colors: this.getColor(),
                  variance: 0.9,
                  cell_size: Math.floor((Math.random() * 10) + 60),
              });

              if (this.activeCanvas) {
                  pattern.canvas(this.canvas1);
                  $("#canvas2").fadeOut(3000);
                  this.activeCanvas = false;
              } else {
                  pattern.canvas(this.canvas2);
                  $("#canvas2").fadeIn(3000);
                  this.activeCanvas = true;
              }
          },
          getColor: function(){
              var colors = ["YlGn", 'Greys', 'Blues', 'RdPu', 'PuBuGn', 'Purples', 'PuOr']
                return colors[Math.floor(Math.random() * colors.length)]
          },
          init: function () {
              var self = this;
             this.setBackground()
              setInterval(function () {
                 self.setBackground()
              }, 7000)
          },
          resize: function() {
              // this.canvas1.height = window.innerHeight;
              // this.canvas1.width = window.innerWidth;
              // this.canvas2.height = window.innerHeight;
              // this.canvas2.width = window.innerWidth;
          }
      }



      patterns.init();



    // init scrollbar in about page
    if($(".js-scroll").length) {
        const ps = new PerfectScrollbar('.js-scroll');
    }

    if($(".js-count").length) {
        var options = {
            strings: ["5th", "5th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th+ (I've lost count)"],
            typeSpeed: 90,
            backSpeed: 80,
            backDelay: 1200,
            startDelay: 14000,
        }
        var typed = new Typed(".js-count", options);
    }


    // s


  // Grid
    var $grid = $('.cards').isotope({
        itemSelector: '.cards__card',
        percentPosition: true,
        masonry: {
            columnWidth: '.cards__card-sizer',
            gutter: 5
        }
    });


    if($("#js-forms").length) {

        $("#js-forms .cards__card__inputs-input").on("click focus", function(){
            $(this).addClass('active')
        })
        $("#js-forms .cards__card__inputs-input").on("focusout", function(){
            if($(this).val() == '') {
                $(this).removeClass('active')
            }
        })
    }



    $( window ).resize(function() {
        patterns.resize()
    });

})(jQuery, window, document);
