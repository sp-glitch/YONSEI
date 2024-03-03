$(function () {
  feather.replace();

  const search = document.querySelector(".search");
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");

  btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
  });

  $(".ht_left>ul>li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".ht_left>ul>li").eq(idx).addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");
  });

  $(".gnb>ul>li>a").on("click", function (e) {
    let find = $(this).parent().siblings().find(".sub");
    if ($(".gnb").hasClass("on")) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      find.stop().slideUp();
      $(".sub").toggleClass("on");
    }
  });

  $(".sub_wrap>li>a").on("click", function (e) {
    let pin = $(this).parent().siblings().find(".sub_list").stop().slideUp();
    if ($(".sub_wrap").hasClass("on")) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find(".sub_list").stop().slideUp();
      $(".sub_wrap>li").addClass("on").siblings().removeClass("on");
      // $('.sub>li').toggleClass('on');
    }
  });

  $(window).on("resize", function () {
    $(".gnb").removeClass("on");
  });

  $(".sub_wrap").on("wheel", function (e) {
    if ($(this).hasClass("on")) {
      e.preventDefault();
    }
  });

  var swiper = new Swiper(".main_slide .main_slide_inner", {
    spaceBetween: 30,
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },

    pagination: {
      el: ".main_slide .swiper-pagination",
      clickable: true,
    },
  });

  $(".info_notice_btn .notice_btn").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".info_list .info_notice_list")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".news_list_wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: true,
    dots: true,

    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

  $(window).on("resize", function () {
    $(".news_list_wrap").slick("resize");
  });

  $(".main_focus .focus_right").slick({
    arrows: false,
    fade: true,
    asNavFor: ".main_focus .focus_left",
  });

  $(".main_focus .focus_left").slick({
    arrows: false,
    fade: true,
    asNavFor: ".main_focus .focus_right",
  });

  $(".main_focus .slide_btn_l").on("click", function () {
    $(".main_focus .focus_right").slick("slickPrev");
  });

  $(".main_focus .slide_btn_r").on("click", function () {
    $(".main_focus .focus_right").slick("slickNext");
  });

  const MAIN_SNS_SLIDE = new Swiper(".sns_slide_wrap", {
    loop: true,
    slideActiveClass: "on",
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const MAIN_CONTENT_SNS_BUTTON =
    document.querySelectorAll(".sns_arrows button");

  MAIN_CONTENT_SNS_BUTTON[0].addEventListener("click", () => {
    MAIN_SNS_SLIDE.slidePrev();
  });
  MAIN_CONTENT_SNS_BUTTON[1].addEventListener("click", () => {
    MAIN_SNS_SLIDE.slideNext();
  });
});
