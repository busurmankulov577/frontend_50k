"use strict";
// ООП - понятие 

// понятие 

// Как понять что есть 
// let str = "Текст";
// let strObj = new String(str);


// console.log(typeof(str));
// console.log(typeof(strObj));


let array = [1, 2, 3, 4, 5];
// console.log(array);



let car = {
    kuzov: "Железо",
    kolesa: "4 kolesa",
    modal: function () {
        // alert("Hello wordl");
    }
};

// let mb = {
//     marka: "Mersedes",
//     year: "2018"
// };

let mb = Object.create(car);
mb = {
    marka: "Mersedes",
    year: "2018"

};

// mb.__proto__ = car;
Object.setPrototypeOf(mb, car);

// console.log(mb.year);

mb.modal();

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};


let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
};

var obj = {};
Object.keys(salary).forEach(function (a) {
    obj[a] = salary[a] + bonus[a];

});



// console.log(obj);



//   Динамическая типизация 
// let number = +"1";
// console.log(number+ 5);


// let res_input = +prompt("Введите номер страницы ","");

// console.log(typeof(res_input));

// console.log(`http://127.0.0.1:5500/JavaScript/urok36/hw/index.html/${res_input}`);

// if(typeof(res_input));

function myFun(a) {
    console.log(typeof (a));
    if (typeof (a) != String) {

        console.log(a.toString(16));
        console.log(a.toString(8));
        console.log(a.toString(2));
        console.log("Это не строка");


    }



}

// myFun(13);



let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
let click3 = document.getElementById("btn3");
let click4 = document.getElementById("btn4");
let click5 = document.getElementById("btn5");

// click.onclick = function(){
//     alert("Click");
// };

let deleteElement = (event) => {
    // event.target.remove();
    event.target.remove();
};


// click.addEventListener("click",(event) => {
//     event.target.remove();
// } );
// click2.addEventListener("click",(event) => {
//     event.target.remove();
// } );

click.addEventListener("click", deleteElement);
click2.addEventListener("click", deleteElement);
click3.addEventListener("click", deleteElement);
click4.addEventListener("click", deleteElement);
click5.addEventListener("click", deleteElement);




// Изменение цвета

let status = 1;
let x = document.getElementsByTagName("body");

function changeStyle() {

    if (status == 1) {
        x.target = document.body.style.background = 'white';
        status = 2;
    } else if (status == 2) {
        x.target = document.body.style.background  = 'gray';
        status = 3;
    } else if (status == 3) {
        x.target = document.body.style.background  = '#eeefff';
        status = 1;
    }

}