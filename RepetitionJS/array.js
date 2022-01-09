const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1,1,2,3,5,8,13]
// const people = [
    
//     {name: 'Damir', budget: 4500},
//     {name: 'Elena', budget: 3500},
//     {name: 'Klaus', budget: 1000}
    
// ]
// Function
function addItemEnd(){

}

//Method

// cars.push('Audi') // push () add item to end 
// cars.unshift('Camry') // add item to start

// const firstCar = cars.shift();
// const lastCar = cars.pop()
// console.log(firstCar);
// console.log(lastCar);




// console.log(cars)
// console.log(cars.reverse())
// cars[index] = 'Porshe'
// console.log(cars);

// let findedPerson;

// for(const person of people) {
//     if(person.budget === 3500){
//         findedPerson = person
//     }
// }
// console.log(findedPerson);
// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// });
// const person = people.find(function (person) {
//     return person.budget === 4500
// });

// const person = people.find(person => person.budget === 4500)
// console.log(person);

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()

// })

// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// const filterNumbers =  pow2Fib.filter(num => num > 20)
// console.log(filterNumbers);


// console.log(pow2Fib);
// console.log(cars);

// Problem 1

// const index = (cars.indexOf('BMW!'));
// const text = 'Hello,  we learn JavaScript'

// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    
    {name: 'Damir', budget: 4500},
    {name: 'Elena', budget: 2600},
    {name: 'Klaus', budget: 1000}
    
]

const allBudjet =  people
    .filter(person => person.budget > 1500)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)
// console.log(allBudjet);

const guests = [
    
    {name: 'Damir', budget: 4500, age: 21},
    {name: 'Kemal', budget: 3500, age: 20},
    {name: 'Elena', budget: 2900, age: 17},
    {name: 'Klaus', budget: 1000, age: 24},
    {name: 'Katrine', budget: 1000, age: 16}

    
]
// party 18+
const whoCanComeIn  = guests.filter(point => point.age > 18 && point.budget > 3000)
console.log(whoCanComeIn);
