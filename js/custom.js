$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    mouseDrag:true,
    navText:['<i class="fa-solid fa-less-than"></i>','<i class="fa-solid fa-greater-than"></i>'],
    autoplay:true,
    autoplayTimeout:5000,
    smartspeed: 5000,
    // autoplayHoverPause:true,

});
$(document).ready(function () {




    new WOW().init();

    var owl = $('#home');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })







    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();



    
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

});