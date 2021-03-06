(function($) {
    "use strict";
    //   all ------------------
    function initTownHub() {
        //   loader ------------------
        $(".loader-wrap").fadeOut(300, function() {
            $("#main-theme").animate({
                opacity: "1"
            }, 300);
        });
        if ($('#top-menu').length) {
            $('#top-menu li.menu-item-has-children > a').append(' <i class="fas fa-caret-down"></i>')
        }
        //   Background image ------------------
        var a = $(".bg");
        a.each(function(a) {
            if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
        });
        //   scrollToFixed------------------
        var adminbarheight = 0;
        if ($('#wpadminbar').length) adminbarheight = $('#wpadminbar').outerHeight()
        if ($(".scroll-nav-wrapper").length) {
            $(".scroll-nav-wrapper").each(function() {
                var $lscn = $(this),
                    mW = 769;
                if ($lscn.hasClass('lscroll-mobile-yes')) mW = 100
                $lscn.scrollToFixed({
                    minWidth: mW,
                    zIndex: 12,
                    marginTop: 80 + adminbarheight,
                    removeOffsets: true,
                    limit: function() {
                        var a = $(".limit-box").offset().top - $(".scroll-nav-wrapper").outerHeight(true) - 50;
                        return a;
                    },
                    spacerClass: 'scroll-nav-fixed-spacer'
                });
            });
        }
        $(".fixed-listing-header").scrollToFixed({
            minWidth: 1064,
            marginTop: 80 + adminbarheight,
            removeOffsets: true,
            limit: function() {
                var a = $(".limit-box").offset().top - $(".fixed-listing-header").outerHeight();
                return a;
            }
        });
        $(".fixed-scroll-column-item").scrollToFixed({
            minWidth: 1064,
            marginTop: 200,
            removeOffsets: true,
            limit: function() {
                var a = $(".limit-box").offset().top - $(".fixed-scroll-column-item").outerHeight() - 46;
                return a;
            }
        });
        $(".fix-map").scrollToFixed({
            minWidth: 1064,
            zIndex: 0,
            marginTop: 80,
            
            removeOffsets: true,
            
        });
        
        $(".back-tofilters").scrollToFixed({
            minWidth: 1064,
            zIndex: 12,
            marginTop: 90,
            removeOffsets: true,
            limit: function() {
                var a = $(".limit-box").offset().top - $(".back-tofilters").outerHeight(true);
                return a;
            },
            spacerClass: 'back-to-filter-fixed-spacer'
        });
        $(".help-bar").scrollToFixed({
            minWidth: 1064,
            zIndex: 12,
            marginTop: 100,
            removeOffsets: true,
            limit: function() {
                var a = $(".limit-box").offset().top - $(".help-bar").outerHeight(true) - 60;
                return a;
            }
        });
        if( $(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true) - 100 ) {
            $(".fixed-bar").addClass("fixbar-action");
            $(".fixbar-action").scrollToFixed({
                minWidth: 1064,
                zIndex: 12,
                marginTop: function() {
                    var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 100;
                    if (a >= 0) return 20;
                    return a;
                },
                removeOffsets: true,
                limit: function() {
                    var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() - 60;
                    return a;
                },
                spacerClass: 'dashboard-fixed-spacer'
            });
        } else $(".fixed-bar").removeClass("fixbar-action");

        // filter show -----------------
        var shf = $(".shsb_btn"),
            ahimcocn = $(".anim_clw"),
            mapover = $(".map-overlay , .close_sbfilters");
        function showhiddenfilters() {
            shf.removeClass("shsb_btn_act");
            ahimcocn.addClass("hidsb_act");
            mapover.fadeIn(200);
        }
        function hidehiddenfilters() {
            shf.addClass("shsb_btn_act");
            ahimcocn.removeClass("hidsb_act");
            mapover.fadeOut(200);
        }
        shf.on("click", function () {
            if ($(this).hasClass("shsb_btn_act")) showhiddenfilters();
            else hidehiddenfilters();
        });
        mapover.on("click", function () {
            hidehiddenfilters();
        });
        // normal filter
        $(".show-list-wrap-search").on("click", function (e) {
            $(".lws_mobile").slideToggle(400);
            $(this).toggleClass("slsw_vis");

        });
        
        //   appear------------------
        $(".stats").appear(function() {
            $(".num").countTo();
        });
        //   scroll to------------------
        $(".custom-scroll-link").on("click", function() {
            var a = 70 + $(".scroll-nav-wrapper").height() + adminbarheight;
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var b = $(this.hash);
                b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                if (b.length) {
                    $("html,body").animate({
                        scrollTop: b.offset().top - a
                    }, {
                        queue: false,
                        duration: 1200,
                        easing: "easeInOutExpo"
                    });
                    return false;
                }
            }
        });
        $(".scroll-init  ul ").singlePageNav({
            filter: ":not(.external)",
            updateHash: false,
            offset: 160 + adminbarheight,
            threshold: 150,
            speed: 1200,
            currentClass: "act-scrlink"
        });
        $('.scroll-init a').each(function() {
            if (!$(this.hash).length) {
                $(this).parent().hide()
            }
        })
        $(".to-top").on("click", function(a) {
            a.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        // scroll animation ------------------
        $(window).on("scroll", function(a) {
            if ($(this).scrollTop() > 150) {
                $(".to-top").fadeIn(500);
                $(".clbtg").fadeIn(500);
            } else {
                $(".to-top").fadeOut(500);
                $(".clbtg").fadeOut(500);
            }
        });
        
        // Styles ------------------
        if ($("footer.main-footer").hasClass("fixed-footer")) {
            $('<div class="height-emulator fl-wrap"></div>').appendTo("#main-theme");
        }

        function csselem() {
            $(".height-emulator").css({
                height: $(".fixed-footer").outerHeight(true)
            });
            $(".slideshow-container .slideshow-item").css({
                height: $(".slideshow-container").outerHeight(true)
            });
            $(".slider-container .slider-item").css({
                height: $(".slider-container").outerHeight(true)
            });
        }
        csselem();
        // Mob Menu------------------
        $(".nav-button-wrap").on("click", function() {
            $(".main-menu").toggleClass("vismobmenu");
        });

        function mobMenuInit() {
            var ww = $(window).width();
            if (ww < 1064) {
                $(".menusb").remove();
                $(".main-menu").removeClass("nav-holder");
                $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
                $(".menusb").slidingMenu();
            } else {
                $(".menusb").remove();
                $(".main-menu").addClass("nav-holder");
            }
        }
        mobMenuInit();
        //   css ------------------
        var $window = $(window);
        $window.resize(function() {
            csselem();
            mobMenuInit();
        });
        // $(document.body).bind('added_to_cart', function(event, fragments, cart_hash) {
        //     if (fragments && fragments['div.widget_shopping_cart_content']) {
        //         var cart_content = fragments['div.widget_shopping_cart_content'];
        //         if ($(cart_content).find('.mini_cart_item')) {
        //             var cart_quantity_total = 0;
        //             $(cart_content).find('.mini_cart_item').each(function() {
        //                 cart_quantity_total += parseInt($('span.quantity', this).text());
        //             });
        //             $('.attr-nav .cart-link .cart-count').text(cart_quantity_total);
        //         }
        //     }
        // });
        // new from townhub
        $(".show-hidden-map").on("click", function(e) {
            e.preventDefault();
            var optext = $(this).data('optext'),
                cltext = $(this).data('cltext');
            $(".show-hidden-map").find("span").text( $(".show-hidden-map span").text() === cltext ? optext : cltext );
            $(".hidden-map-container").slideToggle(400);
        });

        function showColumnhiddenmap() {
            if ($(window).width() < 1064) {
                $(".hid-mob-map").animate({
                    right: 0
                }, 500, "easeInOutExpo").addClass("fixed-mobile");
            }
        }
        $(".map-item , .schm").on("click", function(e) {
            e.preventDefault();
            showColumnhiddenmap();
        });
        $('.map-close').on("click", function(e) {
            $(".hid-mob-map").animate({
                right: "-100%"
            }, 500, "easeInOutExpo").removeClass("fixed-mobile");
        });
        

        function heroAnim() {
            function a(a) {
                var b = a.length,
                    c, d;
                while (b) {
                    d = Math.floor(Math.random() * b--);
                    c = a[b];
                    a[b] = a[d];
                    a[d] = c;
                }
                return a;
            }
            var b = $(".footer-bg-pin");
            $(a(b).slice(0, $(".footer-bg").data("ran"))).each(function(a) {
                var bc = $(this);
                b.removeClass("footer-bg-pin-vis")
                bc.addClass("footer-bg-pin-vis");
            });
        }
        setInterval(function() {
            heroAnim();
        }, 2000);
        // header search
        var headSearch = $(".header-search"),
            ssbut = $(".show-search-button"),
            op_text = ssbut.data('optext'),
            cl_text = ssbut.data('cltext'),
            wlwrp = $(".header-modal"),
            wllink = $(".show-header-modal"),
            mainheader = $(".main-header");

        function showSearch() {
            headSearch.addClass("vis-head-search").removeClass("vis-search");
            ssbut.find("span").text(cl_text);
            ssbut.find("i").addClass("vis-head-search-close");
            mainheader.addClass("vis-searchdec");
            hideWishlist();
        }

        function hideSearch() {
            headSearch.removeClass("vis-head-search").addClass("vis-search");
            ssbut.find("span").text(op_text);
            ssbut.find("i").removeClass("vis-head-search-close");
            mainheader.removeClass("vis-searchdec");
        }
        ssbut.on("click", function() {
            if ($(".header-search").hasClass("vis-search")) showSearch();
            else hideSearch();
        });
        $(".header-search_close").on("click", function() {
            hideSearch();
        });

        function showWishlist() {
            wlwrp.fadeIn(1).addClass("vis-wishlist").removeClass("novis_wishlist")
            hideSearch();
            wllink.addClass("scwllink");
        }

        function hideWishlist() {
            wlwrp.fadeOut(1).removeClass("vis-wishlist").addClass("novis_wishlist");
            wllink.removeClass("scwllink");
        }
        wllink.on("click", function() {
            if (wlwrp.hasClass("novis_wishlist")) showWishlist();
            else hideWishlist();
        });
        $(".close-header-modal").on("click", function() {
            hideWishlist();
        });
        

        $(".show-more-snopt").on("click", function (e) {
            e.preventDefault();
            $(".show-more-snopt-tooltip").toggleClass("show-more-snopt-tooltip_vis");
        });
        // rating item
        $(".rate-item-bg").each(function () {
            $(this).find(".rate-item-line").css({
                width: $(this).attr("data-percent")
            });
        });



        // woocart
        //   show hide------------------
        $(".show-cart").on("click", function() {
            $(".cart-overlay").fadeIn(400);
            $(".cart-modal").animate({
                right: 0,
				boxShadow: "rgba(0, 0, 0, 0.16) 0px 21px 36px"
            }, 400);
            return false;
        });
        $(".cart-overlay , .close-cart").on("click", function() {
            $(".cart-overlay").fadeOut(400);
            $(".cart-modal").animate({
                right: "-350px",
				boxShadow : 0
            }, 400);
            return false;
			
        });

        $( document.body ).bind( 'added_to_cart', function( event, fragments, cart_hash ) {
            if( fragments && fragments['div.widget_shopping_cart_content'] ){
                var cart_content = fragments['div.widget_shopping_cart_content'];

                if($(cart_content).find('.mini_cart_item')){
                    var cart_quantity_total = 0;
                    $(cart_content).find('.mini_cart_item').each(function(){
                        cart_quantity_total += parseInt($('span.quantity', this).text());
                    });

                    $('.show-cart .cart-count').text(cart_quantity_total);
                }
            }
        });
        $( document.body ).bind( 'removed_from_cart', function( event, fragments, cart_hash ) {
            if( fragments && fragments['div.widget_shopping_cart_content'] ){
                var cart_content = fragments['div.widget_shopping_cart_content'];

                if($(cart_content).find('.mini_cart_item')){
                    var cart_quantity_total = 0;
                    $(cart_content).find('.mini_cart_item').each(function(){
                        cart_quantity_total += parseInt($('span.quantity', this).text());
                    });

                    $('.show-cart .cart-count').text(cart_quantity_total);
                }
            }
        });


    }
    //   Parallax ------------------
    function initparallax() {
        if ($('.shapes-decor').length) {
            $('.shapes-decor').each(function() {
                $(this).attr('data-scrollax-parent', true);
                $('<div class="gradient-bg-figure" style="right:-30px;top:10px;"></div>').appendTo($(this));
                $('<div class="gradient-bg-figure" style="left:-20px;bottom:30px;"></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:270px;top:120px;" data-scrollax="properties: { translateY: \'-200px\' }"><div class="circle_bg-bal circle_bg-bal_small"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:420px;bottom:-70px;" data-scrollax="properties: { translateY: \'150px\' }"><div class="circle_bg-bal circle_bg-bal_big"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:420px;top:-70px;" data-scrollax="properties: { translateY: \'100px\' }"><div class="circle_bg-bal circle_bg-bal_big"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:40%;bottom:-70px;"><div class="circle_bg-bal circle_bg-bal_middle"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:40%;top:-10px;"><div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: \'-350px\' }"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:55%;top:90px;"  ><div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: \'-350px\' }"></div></div>').appendTo($(this));
            });
        }
        var a = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
            }
        };
        var trueMobile = a.any();
        if (null == trueMobile) {
            var b = new Scrollax();
            b.reload();
            b.init();
        }
        if (trueMobile) $(".bgvid , .background-vimeo , .background-youtube-wrapper ").remove();
    }
	
	
	
    //   Init All ------------------
    $(function() {
        initTownHub();
        initparallax();
        
    });
})(jQuery);