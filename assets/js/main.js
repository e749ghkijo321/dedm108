/*
   Road Trip by TEMPLATED
   templated.co @templatedco
   Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

   skel.breakpoints({
      xlarge: '(max-width: 1680px)',
      large: '(max-width: 1280px)',
      medium: '(max-width: 980px)',
      small: '(max-width: 736px)',
      xsmall: '(max-width: 480px)'
   });

   $(function() {

      var $window = $(window),
         $body = $('body'),
         $header = $('#header'),
         $banner = $('#banner');

      var $height = $('#header').height();

      // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
         window.setTimeout(function() {
            $body.removeClass('is-loading');
         }, 100);
      });

      // Fix: Placeholder polyfill.
      $('form').placeholder();

      // Prioritize "important" elements on medium.
      skel.on('+medium -medium', function() {
         $.prioritize(
            '.important\\28 medium\\29',
            skel.breakpoint('medium').active
         );
      });



      // Scrolly.
      if ($(".scrolly").length) {

         $('.scrolly').scrolly();
      }






   });


   var ssBackToTop = function() {

      var pxShow = 500, // height on which the button will show
         fadeInTime = 400, // how slow/fast you want the button to show
         fadeOutTime = 400, // how slow/fast you want the button to hide
         scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
         goTopButton = $("#go-top")

      // Show or hide the sticky footer button
      $(window).on('scroll', function() {
         if ($(window).scrollTop() >= pxShow) {
            goTopButton.fadeIn(fadeInTime);
         } else {
            goTopButton.fadeOut(fadeOutTime);
         }
      });
   };
   (function ssInit() {


      ssBackToTop();

   })();
   window.onbeforeunload = function() {
      document.documentElement.scrollTop = 0; //ie下
      document.body.scrollTop = 0; //非ie
   }
   $(window).scroll(function() {
      //最後一頁scrollTop=body-window，500是預留空間
      last = $("body").height() - $(window).height() - 500
      if ($(window).scrollTop() >= last) {
         $(".inshow").show()
         $(".clotxt").css("display", "block")
         $(".clocho").css("display", "block")
         $(".clock").css("display", "block")

         $(".page-wrap").css("z-index", "1000")

         $(".page-wrap").animate({ "opacity": "1" }, "slow");
         $(".page-wrap.mobile").css("z-index", "-1")
         $(".clocho.mobile").css("display", "none")
         $(".clotxt.mobile").css("display", "none")
         $(".clock.mobile").css("display", "none")


      } else {
         $(".inshow").hide()
         $(".page-wrap").css("z-index", "-1")

      }


   })


   $(".clotxt").click(function() {
      $(".page-wrap").addClass('mobile');
      $(".clock").addClass('mobile');
      $(".clotxt").addClass('mobile');
      $(".clocho").addClass('mobile');


      $(".mobile #celtic").animate({ "width": "45%", "left": "8vw", "top": "10vh" }, "slow");

      $(".computer #celtic").animate({ "width": "33%", "left": "7vw", "top": "27vh" }, "slow");
      $(".page-wrap").css("z-index", "-1")
      $(".clinfo").css("display", "block")
      $(".mobile .clock").animate({ "top": "16vh", "opacity": "0" }, "slow");
      $(".computer .clock").animate({ "top": "16vh", "right": "43vw" }, "slow");

      $(".clotxt").css("display", "none")
      $(".clocho").css("display", "none")

   });





   $('.scroll').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate({
         scrollTop: $(this.hash).offset().top
      }, 1500);

      $(".page-wrap").removeClass('mobile');
      $(".clock").removeClass('mobile');
      $(".clotxt").removeClass('mobile');
      $(".clocho").removeClass('mobile');


      $(".computer #celtic").animate({ "width": "45%", "left": "12vw", "top": "23vh" }, "slow");
      $(".clinfo").css("display", "none")
      $(".clock").animate({ "top": "31vh", "opacity": "1", "right": "14vw" }, "slow");
      $(".mobile #celtic").animate({ "width": "45%", "left": "28vw", "top": "9vh" }, "slow");


   });


})(jQuery);

$(document).ready(function() {

   $(window).scroll(function() {
      drawLine($("#celtic"), document.getElementsByTagName("path"));
   });

   // init the line length
   drawLine($("#celtic"), document.getElementsByTagName("path"));

   //draw the line
   function drawLine(container, paths) {
      for (var i = 0; i < paths.length; i++) {
         var pathLength = paths[i].getTotalLength(),
            maxScrollTop = $(document).height() * 7 - $(window).height(),
            percentDone = $(window).scrollTop() / maxScrollTop,
            length = percentDone * pathLength;
         paths[i].style.strokeDasharray = [length, pathLength].join(" ");
      }
   }
});