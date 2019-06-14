  var link = document.querySelector(".write-us-button");
  var popup = document.querySelector(".modal-message");
  var close = popup.querySelector(".modal-close");
  link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
  });
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });