"use strict";

;

(function () {
  /* counter */
  var h = 10,
      m = 47,
      s = 23;
  var hEl = document.querySelectorAll('.counter__h');
  var mEl = document.querySelectorAll('.counter__m');
  var sEl = document.querySelectorAll('.counter__s');

  function nextTick() {
    s--;

    if (s < 0) {
      s = 59;
      m--;

      if (m < 0) {
        m = 59;
        h--;
      }
    }

    function hchange(item) {
      item.innerHTML = h < 10 ? '0' + h : h;
    }

    function mchange(item) {
      item.innerHTML = m < 10 ? '0' + m : m;
    }

    function schange(item) {
      item.innerHTML = s < 10 ? '0' + s : s;
    }

    hEl.forEach(hchange);
    mEl.forEach(mchange);
    sEl.forEach(schange);
  }

  setInterval(nextTick, 1000);
  /* СЛАЙДЕР */

  tns({
    container: '.slider-tovar',
    items: 1,
    controlsText: ['', ''],
    controlsContainer: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayText: ['', ''],
    navPosition: 'bottom'
  });
  tns({
    container: '.slider',
    items: 1,
    controlsText: ['', ''],
    controlsContainer: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayText: ['', ''],
    navPosition: 'bottom'
  });
})();