
if (document.querySelector('.booking__custom-select')) {

document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.booking__custom-select');

    selects.forEach(function (select) {
        const trigger = select.querySelector('.booking__custom-trigger');
        const valueText = select.querySelector('.booking__custom-value');
        const hiddenInput = select.querySelector('input[type="hidden"]');
        const options = select.querySelectorAll('.booking__custom-option');

        function openSelect() {
            // Закрываем остальные списки
            selects.forEach(function (item) {
                if (item !== select) {
                    item.classList.remove('is-open');
                    item.querySelector('.booking__custom-trigger')
                        .setAttribute('aria-expanded', 'false');
                }
            });

            select.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        }

        function closeSelect() {
            select.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
        }

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();

            select.classList.contains('is-open')
                ? closeSelect()
                : openSelect();
        });

        options.forEach(function (option) {
            option.addEventListener('click', function () {
                options.forEach(function (item) {
                    item.classList.remove('is-selected');
                });

                option.classList.add('is-selected');
                valueText.textContent = option.textContent;
                hiddenInput.value = option.dataset.value;

                hiddenInput.dispatchEvent(
                    new Event('change', { bubbles: true })
                );

                closeSelect();
            });
        });
    });

    // Закрытие по клику вне списков
    document.addEventListener('click', function () {
        selects.forEach(function (select) {
            select.classList.remove('is-open');
            select.querySelector('.booking__custom-trigger')
                .setAttribute('aria-expanded', 'false');
        });
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            selects.forEach(function (select) {
                select.classList.remove('is-open');
                select.querySelector('.booking__custom-trigger')
                    .setAttribute('aria-expanded', 'false');
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const clearButton = document.querySelector('.booking__form_clear');
    if (!clearButton) return;

    clearButton.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.booking__custom-select').forEach(function (select) {
            const trigger = select.querySelector('.booking__custom-trigger');
            const valueText = select.querySelector('.booking__custom-value');
            const hiddenInput = select.querySelector('input[type="hidden"]');
            const options = select.querySelectorAll('.booking__custom-option');
            const defaultOption = select.querySelector('.booking__custom-option[data-value="1"]');

            select.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
            options.forEach(option => option.classList.remove('is-selected'));

            if (defaultOption) {
                defaultOption.classList.add('is-selected');
                valueText.textContent = defaultOption.textContent;
                hiddenInput.value = defaultOption.dataset.value;
            }
        });

        document.querySelectorAll('.booking__date-real').forEach(function (dateInput) {
            dateInput.value = '';
            dateInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });
});



}




/*==========МОДАЛКА ОСТАВИТЬ ЗАЯВКУ================*/


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('orderModal');
    const overlay = modal.querySelector('.order-modal__overlay');
    const closeButton = modal.querySelector('.order-modal__close');
    const orderButtons = document.querySelectorAll('.order');
    function openModal() {
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    }
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
    orderButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            openModal();
        });
    });
    closeButton.addEventListener('click', function () {
        closeModal();
    });
    overlay.addEventListener('click', function () {
        closeModal();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('orderModal2');
    const overlay = modal.querySelector('.order-modal2__overlay');
    const closeButton = modal.querySelector('.order-modal2__close');
    const orderButtons = document.querySelectorAll('.order');
    function openModal() {
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    }
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
    orderButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            openModal();
        });
    });
    closeButton.addEventListener('click', function () {
        closeModal();
    });
    overlay.addEventListener('click', function () {
        closeModal();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});



window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});







