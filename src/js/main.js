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


/*swiper*/ 
const swiper = new Swiper(".js_swiper", {
  loop: true, // ループ
  speed: 1000, // 少しゆっくり(デフォルトは300)
  mousewheel: true, // マウスホイールでスライド
  direction: "vertical", // 縦方向
  autoplay: { // 自動再生
    delay: 8000, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});