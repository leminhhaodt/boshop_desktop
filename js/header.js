$(document).ready(function () {
  $(".banner-first").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 650,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1100,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    lazyLoad: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // Show cart
  $("#cart").hide();
  $("#showCart").click(function (e) {
    e.preventDefault();
    $("#cart").toggle(250);
  });

  $("#close-cart").click(function () {
    $("#cart").hide();
  });

  // Header menu fixed scroll
  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const header = $("#header");
  const headerTop = header && header.offset().top;
  $(window).scroll(
    debounceFn(function () {
      const windowScroll = $(window).scrollTop();
      if (windowScroll > headerTop) {
       header.addClass("fixed");
        $(".header__container").css("align-items", "center");
        $(".header-search__list").hide("fixed");
        $("#menuCategory").css("top", "calc(100% - 10px)");
      } else {
       header.removeClass("fixed");
        $(".header-search__list").show("fixed");
        $(".header__container").removeAttr("style");
        $("#menuCategory").css("top", "calc(100% - 28px)");
      }
    }, 50)
  );

  // Icon Bars and Close
  $("#icon-close").hide();
  $("#menuCategory").hide();
  buttonShow = 1;
  $(".header-logo__icon").click(function () {
    if (buttonShow === 1) {
      $("#icon-bars").hide();
      $("#icon-close").show();
      $("#menuCategory").show();
      buttonShow = 2;
    } else {
      $("#icon-bars").show();
      $("#icon-close").hide();
      $("#menuCategory").hide();
      buttonShow = 1;
    }
  });

  // Menu Category Content
  $(".menuCategory-content").hide();
  $(".menuCategory-list__link").click(function (e) {
    e.preventDefault();
    index = $(".menuCategory-list__link").index(this);
    $(".menuCategory-list__link").removeClass("active");
    $(this).addClass("active");

    $(".menuCategory-list__link img:last-child").removeClass("show");
    $(this).children("img:last-child").addClass("show");
    $(".menuCategory-content").hide();
    $(".menuCategory-content").eq(index).show();
  });
  $(".menuCategory-content ul li a").click(function (e) {
    e.preventDefault();
  });
});
