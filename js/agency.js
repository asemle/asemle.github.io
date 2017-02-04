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
    $(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      $('header').mousemove(function( event ) {
        var containerWidth = $(this).innerWidth(),
        containerHeight = $(this).innerHeight(),
        mousePositionX = (event.pageX / containerWidth) * 100,
        mousePositionY = (event.pageY /containerHeight) * 100;
        $(this).css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');
      });
        console.log("Haven't scrolled in 250ms!");
    }, 250));
});



})(jQuery); // End of use strict
