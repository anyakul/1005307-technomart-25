/*ВСПЛЫВАЮЩЕЕ ОКНО ОТПРАВКА СООБЩЕНИЯ*/
 var link = document.querySelector(".write-us-button");
  
  var popup = document.querySelector(".modal-message");
  var close = popup.querySelector(".modal-close"); 
/*  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  } */
  
 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
 /*   if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }   */
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
 /* form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и email");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });
  
 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  }); */
  
  