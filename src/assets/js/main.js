(function ($) {

    $(window).load(function () {
        if ($(".preloader").length > 0) {
            $('.preloader').fadeOut(1000); // set duration in brackets
        }

    });

    $(document).ready(function () {
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
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });


        $('.carousel').carousel({
            interval: 3000
        });


        $.scrollUp({
            animation: 'fade',
            scrollDistance: 400,
            scrollText: '<i class="fa fa-angle-up"></i>',
            scrollTitle: 'Scroll to top'
        });
    });

})(jQuery);
