(function ($) {
  "use strict";

  $(document).ready(function() {
      $('.menu-btn').click(function () { 
          $(this).toggleClass('active');
          $('.menu-area').toggleClass('active');
      });

      var swiper1 = new Swiper(".mySwiper", {
          slidesPerView: 5,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          centeredSlides: true,
          loop: true,
          freeMode: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });

      var swiper2 = new Swiper(".blogSwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: ".blog-swiper-pagination",
              clickable: true,
          },
      });
    //   contact Form 
    $('.contact form .input-box.name').click(function(){
        $(this).addClass('height');
        $('.contact .input-box.name').css('border-bottom','1px solid #fd7590');
        $('.contact .input-label.name').css('color', '#fd7590');
        })
  });
//   email
  $('.contact form .input-box.email').click(function(){
    $(this).addClass('height');
    $('.contact .input-box.email').css('border-bottom','1px solid #269fff');
    $('.contact .input-label.email').css('color', '#269fff');
    })
    // textarea
    $('.contact form .input-box.message').click(function(){
        
        $(this).addClass('height');
        $('.contact .input-box.message').css('border-bottom','1px solid #d566ff');
        $('.contact .input-label.message').css('color', '#d566ff');
        })
    
 
//   works
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer'
        }
      });
    
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group button').removeClass('is-checked');
    $(this).addClass('is-checked');
    });

})(jQuery);
