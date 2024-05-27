"use static";
/*スライドショー*/
const swiper = new Swiper(".js_swiper", {
  loop: true,
  speed: 800,
  mousewheel: true,
  // direction: "vertical",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
