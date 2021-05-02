// "use strict";
//     // Использование строго режима для обработки данных 

//     let number = 1;
//         // данные которые указывается без скобок = числа 
//     let text = "Damir "
//         // данные которые заключены в скобки называются строки "string"

//     console.log(10*"damir");
//     console.log(text + number)
//             // text + цифра = это будет означать операцию склеивания 
//             //  + это операция склеивания и сложения 

//     let number2 = false;
//     // console.log(unown); // ошибка - is not defined - не определено
//     // //  создание обьекта начинается с фигурных скобок { }

//     let obj = {
//         name:"Damir",
//         // name это названия первого обьекта 
//         // : это разделение между обьектом и его значением 
//         // "" внутри ковычек указывается значение обьекта 
//         age : 22,
//         location:"Kyrgyzstan"
//     };

//         //  console.log это команда для вывода данных на экран 
//                                     // obj - это перпменная
//                                         // . это операция обращения к 
//                                             // name это названия обьекта  
//     console.log("Ваше имя :" + obj.name + " Ваш возраст :" + obj.age);
//         // Второй вариант получения данных из обьекта
//             // obj \]
//                 //  [] уточнения позиции и уточнения обьекта 
//                     // name это название обьекта 

//     console.log(obj ["name"]);


//     // Массивы
//     // МАсивы создаются с квадратных скобок []

//     let arr = ["iphone", "apple", "pen"]
//     console.log(arr.iphone)  // undefined не понятно - не определено 
//     arr.push("banan", "apelsin", "mandarin")

//     console.log(arr.length -1);
//     let newLength = arr.unshift("alma")
//     console.log(arr);


var person = {

    firstname: "Damir",
    lastName: "Busurmankulov",
    age: 22,
    year: 1999,
    birthplace: "Djalal-abad",
    region: "Suzak"

};

let arr = ["apple", "juice", "painable", "abricos"];

// console.log("Мсето рождения : " + person.birthplace + ", Год рождения : " + person.year);

// console.log(arr[1], arr.length);


// Базовые функции Взаимодейсвия с пользователями 


// alert("Hello Guest");


// var result = prompt("Сколько будет 2+2",'');
// // prompt - состоит из 2 частей 
// // 1 часть вопрос  
// // 2 часть - ответ по умолчанию

// // prompt - зопоминает введенные данные для далььнейшей обработки 
// var msg ;
// if(result == "4"){
//     msg ="Верно";
// } else{
//     msg = "Неверно ";
// }

// alert(msg );

// var result = confirm("Результат сложения 2+2 будет равен  4?")
// alert(result)




// Массивы и псевдомассивы

const arra = [1, 2, 3, 4, 5];

// console.log(arra);


// console.log(arra.pop())
// console.log(arra.shift())
// console.log(arra);
// arra.unshift(10);
// arra.unshift(15);

// console.log(arra);
// delete arra[0];
// arra[50] = 20;

// console.log(arra);
// console.log(arra.length);


// for(let i = 0; i < arra.length; i++){
//     console.log(arra[i]);

// }

// for(let value of arra ){
//     console.log(value);
// }
// arra.forEach(function(item,index, arra){
//     // console.log(item);
//     // console.log(index);
//     // console.log(arra);
//     console.log("INDEX: "+index+" Значение "+item+" из массива = "+arra);

// });

var object = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
// console.log(object)
var arava = [];

// Преобразуем псевдомассив в массив 
for (let i = 0; i < object.length; i++) {
    // arava.push(object[i]);
    // console.log(object[i]);
}

// console.log(arava);



function getPersoninfo(f_name,l_name,...rest){

           

    let name =  f_name,
        lastname = l_name;
    
    
    console.log(name, lastname,rest);

}
getPersoninfo("Bred","Pit","Мощный",'Сочный','Восточный','Аромат');



