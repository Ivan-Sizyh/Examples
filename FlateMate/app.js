$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let btn = $(".btn");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let headerinner = $("#hinner");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
            btn.addClass("elips--green");
        } else {
            header.removeClass("fixed");
            btn.removeClass("elips--green");
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
        headerinner.toggleClass("hinner__flex");
    });

    // Reviews https:http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js
    let slider = $("#SliderItems")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
})