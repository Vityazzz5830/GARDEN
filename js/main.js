const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;

    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});


$('.examplessec_mainpage_content_slider_japan').slick({
  slidesToShow: 5.5,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  prevArrow: $('.arrowleft_auto_japan'),
  nextArrow: $('.arrowright_auto_japan')
});

$('.examplessec_mainpage_content_slider_china').slick({
  slidesToShow: 5.5,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  prevArrow: $('.arrowleft_auto_china'),
  nextArrow: $('.arrowright_auto_china')
});

$('.kvizsec_mainpage_content_main_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,      
  fade: true,
  dots: false,
  infinite: false,
  variableWidth: false,
  swipe: false         
});

$(document).ready(function () {

  const $slidert = $('.kvizsec_mainpage_content_main_slider');
  const $progresst = $('.kviz-progress');

  function format(num) {
    return num < 10 ? '0' + num : num;
  }

  $slidert.on('init reInit afterChange', function (event, slick, currentSlide) {

    const current = (currentSlide !== undefined ? currentSlide : 0) + 1;
    const total = slick.slideCount;

    const percent = (current / total) * 100;

    $progresst.find('.kviz-progress-current').text(format(current));
    $progresst.find('.kviz-progress-total').text(format(total));
    $progresst.find('.kviz-progress-fill').css('width', percent + '%');
  });

});

$('.kvizsec_mainpage_content_main_slider_modal').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,      
  fade: true,
  dots: false,
  infinite: false,
  variableWidth: false,
  swipe: false    
});

$(document).ready(function () {

  const $sliderm = $('.kvizsec_mainpage_content_main_slider_modal');
  const $progressm = $('.kviz-progress-modal');

  function format(num) {
    return num < 10 ? '0' + num : num;
  }

  $sliderm.on('init reInit afterChange', function (event, slick, currentSlide) {

    const currentm = (currentSlide !== undefined ? currentSlide : 0) + 1;
    const totalm = slick.slideCount;

    const percentm = (currentm / totalm) * 100;

    $progressm.find('.kviz-progress-modal-current').text(format(currentm));
    $progressm.find('.kviz-progress-modal-total').text(format(totalm));
    $progressm.find('.kviz-progress-modal-fill').css('width', percentm + '%');
  });

});




$('.casessec_mainpage_content_big_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: false,
  prevArrow: $('.casessec_mainpage_content_big_slider_buttons_arrowleft'),
  nextArrow: $('.casessec_mainpage_content_big_slider_buttons_arrowright')
});

$(document).ready(function () {

  const $slider = $('.casessec_mainpage_content_big_slider');
  const $counter = $('.casessec_mainpage_content_big_slider_count');

  function formatNumber(num) {
    return num < 10 ? '0' + num : num;
  }

  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    const current = (currentSlide !== undefined ? currentSlide : 0) + 1;
    const total = slick.slideCount;

    $counter.html(
      formatNumber(current) + '<b>' + formatNumber(total) + '</b>'
    );
  });

});


if (document.querySelector('.firstsec_contactspage_content_map')) {

function init() {
    const coords = [43.104162, 131.952152];

    const map = new ymaps.Map('map', {
        center: coords,
        zoom: 16,
        controls: [] // отключаем стандартные контролы
    }, {
        suppressMapOpenBlock: true
    });

    var svgIcon = `
        <svg width="35" height="45" viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 0
                     C15 0 0 15 0 35
                     C0 60 35 90 35 90
                     C35 90 70 60 70 35
                     C70 15 55 0 35 0Z"
                  fill="#ff0000"/>
            <circle cx="35" cy="35" r="12" fill="white"/>
        </svg>
    `;

    var placemark = new ymaps.Placemark(
        coords,
        {
            balloonContent: "ул. Ватутина, д. 4а, кв. 318",
            iconContent: "ул. Ватутина, д. 4а, кв. 318"
        },
        {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgIcon),
            iconImageSize: [35, 45],
            iconImageOffset: [-17.5, -45],
            iconContentOffset: [135, 5],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div style="\
                    display:inline-block;\
                    background:#ffffff;\
                    padding:6px 10px;\
                    border-radius:6px;\
                    font-size:13px;\
                    font-weight:500;\
                    white-space:nowrap;\
                    box-shadow:0 2px 6px rgba(0,0,0,0.2);\
                    border:1px solid rgba(0,0,0,0.1);\
                    transform:translateX(-50%);\
                ">\
                    $[properties.iconContent]\
                </div>'
            )
        }
    );

    map.geoObjects.add(placemark);

    // Кастомные кнопки
    document.getElementById('zoom-in').addEventListener('click', function() {
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom + 1, {duration: 300});
    });

    document.getElementById('zoom-out').addEventListener('click', function() {
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom - 1, {duration: 300});
    });
}

