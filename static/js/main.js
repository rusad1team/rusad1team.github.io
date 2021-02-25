"use strict";

$(document).ready(function () {
  //sadwich
  if ($(window).width() < 1025) {
    var btnCategories = $(".sandwich"); // указываем кнопку

    var categories = $(".nav-overlay");
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 && // если клик был не по нашему блоку
      !categories.is(e.target) && categories.has(e.target).length === 0 // и не по его дочерним элементам
      ) {
          categories.fadeOut(); // скрываем его

          $('.sandwich-line').removeClass('sandwich--active');
          $('.content').removeClass('content--active');
        }
    });
  }

  var sanwichToggle = function sanwichToggle() {
    $('.sandwich').on('click', function () {
      $('.sandwich-line').toggleClass('sandwich--active');
      $('.nav-overlay').slideToggle('fast');
      $('.content').toggleClass('content--active');
    });
  };

  sanwichToggle(); //form-popup

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '.form-input__name',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function beforeOpen() {
        if ($(window).width() < 700) {
          this.st.focus = '.form-input__name';
        } else {
          this.st.focus = '.form-input__name';
        }
      }
    }
  });
  $('.popup-close').on("click", function () {
    $.magnificPopup.close();
  }); //sliders

  $('.banner-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    adaptiveHeight: true
  });
  $('.js-slider-choose').slick({
    mobileFirst: true,
    arrows: false,
    responsive: [{
      breakpoint: 480,
      settings: "unslick",
      slidesToShow: 1,
      arrows: false
    }]
  });
  $('.sort-top__js').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 790,
      settings: "unslick",
      slidesToShow: 1,
      arrows: false
    }]
  });
  $('.sort-bottom__js').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 790,
      settings: "unslick",
      slidesToShow: 1,
      arrows: false
    }]
  });
  $('.rev-slider-js').slick({
    centerMode: true,
    slidesToShow: 4,
    dots: false,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 2000,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 1100,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 950,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1,
        adaptiveHeight: true
      }
    }]
  });
});
$(window).on('resize orientationchange', function () {
  $('.js-slider-choose, .sort-bottom__js, .sort-top__js').slick('resize');
});
$(document).ready(function () {
  var $input = $("#range"),
      $output = $("#output"),
      $value = $("._value");

  if ($input.length) {
    var e = function e(t) {
      10 <= ($output[0].textContent = t) && ($value[0].textContent = "~ 5"), 16 <= t && ($value[0].textContent = "~ от 8"), t < 10 && ($value[0].textContent = "~ 3");
    };

    $input.on("change", function (t) {
      e(t.target.value);
    });
  }
});