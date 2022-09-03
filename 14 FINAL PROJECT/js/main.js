const userSurname = document.querySelector('[name="surname"]');
const userName =  document.querySelector('[name="name"]');

const goodsElements = document.querySelectorAll('[name="goods"]');
const countElements =  document.querySelectorAll('[type="number"]');

const btn = document.querySelector(".btn");
const resultElem = document.querySelector(".sum");

let total = 0;

//этот объект нужен для хранения количества каждого товара
//либо, вы можете создать переменные/массив для хранения значений 
const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
//либо, вы можете создать переменные/массив для хранения значений
const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}
//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
function countSum() {
	let sum = 0;
    for (item in countGoods) {
		sum += choicePriceGoods[item] * countGoods[item];
	}
	return sum; 
}
//для каждого элемента input с кол-вом нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значения на значение в input
countElements.forEach(elem => {
	elem.addEventListener("change", function() {
		countGoods[elem.id] = parseInt(elem.value);
		total = countSum();	
		resultElem.textContent = `${total} р.`;
	});
   
})

//для каждого элемента checkbox нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значение на цену, если чекбокс выбран
//или обратно на 0, если чекбокс не выбран
goodsElements.forEach(product => {
	product.addEventListener("change", function() {
		if (product.checked) {
			choicePriceGoods[product.dataset.goods] = parseInt(product.value);	
		}	
		if (!product.checked) {
			choicePriceGoods[product.dataset.goods] = 0;
		}
		total = countSum();	
		resultElem.textContent = `${total} р.`;
	});
});

//по клику на кнопку должен появиться alert с текстом
//(*)для выбравших способ 1 или 2 именно внутри данного события будет происходить подсчет итоговой суммы,
//вам нужно перебрать все элементы checkbox и input в цикле
btn.addEventListener("click", function() {
	total = countSum();	
	resultElem.textContent = `${total} р.`;
	message = "";
	if ((userName.value != "") || (userSurname.value != "")) {
		message = `Заказчик: ${userSurname.value}${userName.value}`;
	}
	message += `\nИтого: ${total} р.`
	alert(message);
});