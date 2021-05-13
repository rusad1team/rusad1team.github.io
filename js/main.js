"use strict";

$(document).ready(function () {
  //sandwich
  var sanwichToggle = function sanwichToggle() {
    $('.sandwich').on('click', function () {
      $('.nav-overlay').fadeToggle('fast');
      $(this).toggleClass('is-active');
      $('.content').toggleClass('content--active');
    });
    $(window).resize(function () {
      if ($(window).width() <= 1100) {
        var btnCategories = $(".sandwich"); // указываем кнопку

        var categories = $(".nav-overlay");
        $(document).mouseup(function (e) {
          // событие клика по веб-документу
          if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 && // если клик был не по нашему блоку
          !categories.is(e.target) && categories.has(e.target).length === 0 // и не по его дочерним элементам
          ) {
              categories.fadeOut(); // скрываем его

              $('.sandwich').removeClass('is-active');
              $('.content').removeClass('content--active');
            }
        });
      }

      ;

      if ($(window).width() > 1100 && $('.nav-overlay').attr('style')) {
        $('.nav-overlay').removeAttr('style');
        $('.sandwich').removeClass('is-active');
      }

      ;

      if ($(window).width() > 1101) {
        $('.content').removeClass('content--active');
      }

      ;
    });
  };

  sanwichToggle(); //scroll 

  $('.scroll-btn').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 60;
    jQuery("html:not(:animated), body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  }); //faq
  // $('.faq-item__header').on('click', function() {
  //     $(this).next().slideToggle();
  // })
  //accordion

  var accordion = document.querySelector('.faq-content');
  var acItems = document.querySelectorAll('.faq-item');
  acItems.forEach(function (item) {
    var headTitle = item.querySelector('.faq-item__header');
    headTitle.addEventListener('click', function (e) {
      var opened_item = accordion.querySelector('.is-open'); //toggle current item

      toggle_item(item); //закрыть другие открытые вкладки

      if (opened_item && opened_item !== item) {
        toggle_item(opened_item);
      }
    });
  });

  var toggle_item = function toggle_item(item) {
    var body = item.querySelector('.faq-item__body');
    var content = item.querySelector('.faq-item__content');

    if (item.classList.contains('is-open')) {
      body.removeAttribute('style');
      item.classList.remove('is-open');
    } else {
      body.style.height = body.scrollHeight + 'px';
      item.classList.add('is-open');
    }
  }; //accordion quality


  if ($(window).width() <= 768) {
    $('.qyality-item').on('click', function () {
      $(this).find('.descr').slideToggle();
      $(this).find('.title').toggleClass('qya--active');
    });
  }

  ; //sliders

  $('.rev-slider').slick({
    dots: false,
    prevArrow: $('.rev-nav__prev'),
    nextArrow: $('.rev-nav__next')
  });
  $('.sorts-wrap').slick({
    mobileFirst: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 769,
      settings: "unslick"
    }]
  });
  $('.profi-items').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 800,
      settings: "unslick"
    }, {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  }); //popup

  function popupAct() {
    var popupBtn = document.querySelectorAll('.popup-btn'); //включить, выключить по клику

    for (var i = 0; i < popupBtn.length; i++) {
      popupBtn[i].addEventListener('click', function () {
        document.querySelector('.popup-over').classList.toggle('popup-active');

        if (overFlow.classList.contains('popup-active')) {
          overFlow.addEventListener('click', function () {
            if (!popUp.contains(event.target)) {
              overFlow.classList.remove('popup-active');
            }
          });
        }
      });
    }
  }

  $('.close-me').on('click', function () {
    $('.popup-over').removeClass('popup-active');
  });
  popupAct();
  var popUp = document.querySelector('.popup');
  var overFlow = document.querySelector('.popup-over'); //validation

  var selector = document.querySelectorAll('input[type="tel"]');
  var tel = new Inputmask("+7 (999) 999-99-99");
  tel.mask(selector);

  var validateForms = function validateForms(selector, rules, succesModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        tel: "Введите корректный номер",
        email: 'My custom message about error (one error message for all rules)'
      },
      submitHandler: function submitHandler(form) {
        if ($(form).hasClass('popup-form')) {
          $(form).children('.form-wrapper').hide();
          $(form).children('.ok').show();
        } else if ($(form).hasClass('form-email')) {
          $('.pop-email').addClass('popup-active');
          $('.close-me').on('click', function () {
            $('.pop-email').removeClass('popup-active');
          });
        } else {
          $('.ok-pop').addClass('popup-active');
          $('.close-me').on('click', function () {
            $('.ok-pop').removeClass('popup-active');
          });
        }

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
  validateForms('#form3', {
    tel: {
      required: true,
      strength: {
        custom: '[^_]$'
      }
    }
  });
  validateForms('#form4', {
    tel: {
      required: true,
      strength: {
        custom: '[^_]$'
      }
    }
  });
  validateForms('#form5', {
    email: {
      required: true,
      email: true
    }
  });
});