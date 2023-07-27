import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document).ready(function () {
  $(".testimonials__slider").slick({
    slidesToShow: 1,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    customPaging: function (slider, i) {
      return "<span></span>";
    },
    appendDots: $(".testimonials__dots"),
    prevArrow: $(".arrow__prev"),
    nextArrow: $(".arrow__next"),
  });
});

document.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  const menuIcon = e.target.closest(".icon-menu");
  if (!menuIcon) return;
  document.documentElement.classList.toggle("menu-open");
}

const header = document.querySelector(".header__top");

function stickHeader() {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

window.addEventListener("scroll", stickHeader);

function updateTestimonials() {
  const dots = document.querySelector(".testimonials__dots");
  const testimonialsContainer = document.querySelector(
    ".testimonials__container"
  );
  const testimonialsContent = document.querySelector(".testimonials__content");
  if (window.innerWidth < 992) {
    dots.remove();
    testimonialsContainer.insertAdjacentElement("beforeend", dots);
  } else {
    dots.remove();
    testimonialsContent.insertAdjacentElement("beforeend", dots);
  }
}

updateTestimonials();

window.addEventListener("resize", updateTestimonials);
