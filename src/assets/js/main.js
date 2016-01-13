(function ($) {



    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 200
        }
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

// ***********************************
// pageloader
// ***********************************
    $(window).load(function () {
        if ($(".preloader").length > 0) {
            $('.preloader').fadeOut(1000); // set duration in brackets
        }

        $('.carousel').carousel({
            interval: 3000
        });
    });


})(jQuery);
