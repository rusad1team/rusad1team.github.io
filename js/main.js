"use strict";

$(document).ready(function () {
  $('.rev-slider').slick({
    dots: false,
    prevArrow: $('.rev-nav__prev'),
    nextArrow: $('.rev-nav__next')
  });

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

  popupAct();
  var popUp = document.querySelector('.popup');
  var overFlow = document.querySelector('.popup-over'); //faq
  // $('.faq-item__header').on('click', function() {
  //     $(this).next().slideToggle();
  // })

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
  };
});