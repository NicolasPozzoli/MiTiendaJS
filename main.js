document.addEventListener("DOMContentLoaded", function() {
    $('.banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true
    });


    
     $('.slider-categorias').slick({
         dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 4000,
           arrows: false,
           adaptiveHeight: true
    });



    var swiper = new Swiper(".slide-content", {
      
        slidesPerView: 2,
        spaceBetween: 18,
        slidesPerGroup: 1,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        gragCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0:{
                slidesPerView: 2,
            },
            950:{
                slidesPerView: 5,
            },

        },
      });
      
   

      var swiper = new Swiper(".slide-content-info", {
      
        slidesPerView: 1,
        spaceBetween: 18,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        gragCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
        },
        navigation: {
         
        },

        breakpoints:{
          0:{
              slidesPerView: 1,
          },
          950:{
              slidesPerView: 3,
          },

      },

      });
    

});

