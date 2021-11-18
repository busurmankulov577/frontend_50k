// const a = 0;
// console.log(a);

// let obj = {
//     number: 5,
//     sayNumber: function(){
//         say = () => {
//             console.log(this);
//         }
//         say();
//     }
// };

// obj.sayNumber();

// let names = ['Damir', 'Adilet', 'Ruslan', 'Aibek'];

// let shortName = names.filter((name) => {
//     return name.length < 6;
// });
// console.log(shortName);

// let names = ['Damir', 'Adilet', 'Ruslan', 'Aibek'];

// names = names.map((name) => name.toUpperCase());
// console.log(names);


// function interPolo(st1, st2 = "asdasda"){
//     st2 = st2 || 0;
//     console.log(`String 1: ${st1} | String 2: ${st2}`);

// }
// interPolo("Maybe");

// function max (a,s,d,fg,  ...number){
//     console.log(number);
// }


// max(1,2,3,4,5,6,1,1,1,1,1,1,1);

// const   arr1 = [1,2,3,4,5];
//         arr2 = [10,20,30];


// const res = Math.max(...arr1, ...arr2);
// console.log(res);

// const user = {
//     name: "User",
//     pass: "asd123",
//     rool: "admin"
// };
// const admin = {
//     asd: "asd"
// };
// es 6
// const res = Object.assign({},user,admin);

// const res = {...user, ...admin};
// console.log(res);
// const x = 10, y = 20;

// const obj = {
//     x: "asd",
//     a: "qwe"
// }

// console.log(obj);

// const x = 10, y = 20;

// const obj = {x,y}

// console.log(obj);

// const x = 10, y = 20;

// const obj = {x,y,
//     calc(){
//         console.log(this.x * this.y);
//     }

// }
// obj.calc();
// console.log(obj);

// const user = {
//     name: "User",
//     pass: "asd123",
//     rool: "admin"
// };


// const {name, pass, rool} = user;
// console.log(name);


// const user = {
//     name1: {
//         namef: "Damir",
//         surname: "Busurmankulov"
//     },
//     pass: "asd123",
//     rool: "admin"
// };


// const {name1: {namef, surname}, pass, rool} = user;
// console.log(`${namef} - ${surname} - ${pass} - ${rool}`);


// function connect({
//     host = "localhost",
//     ports = 3000,
//     user = 'root'
// } = {}){
//     console.log(`${host} - ${user} - ${ports}`);
// }

// connect();

// const arr = [[1,3],1,2,3,4];

// const [[a,b],q,c,d] = arr;

// console.log(a,b);

// const country = {
//     name: 'Bishkek',
//     population: 500000,
//     gender: {
//         male: ['15%', '40%'],
//         female: ['20%', '80%']
//     }
// };
// console.log(country.gender.male[1]);

// const {gender: {male: [male1, male2], female: [f1, f2]}} = country;
// console.log(male1);
let positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
  ];
  
  let prices = [
    10000,
    4800,
    9200,
    2500,
    57000
  ];
  
  let  hitName = positions[2], hitPrice = prices[2];
  
  const hit = {namef,price};

  console.log()