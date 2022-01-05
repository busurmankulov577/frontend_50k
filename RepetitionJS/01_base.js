// 1 Переменные
const lastName = "Damirbek"; //String CamelCase
// const age = 26; // NUmber 
// const isProgrammer = true; // Boolean


// const _privete = 'preeventdefaul'
// const $ = 'some value'

// const ife = 'if' зарезервированное слово нельзя писать по переменные 
const damir54 = '5';
// const 34asd = 'asd'  error 

// 2 Мутирование

// console.log('Name of human: ' + lastName + ' , but Age :' + age)
// alert('Name of human: ' + lastName + ' , but Age :' + age)

// console.log(age.toString())

// const firstName2 = prompt('Enter your Lastname')
// alert(lastName + ' ' + firstName2);

// 3 Operators

// let currentYear = 2022 ;
// const birthYear = 1999;

// // const age = currentYear - birthYear;
// const a = 10;
// const b = 5 ;

// console.log(a - b);
// console.log(a + b)
// console.log(a / b)
// console.log(a * b)

// let c = 32  
// // c = c + a
// c += a
// c -= a
// c /= a

// c *= a


// console.log(currentYear)
// console.log(--currentYear)

// console.log(c)

// 4 типы данных
// const isProgrammer = true
// const fname = 'Damirbek'
// const age = 22 ;
// let x ;

// console.log(typeof isProgrammer)
// console.log(typeof fname)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов //Operator's Priority 

// const fullAge = 23;
// const birthYear = 1999;
// const currentYear = 2022;

// const isFullage = currentYear - birthYear >= fullAge // 23 >= 23

// console.log(isFullage);

// 6 Условные операторы 

// const courseStatus = 'fail' // ready , fail , pending

// if (courseStatus === 'ready') {
//     console.log('Course is already  ready and its can learning');
// }else if(courseStatus === 'pending'){
//     console.log('Course is  still  in pending');
// } else {
//     console.log('The course did not work out');
// }

// const num1 = 42 ;
// const num2 = '42';

// console.log(num1 == num2);

const isReady = true;

// if(isReady){
//     console.log('Done');
// } else {
//     console.log('All is not done');
// }
// Тернарное выражение 
// isReady ? console.log('Done') : console.log('All is not done');

// 7 Булевая логика 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 Функции 

// function calculateAge (year) {
//     return 2022 - year;
// }

// // const myAge = calculateAge(1999);
// // console.log(calculateAge(1997));

// function loginAbout(name, year) {
//     const age = calculateAge(year);
//     if(age > 0){
//         console.log('Human after name ' + name + ', now his age ' + age);
//     }else {
//         console.log('Future');
//     }
//     } 
    
// loginAbout('Damir', 1999)
// loginAbout('aaa', 2022)
// loginAbout('Aw', 1995)

// 9 Массивы 

// const cars = ['Mazda', 'Mersedes', 'BMW', 'Audi'];
// console.log(cars);

// const cars = new Array('Mazda', 'Mersedes', 'BMW', 'Audi')
// console.log(cars);
// console.log(cars[1]);
// console.log(cars);
// console.log(cars.length);
// cars[0] = 'Porshe'
// cars[cars.length] = 'Mazda'
// console.log(cars);

// 10 Циклы 

// const cars = ['Mazda', 'Mersedes', 'BMW', 'Audi','Lexus'];

// for(let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car);
// }
// for( let car of cars) {
//     console.log(car);
// }


// 11 Objects
// const person = {
//     fname: 'Damirbek',
//     age: 23,
//     birthYear: 1999,
//     loc: 'Bishkek',
//     languages: ['RU', 'ENG', 'KGZ', 'TUR', 'DE'],
//     isHasWife: false,
//     greet: function(){
//         console.log('greet');
//     }
// }
// console.log(person['languages']);

// const key = 'birthYear'
// console.log(person[key]);
// person.isHasWife = true
// console.log(person);
// person.greet();