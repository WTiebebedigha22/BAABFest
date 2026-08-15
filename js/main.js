(function ($) {
    "use strict";

    /* ==================================================
       1. Preloader
       ================================================== */
    $(window).on('load', function () {
        setTimeout(function () {
            $('.js-preloader').addClass('hidden');
        }, 400);
    });

    /* ==================================================
       2. WOW Animations
       ================================================== */
    new WOW().init();

    /* ==================================================
       3. Sticky Navbar
       ================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    /* ==================================================
       4. Back to top button
       ================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
        return false;
    });

    /* ==================================================
       5. Animated Counters
       ================================================== */
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 12,
            time: 2200
        });
    }

    /* ==================================================
       6. Team Carousel (About page)
       ================================================== */
    if ($('.testimonial-carousel').length) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 900,
            center: true,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 }
            }
        });
    }

    /* ==================================================
       7. Gallery Filtering
       ================================================== */
    var $galleryFilter = $('.gallery-filter');
    if ($galleryFilter.length) {
        var $filterBtns = $galleryFilter.find('.filter-btn');
        var $galleryItems = $('.gallery-item');

        $filterBtns.on('click', function (e) {
            e.preventDefault();
            var filterVal = $(this).data('filter');
            $filterBtns.removeClass('active');
            $(this).addClass('active');

            $galleryItems.each(function () {
                var itemCat = $(this).data('category');
                if (filterVal === '*' || itemCat === filterVal) {
                    $(this).parent().fadeIn(300).css('display', 'block');
                } else {
                    $(this).parent().fadeOut(200);
                }
            });
        });
    }

    /* ==================================================
       8. Newsletter Form (client-side demo handler)
       ================================================== */
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $input = $form.find('input[type="email"]');
        var $msg = $form.find('.newsletter-msg');
        var email = $input.val().trim();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $msg.text('Please enter a valid email address.').css('color', '#FFD6A5');
            return;
        }

        $msg.text('Thank you for subscribing! We will keep you posted on BAABFest updates.').css('color', '#E2C98A');
        $input.val('');
    });

    /* ==================================================
       9. Tally Embed Fix
       ================================================== */
    if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
    }

    /* ==================================================
       10. Smooth anchor scrolling
       ================================================== */
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 700, 'easeInOutExpo');
        }
    });

})(jQuery);

