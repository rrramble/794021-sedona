    // Скрыть форму если JavaScript работоспособен
    var form = document.querySelector(".find-hotel form");
    form.classList.add("form-closed");

    var btnShow = document.querySelector(".btn-header");

    // Обработчик нажатия на кнопку 'показать форму'
    btnShow.addEventListener("click", function (evt) {
      evt.preventDefault();
      form.classList.toggle("form-closed");
    });