ymaps.ready(init);



}




document.addEventListener('click', function (e) {
  const select = e.target.closest('.select');

  // клик вне селекта — закрываем все
  if (!select) {
    document.querySelectorAll('.select.open')
      .forEach(s => s.classList.remove('open'));
    return;
  }

  // клик по шапке
  if (e.target.closest('.select__head')) {
    document.querySelectorAll('.select.open')
      .forEach(s => {
        if (s !== select) s.classList.remove('open');
      });

    select.classList.toggle('open');
  }

  // выбор пункта
  const item = e.target.closest('.select__item');
  if (item) {
    select.querySelector('.select__value').textContent = item.textContent;
    select.dataset.value = item.dataset.value;
    select.classList.remove('open');
  }
});



(function () {
  const KEY = 'pageScrollY';

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function isNormalReload() {
    const nav = performance.getEntriesByType('navigation')[0];
    return nav && nav.type === 'reload';
  }

  // сохраняем позицию
  window.addEventListener('beforeunload', () => {
    if (isNormalReload()) {
      sessionStorage.setItem(KEY, window.scrollY);
    } else {
      sessionStorage.removeItem(KEY);
    }
  });

  // максимально раннее восстановление
  if (isNormalReload()) {
    const y = sessionStorage.getItem(KEY);
    if (y !== null) {
      const pos = parseInt(y, 10);
      window.scrollTo(0, pos);
      requestAnimationFrame(() => window.scrollTo(0, pos));
    }
  }
})();







document.querySelectorAll(".faq-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // если нужно чтобы открывался только один пункт:
    document.querySelectorAll(".faq-item").forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});






document.querySelectorAll('[data-gallery]').forEach(gallery => {

  const mainImage = gallery.querySelector('.gallery-main-image');
  const thumbs = Array.from(gallery.querySelectorAll('.thumb'));
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');

  let isAnimating = false;

  function getCurrentIndex() {
    return thumbs.findIndex(t => t.classList.contains('active'));
  }

  function updateGallery(index) {
    if (isAnimating) return;
    isAnimating = true;

    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');

    mainImage.classList.add('is-animating');

    setTimeout(() => {
      mainImage.src = thumbs[index].src;

      requestAnimationFrame(() => {
        mainImage.classList.remove('is-animating');
      });

      setTimeout(() => {
        isAnimating = false;
      }, 250);

    }, 150);
  }

  // init
  if (getCurrentIndex() === -1 && thumbs.length) {
    thumbs[0].classList.add('active');
    mainImage.src = thumbs[0].src;
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateGallery(index));
  });

  prevBtn.addEventListener('click', () => {
    const current = getCurrentIndex();
    const next = current <= 0 ? thumbs.length - 1 : current - 1;
    updateGallery(next);
  });

  nextBtn.addEventListener('click', () => {
    const current = getCurrentIndex();
    const next = current >= thumbs.length - 1 ? 0 : current + 1;
    updateGallery(next);
  });

});




if (document.querySelector('.modal-overlay')) {

const btns = document.querySelectorAll('.modal_writebtn');
const modalOverlay = document.getElementById('modalOverlay');
const modal_cont = document.getElementById('modal_cont');
const closeBtn = document.getElementById('closeBtn_modal');
const formModalOrderBtn = document.querySelector('.form_modal_order_btn');

// Функция открытия модального окна
function openModal() {
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.classList.add('show');
  modal_cont.classList.add('show');
  document.body.classList.add('bodynosscroll');
}

// Функция закрытия модального окна
function closeModal() {
  modal_cont.classList.remove('show');
  modalOverlay.classList.remove('show');
  document.body.classList.remove('bodynosscroll');

  setTimeout(() => {
    modalOverlay.style.pointerEvents = 'none';
  }, 300);
}

// Открытие по любой кнопке .modal_order_btn
btns.forEach(button => {
  button.addEventListener('click', openModal);
});

// Закрытие по крестику
closeBtn.addEventListener('click', closeModal);


// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


}




