/*ВСПЛЫВАЮЩЕЕ ОКНО ОТПРАВКА СООБЩЕНИЯ*/
 var link = document.querySelector(".write-us-button");
  
  var popup = document.querySelector(".modal-message");
  var close = popup.querySelector(".modal-close"); 
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");
  
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  } 
  
 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      name.value = storage;
      name.focus();
    } else {
      email.focus();
    }   
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя, email и ваше сообщение");
	  popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
	  popup.classList.add("modal-error");
	} else {
    	if (isStorageSupport) {
		    localStorage.setItem("name", name.value)
		}
    }
  });
  
 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
      }
    }
  }); 

  /*ВСПЛЫВАЮЩЕЕ ОКНО ДОБАВЛЕНИЯ В КОРЗИНУ*/
  
  var link = document.querySelector(".buy");
  
  var popup = document.querySelector(".modal-cart");
  var close = popup.querySelector(".modal-close"); 
  
 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });