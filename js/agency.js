// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    var foo = $(".intro-lead-in").offset().top;

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: foo - 60
        }
    })
    if($(window).width() > 500) {
    var scrolling = false;
    $('header').mousemove(function( event ) {
      if(!scrolling) {
      var containerWidth = $(this).width(),
      containerHeight = $(this).innerHeight(),
      mousePositionX = (event.pageX / containerWidth) * 100,
      mousePositionY = (event.pageY / containerHeight) * 100;
      if(mousePositionX > 100) {
        mousePositionX = 100;
      }

      $(this).css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');
      }
    });

    $(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    scrolling = true;
    $.data(this, 'scrollTimer', setTimeout(function() {
      scrolling = false;
    }, 300));
  });
  }
    $('.main-carousel').flickity({
      cellSelector: '.carousel-cell',
      cellAlign: 'left',
      wrapAround: true,
      prevNextButtons: false,
      imagesLoaded: true,
      // setGallerySize: false,
      // lazyload: true,
    });
  $('.portfolio-modal').on( 'shown.bs.modal', function( event ) {
    $('.main-carousel').flickity('resize');
  });
  var image_url = $('header').css('background-image'),
    image;

// Remove url() or in case of Chrome url("")
image_url = image_url.match(/^url\("?(.+?)"?\)$/);

if (image_url[1]) {
    image_url = image_url[1];
    image = new Image();

    // just in case it is not already loaded
    $(document).load(function () {
        console.log(image.width + 'x' + image.height);
    });

    image.src = image_url;
}
$(window).on("load", function() {
  var dob = new Date(91, 6, 14);
  var today = new Date();
  var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
  var month = today.getMonth() + 6;
  var mtext;
  var monthText = function() {
    if(month > 12) {
      month -= 12;
      return " as of " + month + "months ago.";
    }
    if(month === 12) {
      return ". Soon I'll be " + age + 1 +".";
    }
    else  {
      return ", as of " + month + " months ago.";
    }
  }
  console.log(monthText());
  console.log(age);
  $('#age').text(age);
  $('#months').text(monthText());
})




})(jQuery); // End of use strict

