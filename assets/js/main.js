(function ($) {
    "use strict";
    $('.menu-btn').click(function () { 
        $(this).toggleClass('active');
        $('.menu-area').toggleClass('active');
    });
    
   $swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        centeredSlides: true,
        loop: true,
        freeMode: true,
        pagination: {
          
          clickable: true,
        },
      });
      
})(jQuery);