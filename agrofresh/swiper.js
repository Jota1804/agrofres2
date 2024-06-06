var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0: {
          slidesPerView: 1,
      },
      620: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
  
  });