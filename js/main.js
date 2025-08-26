const swiperHeader = new Swiper(".header__swiper", {
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const swiperNew = new Swiper(".new__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // настройки для разных размеров экрана
    // для экранов меньше 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // для экранов меньше 768px
    744: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // для экранов меньше 576px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

const openBtnHeader = document.getElementById("popup-btn");
const closeBtnHeader = document.getElementById("closePupup");
const pupup = document.getElementById("pupup");

openBtnHeader.addEventListener("click", () => {
  pupup.classList.add("open");
});

closeBtnHeader.addEventListener("click", () => {
  pupup.classList.remove("open");
});

document.querySelectorAll(".menu__link").forEach((a) => {
  a.addEventListener("click", (evnt) => {
    document.querySelectorAll(".menu__item").forEach((item) => {
      if (item.querySelector(".menu__link") !== a) {
        item.classList.remove("open__dropdown");
      }
    });
    event.isClick = true;
    a.parentElement.classList.toggle("open__dropdown");
  });
});

document.body.addEventListener("click", (event) => {
  if (
    event._isClick == true ||
    event.target.classList.contains("menu__link") == true ||
    event.target.classList.contains("dropdown__links") == true
  )
    return;
  document.querySelectorAll(".menu__item").forEach((item) => {
    item.classList.remove("open__dropdown");
  });
});

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
