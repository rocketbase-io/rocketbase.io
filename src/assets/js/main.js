(function ($) {

    $(window).load(function () {
        if ($(".preloader").length > 0) {
            $('.preloader').fadeOut(1000); // set duration in brackets
        }
    });

    $(document).ready(function () {
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function () {
            $('a.page-scroll').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
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
            interval: 2500
        });

        // aktivate Tooltips
        $('[data-toggle="tooltip"]').tooltip();


        $.scrollUp({
            animation: 'fade',
            scrollDistance: 400,
            scrollText: '<i class="fa fa-angle-up"></i>',
            scrollTitle: 'Scroll to top'
        });


        /**
         * detect IE
         * returns version of IE or false, if browser is not Internet Explorer
         */
        function detectIE() {
            var ua = window.navigator.userAgent;

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        }


        // detect IE
        var IEversion = detectIE();

        if (IEversion !== false) {
            function resizeSvg(maxWidth, maxHeight) {
                $('.svg-responsive').each(function (i) {
                    var img = $(this);
                    var h = img.data('height'), w = img.data('width');
                    if (w > maxWidth) {
                        h = h * (maxWidth / w);
                        w = maxWidth;
                    }
                    if (h > maxHeight) {
                        h = maxHeight;
                        w = w * (maxHeight / w);
                    }
                    img.css('height', h + 'px');
                    img.css('width', w + 'px');
                });
            }

            resizeSvg($('.container').width(), $(window).innerHeight());

            $(window).resize(function () {
                resizeSvg($('.container').width(), $(window).innerHeight());
            });
        }
    });

})(jQuery);
