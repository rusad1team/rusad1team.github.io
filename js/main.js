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
  var overFlow = document.querySelector('.popup-over');
});