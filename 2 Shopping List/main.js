btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name="food"]'); 
labels = document.querySelectorAll(".label");

for (let i = 0; i < 3; i++){
	labels[i].textContent = labels[i].textContent + " - " + radioButtons[i].value;
}

btnElement.addEventListener("click", function(){  
    let total = 0;                
    for (const radioButton of radioButtons){
        if (radioButton.checked){ 
            total = total + parseInt(radioButton.value);
        }
    }
    resultElement.textContent = `${total} руб`;
 });