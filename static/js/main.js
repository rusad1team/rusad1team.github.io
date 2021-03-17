"use strict";

// $(document).ready(preloderFunction());
// function preloderFunction() {
//     setTimeout(function() {
//         // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)
//         // Model 1 - Fast            
//         document.getElementById("page-top").scrollIntoView();
//         // Model 2 - Smooth             
//         // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
//         // Removing Preloader:
//         $('#ctn-preloader').addClass('loaded');  
//         // Once the preloader has finished, the scroll appears 
//         $('body').removeClass('no-scroll-y');
//         if ($('#ctn-preloader').hasClass('loaded')) {
//             // It is so that once the preloader is gone, the entire preloader section will removed
//             $('#preloader').delay(1000).queue(function() {
//                 $(this).remove();
//             });
//         }
//     }, 1500);
// }
$(document).ready(function () {
  //типо анимация 
  document.addEventListener('mousemove', function (e) {
    return parallax(e);
  });

  var parallax = function parallax(e) {
    document.querySelectorAll('.layer').forEach(function (layer) {
      var speed = layer.getAttribute('data-speed');
      var x = (window.innerWidth - e.pageX * speed) / 150;
      var y = (window.innerHeight - e.pageY * speed) / 150;
      layer.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    });
  }; //sadwich


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
      $('.header-info .social-icon').fadeToggle();
    });
  };

  sanwichToggle(); //skill bar

  if ($('.s-banner').attr("skill")) {
    var skillBar = $('.range-item__progress');
    $(window).on('scroll', function () {
      var SkillLocation = $("#s-range").offset().top;
      var scrollLocation = $(this).scrollTop();
      skillBar.each(function () {
        if (SkillLocation - 400 <= scrollLocation) {
          $(this).find('.inner-skill-bar').animate({
            width: $(this).attr('data-percent')
          }, 1500);
        }
      });
    });
  } //popup title 


  $('.popup-with-form').on('click', function () {
    var title = $(this).attr("title-popup");

    if ($(this).attr("title-popup")) {
      $('.popup-title-in').text(title);
    } else {
      $('.popup-title-in').text('получите кофемашину');
    }
  }); //form-popup

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
  });
  $('.ok-btn').on("click", function () {
    $.magnificPopup.close();
  }); //sliders
  //индекс баннер слайдер

  $('.banner-slider').slick({
    arrows: false,
    fade: true,
    lazyLoad: 'ondemand',
    dots: true,
    autoplay: false //adaptiveHeight: true,

  });
  $('.js-slider-choose').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 500,
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
  }); //главная отзывы клиентов    

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
  }); //слайдер страница бренд клиенты

  $('.client-slider').slick({
    arrows: false,
    dots: true,
    autoplay: false
  }); //бренд упаковка на выбор

  $('.pac').slick({
    mobileFirst: true,
    arrows: false,
    adaptiveHeight: true,
    dots: true,
    responsive: [{
      breakpoint: 790,
      settings: "unslick",
      slidesToShow: 1,
      arrows: false
    }]
  }); //validate

  var selector = document.querySelectorAll('input[type="tel"]');
  var tel = new Inputmask("+7 (999) 999-99-99");
  tel.mask(selector);

  var validateForms = function validateForms(selector, rules, succesModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        tel: "Введите корректный номер"
      },
      submitHandler: function submitHandler(form) {
        $(form).children('.form2-popup__wrapper').hide();
        $(form).children('.ok').show();
        var formData = new FormData(form);
        var path = window.location.pathname === "/" ? "/index" : window.location.pathname;
        formData.append("question", path);
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('отправлено');
            }
          }
        };

        xhr.open('POST', '/request', true);
        xhr.send(formData);
        form.reset();
      }
    });
  };

  validateForms('#form1', {
    tel: {
      required: true,
      strength: {
        custom: '[^_]$'
      }
    }
  });
  validateForms('#form2', {
    tel: {
      required: true,
      strength: {
        custom: '[^_]$'
      }
    }
  });

  if ($('.s-banner').attr("banner")) {
    validateForms('#form3', {
      tel: {
        required: true,
        strength: {
          custom: '[^_]$'
        }
      }
    });
  }

  ;
});
$(window).on('resize orientationchange', function () {
  $('.js-slider-choose, .sort-bottom__js, .sort-top__js, .pac').slick('resize');
}); //главная рассчитать кол-во кофе

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