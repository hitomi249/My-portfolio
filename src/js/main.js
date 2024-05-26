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

//
const header = document.querySelector(".js_header");
let prevY = window.scrollY; // 前回のスクロール位置を初期化

window.addEventListener("scroll", () => {
  const currentY = window.scrollY; // 現在のスクロール位置を取得
  if (currentY < prevY || currentY <= 0) {
    // 上にスクロールしている場合またはスクロール位置が0以下の場合（バウンススクロール）
    header.classList.remove("hidden"); // hiddenクラスを削除して表示する
  } else {
    // 下にスクロールしている場合
    header.classList.add("hidden"); // hiddenクラスを追加して非表示にする
  }
  prevY = currentY; // 前回のスクロール位置を更新
});
