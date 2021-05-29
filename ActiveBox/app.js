$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let elementOffset = $(blockID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    //Nav
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews https:http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js
    let slider = $("#reviewsSlider")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
})