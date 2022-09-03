btnElement = document.querySelector(".btn");
nameInput = document.querySelector(".name__input");
surnameInput = document.querySelector(".surname__input");
result = document.querySelector(".answer");
btnElement.addEventListener( "click", function(){
  result.textContent = "Ответ: " + "Здравствуйте, " +  nameInput.value + " " + surnameInput.value + "!";
});
