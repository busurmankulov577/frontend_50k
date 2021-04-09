// 1)Изучить событья кнопок
//     2)По клику на кнопку добавить в корзину товар с след параметроми:
//         1) картина 
//         2) Заголовок
//         3) доп параметры 
//         4) цена
//     3) Добавить в корзину

    //  .class - docoment.getElementbyclassName 
        //      вкладка 
        //      (.) связка 
        //      get - получить 
        //      Elements - Элементы ( потому что класснов несколько)
        //      by - по \ от 
        //      ByclassName - название класса 
       
        // let title = document.getElementsByClassName("title"); 
		
        // console.log(title[0].innerText);
        // console.log(title[1].innerText);
        // console.log(title[2].innerText);
        // console.log(title[3].innerText);
        // console.log(title[4].innerText);
       
		




        
        
                
        
        
        // Без команды вывода ничего не выведится ;


        // let product = document.getElementsByClassName("product"); 
        // console.log(product[0].innerText);



        // var arr = ["Apple", "Orange", "Grusha"];

        // arr.forEach(function(item, i, arr){
        //     alert(i + ": " + item + " (массив:" + arr + ")")
        // });

		// var arr = [1, -1, 2, -2, 3];

		// var positiveArr = arr.filter(function(number){
		// 	return number > 2 ; 
		// });

		// alert( positiveArr);
		// var names = ['HTML', 'CSS', 'JavaScript', 'Damiebk'];

		// var nameLengths = names.map(function(name){
		// 	return name.length;
		// });

		// alert (nameLengths);


		// var arr = [1, -1, 2, -2, 3];

		// function isPositive(number){
		// 	return number > 0;
		// }

		// alert(arr.every(isPositive));
		// alert(arr.some(isPositive));

		// var arr = [1, 22, 32, 4, 5];

		// var result = arr.reduce(function(sum, current){
		// 	return sum + current;
		// }, 0);

		// alert(result);



		// let product = document.querySelectorAll(".body_product > .product"); 
		 // Вариант вывода 1
		// console.log(title);
			// console.log(title[0]);
			// console.log(title[1]);
			// console.log(title[2]);
			// console.log(title[3]);
			// console.log(title[4]);

		// for(let text of product){
		// 	console.log(text.innerText);
		// }

//с помощью цикла сделal перебор товаров
		let product = document.getElementsByClassName("product");

	// 1 
		// let i;
		// for(i = 0; i < product.length; i++){
	
		// 	console.log(i);
		// }
		
	// 2

		// var index, len;
		// for (index = 0, len = product.length; index < len; ++index) {
		// 	console.log(product[index]);
		// }

	// 3
		for(let i of product){
			console.log(i);
		}
		 

//по клику получить название товара с помощью js

		var elements = document.getElementsByClassName("add_cart");
		console.log(elements);

		var myFunction = function () {
			var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
			alert(attribute[0].innerText);
		};

		for (var i = 0; i < elements.length; i++){
			elements[i].addEventListener('click', myFunction, false);
		}
		
//по клику получить цену товара с помощью js
		var prelement = document.getElementsByClassName("add_price");
		console.log(prelement);

		var myPriceFunction = function () {
			var prattribute = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
			console.log(prattribute[0].innerText);
		};

		for (var i = 0; i < prelement.length; i++){
			prelement[i].addEventListener('click', myPriceFunction, false);
		}

//по клику получить адрес картинки с помощью js

		// var imgelements = document.getElementsByClassName("add_adress");
		// console.log(imgelements);

		// var myImgFunction = function () {
		// 	var imgattribute = this.parentNode.parentNode.parentNode.querySelectorAll(".img");
		// 	console.log(imgattribute[0].src);
		// };

		// for (var i = 0; i < imgelements.length; i++){
		// 	imgelements[i].addEventListener('click', myImgFunction, true);
		// }

	//	с помощью js поменять название товара цену товара    
		var preelement = document.getElementsByClassName("add_price");

		preelement[0].innerHTML = 29;

		preelement[1].innerHTML = 39;
		preelement[2].innerHTML = 19;
		preelement[3].innerHTML = 55;
		preelement[4].innerHTML = 23;


		var elem = document.getElementsByClassName("title");
		elem[1].innerHTML = "Demi Jumpsuit";
		elem[3].innerHTML = "Sweatshirt";

		elem[5].innerHTML = "New Shirt";
		elem[7].innerHTML = "Lova Dans bag";
		elem[9].innerHTML = "Viena Jumper ";

		console.log(elem);




		// function test_fun(param) {
		// 	var number = 10;
		// 	var res;
		// 	res = number + param;
		// 	alert(res)
		// }
		// test_fun(1);

		const arr = {
			name: "Damir",
			age: 22,
			param: {
				color: "white",
				nat: "Kyrgyz"
			}
		};

		console.log(arr);


		for (let key in arr){

			if(typeof(arr[key]) === 'object'){
				for (let key2 in arr[key]){
					console.log(arr[key][key2]);
				}
			} else{
				console.log(arr[key])
			}
			
		};
//Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.
// 		var num1 = +prompt("Введите радиус: ");

// 		var p = 2 * 3.14 * num1 ;
// 		alert(p);
		
// //Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
// 		function min(a,b){
// 			if (a > b){
// 				console.log(b);
// 			} else if (a < b){
// 				console.log(a);
// 			}
// 		}
// 		min(45,44);



//Сделайте функцию которая возводить в степень числа вводимые пользователем
function stepen(a){
	let result = a * a;
	console.log(result);
}
stepen(5);

//Сделайте функцию которая находит площадь круга, радиус вводить пользователь 
function ploshad(r){
	let res = 3.1415 * (r*r);
	console.log(res);
}
ploshad(5);


// Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь. 
function square(a, b){
	let result = a * b ;
	console.log(result);
}
square(5, 2)