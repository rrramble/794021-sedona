//
// Скрипты для проекта "Sedona"
//

var form = document.querySelector(".find-hotel form");

// Объект и обработчик нажатия на кнопку 'показать форму'
var btnShow = document.querySelector(".btn-header");
btnShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-closed");
});