/*

const $slider = $('.kvizsec_mainpage_content_main_slider');

$('.kvizsec_mainpage_content_main_slider_buttons_arrowright').on('click', function (e) {

  const currentSlide = $slider.slick('slickCurrentSlide');
  const $currentSlide = $($slider.find('.slick-slide')[currentSlide]);

  let isValid = true;

  // проверка select
  $currentSlide.find('.select').each(function () {
    const selected = $(this).attr('data-selected');
    if (!selected) {
      isValid = false;
      $(this).addClass('select--error');
    } else {
      $(this).removeClass('select--error');
    }
  });

  if (!isValid) {
    alert('Выберите пункт'); // или свой message
    return; // переход НЕ выполняется
  }

  // если все выбрано — листаем
  $slider.slick('slickNext');
});

$('.kvizsec_mainpage_content_main_slider_buttons_arrowleft').on('click', function () {
  $slider.slick('slickPrev');
});

$('.select__item').on('click', function () {
  const $select = $(this).closest('.select');
  const value = $(this).data('value');

  $select.attr('data-selected', value);
  $select.find('.select__value').text($(this).text());
  $select.removeClass('select--error');
});

*/

$(document).ready(function () {

  const $slider = $('.kvizsec_mainpage_content_main_slider');

  // Кнопка "Вперёд"
  $('.kvizsec_mainpage_content_main_slider_buttons_arrowright').on('click', function () {

    const currentSlide = $slider.slick('slickCurrentSlide');
    const $currentSlide = $($slider.find('.slick-slide')[currentSlide]);

    let isValid = true;

    $currentSlide.find('.select').each(function () {
      const $select = $(this);
      const selected = $select.attr('data-selected');

      // Удаляем предыдущую ошибку
      $select.find('.select__error').remove();

      if (!selected) {
        isValid = false;
        $select.addClass('select--error');

        // Добавляем всплывающее сообщение
        const $error = $('<div class="select__error">Выберите пункт!</div>');
        $select.append($error);
      } else {
        $select.removeClass('select--error');
      }
    });

    if (!isValid) return; // переход не выполняем

    // если все выбрано — листаем
    $slider.slick('slickNext');
  });

  // Кнопка "Назад"
  $('.kvizsec_mainpage_content_main_slider_buttons_arrowleft').on('click', function () {
    $slider.slick('slickPrev');
  });

  // При выборе элемента
  $('.select__item').on('click', function () {
    const $select = $(this).closest('.select');
    const value = $(this).data('value');

    $select.attr('data-selected', value);
    $select.find('.select__value').text($(this).text());
    $select.removeClass('select--error');
    $select.find('.select__error').remove();
  });

});





$(document).ready(function () {

  const $modalSlider = $('.kvizsec_mainpage_content_main_slider_modal');
  const $modalNextBtn = $('.kvizsec_mainpage_content_main_slider_modal_buttons_arrowright');
  const $modalPrevBtn = $('.kvizsec_mainpage_content_main_slider_modal_buttons_arrowleft');

  // Вперёд
  $modalNextBtn.on('click', function () {

    const currentSlide = $modalSlider.slick('slickCurrentSlide');
    const $currentSlide = $($modalSlider.find('.slick-slide')[currentSlide]);

    let isValid = true;

    $currentSlide.find('.select').each(function () {
      const $select = $(this);
      const selected = $select.attr('data-selected');

      // удаляем старое сообщение ошибки
      $select.find('.select__error').remove();

      if (!selected) {
        isValid = false;
        $select.addClass('select--error');

        // добавляем сообщение
        const $error = $('<div class="select__error">Выберите пункт</div>');
        $select.append($error);
      } else {
        $select.removeClass('select--error');
      }
    });

    if (!isValid) return; // переход блокируется

    // если всё ок — листаем
    $modalSlider.slick('slickNext');
  });

  // Назад
  $modalPrevBtn.on('click', function () {
    $modalSlider.slick('slickPrev');
  });

  // Выбор пункта select
  $currentSlide = null; // просто чтобы не пересекалось с прошлым слайдером
  $('.kvizsec_form .select__item').on('click', function () {
    const $select = $(this).closest('.select');
    const value = $(this).data('value');

    $select.attr('data-selected', value);
    $select.find('.select__value').text($(this).text());
    $select.removeClass('select--error');
    $select.find('.select__error').remove();
  });

});