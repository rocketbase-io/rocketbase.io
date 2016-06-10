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



    // Slider
    $.CatSlider = function( options, element ) {
        this.$el = $( element );
        this._init( options );
    };

    $.CatSlider.prototype = {

        _init : function( options ) {

            // the categories (ul)
            this.$categories = this.$el.children( 'ul' );
            // the navigation
            this.$navcategories = this.$el.find( 'nav > a' );
            var animEndEventNames = {
                'WebkitAnimation' : 'webkitAnimationEnd',
                'OAnimation' : 'oAnimationEnd',
                'msAnimation' : 'MSAnimationEnd',
                'animation' : 'animationend'
            };
            // animation end event name
            this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
            // animations and transforms support
            this.support = Modernizr.csstransforms && Modernizr.cssanimations;
            // if currently animating
            this.isAnimating = false;
            // current category
            this.current = 0;
            var $currcat = this.$categories.eq( 0 );
            if( !this.support ) {
                this.$categories.hide();
                $currcat.show();
            }
            else {
                $currcat.addClass( 'mi-current' );
            }
            // current nav category
            this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
            // initialize the events
            this._initEvents();

        },
        _initEvents : function() {

            var self = this;
            this.$navcategories.on( 'click.catslider', function() {
                self.showCategory( $( this ).index() );
                return false;
            } );

            // reset on window resize..
            $( window ).on( 'resize', function() {
                self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
                self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
                self.current = 0;
            } );

        },
        showCategory : function( catidx ) {

            if( catidx === this.current || this.isAnimating ) {
                return false;
            }
            this.isAnimating = true;
            // update selected navigation
            this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );

            var dir = catidx > this.current ? 'right' : 'left',
                toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
                fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
            // current category
                $currcat = this.$categories.eq( this.current ),
            // new category
                $newcat = this.$categories.eq( catidx ),
                $newcatchild = $newcat.children(),
                lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
                self = this;

            if( this.support ) {

                $currcat.removeClass().addClass( toClass );

                setTimeout( function() {

                    $newcat.removeClass().addClass( fromClass );
                    $newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

                        $( this ).off( self.animEndEventName );
                        $newcat.addClass( 'mi-current' );
                        self.current = catidx;
                        var $this = $( this );
                        // solve chrome bug
                        self.forceRedraw( $this.get(0) );
                        self.isAnimating = false;

                    } );

                }, $newcatchild.length * 90 );

            }
            else {

                $currcat.hide();
                $newcat.show();
                this.current = catidx;
                this.isAnimating = false;

            }

        },
        // based on http://stackoverflow.com/a/8840703/989439
        forceRedraw : function(element) {
            if (!element) { return; }
            var n = document.createTextNode(' '),
                position = element.style.position;
            element.appendChild(n);
            element.style.position = 'relative';
            setTimeout(function(){
                element.style.position = position;
                n.parentNode.removeChild(n);
            }, 25);
        }

    }

    $.fn.catslider = function( options ) {
        var instance = $.data( this, 'catslider' );
        if ( typeof options === 'string' ) {
            var args = Array.prototype.slice.call( arguments, 1 );
            this.each(function() {
                instance[ options ].apply( instance, args );
            });
        }
        else {
            this.each(function() {
                instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
            });
        }
        return instance;
    };

})(jQuery);
