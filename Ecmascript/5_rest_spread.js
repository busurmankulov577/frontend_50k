//Rest
function average (a, ...args) {

    return args.reduce((acc, i) => acc += i, 0) / args.length
}
// console.log(average(20,30,40,50))

// const array = [1,1,3,5,8,13]

// console.log(...array);

// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.max.apply(null, array));

// const fib = [2, ...array]
// console.log(fib);

// Destructuring
const array = [1,1,3,5,8,13]

// const a = array[0]
// const b = array[1]
// const [a, b, ...c] = array
// console.log(a,b,c);
// const [a,,c] = array
// console.log(a,c);

// Object
const address = {
    country: 'Kyrgyz Repblic',
    city: 'Bishkek',
    street: 'Isanova',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
} 
// const {city,country,street = 'Koibagarova', concat: addressConcat} = address
// console.log(addressConcat.call(address));
// console.log(street);

const {city, ...rest} = address
console.log(city);
console.log(rest);

const newAdress = {...address, street: 'Koibagarova',code: 720088}
console.log(newAdress);




