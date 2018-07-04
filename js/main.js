//
// Скрипты для проекта "Sedona"
//

// Сохранить объект формы поиска
var form = document.querySelector(".find-hotel form");

// Сохранить объекты полей ввода данных
var dateCheckin = form.querySelector("#date-checkin");
var dateCheckout = form.querySelector("#date-checkout");
var adults = form.querySelector("#adults");
var children = form.querySelector("#children");

// Сохранить объект кнопки 'Отправить'
var btnSubmit = form.querySelector("button[type='submit']");

// Объект и обработчик нажатия на кнопку 'показать форму'
var btnShow = document.querySelector(".btn-header");
btnShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-closed");
});

// Обработчик нажатия кнопка "click" на кнопке отправления формы
btnSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();

  // Проверка заполненности поля 'Дата въезда
  if (!dateCheckin.value) {
    dateCheckin.classList.add("shake");
  };

  // Проверка заполненности поля 'Дата выезда'
  if (!dateCheckout.value) {
  evt.preventDefault();
    dateCheckout.classList.add("shake");
  };

  // Проверка заполненности поля 'Взрослые'
  if (!adults.value) {
  evt.preventDefault();
    adults.classList.add("shake");
  };

  // Проверка заполненности поля 'Дети'
  if (!children.value) {
  evt.preventDefault();
    children.classList.add("shake");
  };

});


/*
 * Удаление класса 'shake' после окончания анимации по классу 'shake'
 */

dateCheckin.addEventListener("animationend", function () {
  dateCheckin.classList.remove("shake");
});

dateCheckout.addEventListener("animationend", function () {
  dateCheckout.classList.remove("shake");
});

adults.addEventListener("animationend", function () {
  adults.classList.remove("shake");
});

children.addEventListener("animationend", function () {
  children.classList.remove("shake");
});
