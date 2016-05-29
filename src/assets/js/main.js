(function ($) {

    /*
    $(window).load(function () {
        if ($(".preloader").length > 0) {
            $('.preloader').fadeOut(1000); // set duration in brackets
        }
    });
    */

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


    // Cookie Banner
    var COOKIE_NAME = 'EU_COOKIE_LAW_CONSENT', COOKIE_EXPIRES_IN_DAYS = 90;

    // Storing the consent in a cookie
    var setUserAcceptsCookies = function(consent) {
        var d = new Date();
        var expiresInDays = COOKIE_EXPIRES_IN_DAYS * 24 * 60 * 60 * 1000;
        d.setTime( d.getTime() + expiresInDays );
        var expires = "expires=" + d.toGMTString();
        document.cookie = COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";
    };

    // Let's see if we have a consent cookie already
    var userAlreadyAcceptedCookies = function() {
        var userAcceptedCookies = false;
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf(COOKIE_NAME) == 0) {
                userAcceptedCookies = c.substring(COOKIE_NAME.length + 1, c.length);
            }
        }

        return userAcceptedCookies;
    };

    var hideContainer = function() {
        $('.eupopup-container').animate({
            opacity: 0,
            height: 0
        }, 200, function() {
            $('.eupopup-container').hide(0);
        });
    };

    $(document).ready(function() {
        // No need to display this if user already accepted the policy
        if (userAlreadyAcceptedCookies()) {
            return;
        }

        $('.eupopup-button').click(function() {
            setUserAcceptsCookies(true);
            hideContainer();
            return false;
        });

        // Ready to start!
        $('.eupopup-container').show();
    });

})(jQuery);
