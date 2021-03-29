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
//                                         // . это операция обращения к обьекта 
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
    

var person =  {

    firstname:"Damir",
    lastName : "Busurmankulov",
    age : 22,
    year : 1999,
    birthplace: "Djalal-abad",
    region : "Suzak"

};

let arr = ["apple","juice","painable","abricos"];

console.log("Мсето рождения : " + person.birthplace + ", Год рождения : " + person.year);

console.log(arr[1],arr.length)


    
