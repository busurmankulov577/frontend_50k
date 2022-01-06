//1 Function

// Function Declaration
// function greet(name){
//     console.log('hi - ', name);
// }
//Function Expression

// const greet2 = function greet2 (name){
//     console.log('hi - ', name);

// }

// greet('Damir')
// greet2('Damir')
// console.dir(greet)

// // 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 5){
//         clearInterval(interval) //clearTieOut
//     }else {
//         console.log(++counter)
//     }

// }, 1000)

// 3 Стрелочные функции 



// function greet(name) {
//     console.log('hi - ', name);
// }
// greet("Lena")
// const arrow = (name) => {
//     console.log('Hi - ', name);
// }
// arrow("Sena")
// const arrow2 = name => console.log('Hi - ', name);
// arrow2("Max")

// const pow2 = num =>  num ** 2;
// console.log(pow2(5))

// 4 Параметры по умолчанию 

// const sum = (a = 40, b = a * 2) => a + b;
// console.log(sum());

function sumAll (...all) {
    let result = 0

    for(let num of all){
        result += num
    }
    return result

}

const res = sumAll(1,2,3,1,4,5);
// console.log(res)

// Замыкания 
function createMember (name) {
    return function (lastName){
        console.log(name + lastName);
    }
}

const logWithLastName = createMember('Busurmankul ')
console.log(logWithLastName('Busurmankul'));
console.log(logWithLastName('Damirbek'));

