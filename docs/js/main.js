"use static";

/*GSAP*/
gsap.config({
  nullTargetWarn: false,
});

gsap
  .timeline()
  .from(".js_kv_ttl", {
    duration: 1.2,
    autoAlpha: 0,
    y: 40,
  })
  .from(".js_header_ttl", {
    duration: 1.2,
    y: -70,
  })
  .from(".js_navigation, .js_hamburger", {
    duration: 0.6,
    x: 60,
  });

gsap.to(".about_strength_desc", {
  scrollTrigger: {
    trigger: ".about_strength_desc", // アニメーション開始のトリガー要素
    start: "top center", // アニメーション開始位置
    toggleClass: {
      targets: ".about_strength_desc", // クラスを切り替える対象の要素
      className: "is-active", // クラス名 "active" を付け外し
    },
  },
});

gsap.from(".js_skill", {
  y: 200,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".js_skill_trigger",
    start: "top center",
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
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

/*headerのスクロールで表示/非表示切り替え*/
const header = document.querySelector(".js_header");
let lastScrollTop = 0;
let ticking = false;

function updateHeaderVisibility() {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop < lastScrollTop || currentScrollTop <= 0) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }

  lastScrollTop = currentScrollTop;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeaderVisibility);
    ticking = true;
  }
});

/*背面固定*/
// let isMenuOpen = false;
// let scrollTopBeforeMenuOpen = 0;

// // メニューボタンがクリックされたときの処理
// hamburger.addEventListener("click", () => {
//   if (!isMenuOpen) {
//     // メニューを開くとき
//     scrollTopBeforeMenuOpen = window.scrollY; // メニューを開く前のスクロール位置を記録
//     body.style.overflow = "hidden"; // 背面スクロールを無効化
//     body.style.position = "fixed"; // 背面を固定
//     body.style.top = `-${scrollTopBeforeMenuOpen}px`; // スクロール位置を保持するために、bodyを上にオフセット
//     header.classList.add("hidden"); // ヘッダーを非表示にする
//     isMenuOpen = true;
//   } else {
//     // メニューを閉じるとき
//     body.style.overflow = ""; // 背面スクロールを有効化
//     body.style.position = ""; // 背面の固定を解除
//     body.style.top = ""; // 上方オフセットを削除
//     window.scrollTo(0, scrollTopBeforeMenuOpen); // メニューを開く前のスクロール位置に戻す
//     header.classList.remove("hidden"); // ヘッダーを再表示する
//     isMenuOpen = false;
//   }
// });

// メニュー項目がクリックされたときにもメニューを閉じる処理を追加することが一般的です。
