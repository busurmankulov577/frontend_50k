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
    console.log(typeof(a));
    if (typeof(a) != String) {

        console.log(a.toString(16));
        console.log(a.toString(8));
        console.log(a.toString(2));
        console.log("Это не строка");
        

    } 



}

// myFun(13);