if (document.querySelector('.mapsec_mainpage_content_map')) {

function init() {
    const coords = [44.605791, 33.451707];

    const map = new ymaps.Map('map', {
        center: coords,
        zoom: 17,
        controls: [
          'zoomControl',
    'geolocationControl',
    'fullscreenControl',
    'typeSelector'
        ] // отключаем стандартные контролы
    }, {
        suppressMapOpenBlock: true
    });

    var svgIcon = `
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1671 27.315C16.1671 30.3931 17.4132 33.1822 19.4327 35.1978C21.4483 37.2134 24.2374 38.4634 27.3155 38.4634C30.3936 38.4634 33.1788 37.2173 35.1983 35.1978C37.2139 33.1822 38.4639 30.3931 38.4639 27.315C38.4639 24.2369 37.2178 21.4517 35.1983 19.4322C33.1827 17.4166 30.3936 16.1666 27.3155 16.1666C24.2374 16.1666 21.4483 17.4127 19.4327 19.4322C17.4171 21.4478 16.1671 24.2369 16.1671 27.315ZM45.8974 49.925C51.0029 42.9562 54.624 35.292 54.624 27.312C54.624 19.7729 51.5654 12.945 46.624 8C41.6826 3.0586 34.854 0 27.312 0C19.7729 0 12.945 3.0586 8 8C3.0547 12.9414 0 19.77 0 27.312C0 35.2925 3.6211 42.957 8.7266 49.925C13.6836 56.6867 20.0466 62.8 25.7886 67.866C26.6402 68.6277 27.9448 68.6472 28.8238 67.8738C34.5621 62.8074 40.9328 56.6938 45.8898 49.9288L45.8974 49.925ZM38.4404 38.437C35.5927 41.2847 31.6592 43.0464 27.3154 43.0464C22.9716 43.0464 19.0381 41.2847 16.1904 38.437C13.3427 35.5893 11.581 31.6558 11.581 27.312C11.581 22.9682 13.3427 19.0347 16.1904 16.187C19.0381 13.3393 22.9716 11.5776 27.3154 11.5776C31.6592 11.5776 35.5927 13.3393 38.4404 16.187C41.2881 19.0347 43.0498 22.9682 43.0498 27.312C43.0498 31.6558 41.2881 35.5893 38.4404 38.437Z" fill="#25594C"/>
</svg>
    `;

    var placemark = new ymaps.Placemark(
        coords,
        {
            
        },
        {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgIcon),
            iconImageSize: [54, 68],
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

    
}

ymaps.ready(init);

}









document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.header_content_navlist_list_item_more');
    if (!menu) return;

    const trigger = menu.querySelector('.header_content_navlist_more_btn');
    const close = menu.querySelector('.header_content_navlist_dropdown_close');
    let closeTimer = null;

    function openMenu() {
        clearTimeout(closeTimer);
        menu.classList.add('is-open');
    }

    function closeMenu() {
        clearTimeout(closeTimer);
        menu.classList.remove('is-open');
    }

    menu.addEventListener('mouseenter', openMenu);

    menu.addEventListener('mouseleave', function () {
        closeTimer = setTimeout(closeMenu, 100);
    });

    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        menu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    close.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });

    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
});








document.querySelectorAll('form[id^="bookingForm"]').forEach(form => {
    const checkin = form.querySelector('[name="checkin"]');
    const checkout = form.querySelector('[name="checkout"]');
    const guests = form.querySelector('[name="guests"]');

    if (!checkin || !checkout) return;

    // Минимальная дата — сегодня
    const today = new Date();
    const todayString = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0')
    ].join('-');

    checkin.min = todayString;
    checkout.min = todayString;

    // Обновление минимальной даты выезда
    checkin.addEventListener('change', () => {
        checkout.min = checkin.value || todayString;

        if (checkout.value && checkout.value <= checkin.value) {
            const nextDay = new Date(checkin.value + 'T12:00:00');
            nextDay.setDate(nextDay.getDate() + 1);

            checkout.value = [
                nextDay.getFullYear(),
                String(nextDay.getMonth() + 1).padStart(2, '0'),
                String(nextDay.getDate()).padStart(2, '0')
            ].join('-');

            checkout.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

    // Отправка формы
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!checkin.value || !checkout.value) {
            alert('Выберите даты заезда и выезда.');
            return;
        }

        if (checkout.value <= checkin.value) {
            alert(checkout.value === checkin.value
                ? 'Дата выезда не может совпадать с датой заезда.'
                : 'Дата выезда должна быть позже даты заезда.');
            return;
        }

        const params = new URLSearchParams({
            checkin: checkin.value,
            checkout: checkout.value,
            guests: guests ? guests.value : ''
        });

        window.location.href = '/search?' + params.toString();
    });
});

// Открытие календаря по клику на поле
document.querySelectorAll('.booking__date-wrap').forEach(wrap => {
    const input = wrap.querySelector('.booking__date-real');
    if (!input) return;

    wrap.addEventListener('click', () => {
        if (typeof input.showPicker === 'function') {
            try {
                input.showPicker();
            } catch (error) {
                input.focus();
            }
        } else {
            input.focus();
        }
    });
});

// Отображение выбранной даты в формате ДД.ММ.ГГГГ
document.querySelectorAll('.booking__date-real').forEach(input => {
    const wrap = input.closest('.booking__date-wrap');
    const placeholder = wrap.querySelector('.booking__date-placeholder');

    if (!placeholder) return;

    function updateDate() {
        if (!input.value) {
            placeholder.textContent = 'ДД.ММ.ГГГГ';
            return;
        }

        const [year, month, day] = input.value.split('-');
        placeholder.textContent = `${day}.${month}.${year}`;
    }

    input.addEventListener('input', updateDate);
    input.addEventListener('change', updateDate);

    updateDate();
});







Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: [
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "close"
                ]
            }
        },
        Thumbs: {
            autoStart: true
        }
    });






$('.imaginesec_mainpage_content_list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: true,
  variableWidth: false,
  dots: false,
  speed: 500,
  autoplay: true
});