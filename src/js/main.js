"use static";

/*GSAP*/
gsap.config({
  nullTargetWarn: false,
});

/*ハンバーガーメニュー*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

const navLinks = document.querySelectorAll(".l_header_nav_link");
console.log(navLinks);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navigation.classList.remove("is-active");
    body.classList.remove("is-active");
  });
});

/*スライドショー*/
// let mySwiper, mySlidesPerView;
// let isInited = false;
// const slideLength = document.querySelectorAll(".swiper-slide").length;

// const breakpoints = [
//   // {
//   //   breakpoint: 0,
//   //   slidesPerView: 1,
//   // },
//   {
//     breakpoint: 600,
//     slidesPerView: 2,
//   },
//   {
//     breakpoint: 980,
//     slidesPerView: 3,
//   },
// ];
// breakpoints.reverse();

// const checkBreakpoint = () => {
//   for (let key in breakpoints) {
//     let bp = breakpoints[key]["breakpoint"];
//     if (window.matchMedia("(min-width:" + bp + "px)").matches) {
//       mySlidesPerView = breakpoints[key]["slidesPerView"];
//       break;
//     }
//   }

//   if (slideLength > mySlidesPerView) {
//     if (!isInited) {
//       initSwiper();
//       isInited = true;
//     }
//   } else {
//     if (isInited) {
//       mySwiper.destroy(false, true);
//       isInited = false;
//     }
//   }
// };

// const initSwiper = () => {
//   mySwiper = new Swiper(".js_swiper", {
//     slidesPerView: 1,
//     spaceBetween: 16,
//     loop: true,
//     loopAdditionalSlides: 1,
//     speed: 1000,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     grabCursor: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       600: {
//         slidesPerView: 2,
//         spaceBetween: 40,
//       },
//       980: {
//         slidesPerView: 3,
//         spaceBetween: 56,
//       },
//     },
//   });
// };

// window.addEventListener("resize", function () {
//   checkBreakpoint();
// });
// checkBreakpoint();


