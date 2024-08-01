

var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 3,
  spaceBetween: 40,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev ",
  },

  breakpoints: {
    1199: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// partner-slider js
var swiper = new Swiper(".partner-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
