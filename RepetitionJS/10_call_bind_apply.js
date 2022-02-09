function hello() {
    console.log("hello",this);
}
const person = {
    name: "vladillen",
    age: 20,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()

        
    }
}

const lena = {
    name: "Elena",
    age: 23
}
// const fnLenaInfoLog = person.logInfo.bind(lena,'Frontend', '8-88-99998-87775-1')()
// person.logInfo.call(lena,'Frontend', '996-777-99-66-78')
// person.logInfo.apply(lena,['Frontend', '8-88-99998-87775-1'])


// Отличаются способом методов передачи параметров 



const array = [1,2,2,3,5]
// function multBy (arr,n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }
// console.log(multBy(array,15));

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
            return i * n
        })
}
console.log(array.multBy(20));
const person = {
    name: 'Asylbek Ata'
}

function info(phone, email) {
    console.log(`Name: ${this.name}, Number: ${phone}, Email: ${email}`);
}
//Demo
// info.bind(person)('123456', 'asd@gmail.com')
// info.bind(person,'123456')('asd@mail.ru')
// info.bind(person , '123456', 'asd@gmail.com')()

// 1 just

// function bind(fn, context, ...rest){
//     return fn.bind(context, ...rest)
// }

// 2 Without any methods
// function bind(fn, context, ...rest){
//     return function (...args){
//         const uniqId = Date.now().toString()

//         context[uniqId] = fn
//         const result = context[uniqId](...rest.concat(args))
//         delete context[uniqId]
//         return result
//     }
// }

// 3 ES5
// function bind(fn, context){
//     const rest = Array.prototype.slice.call(arguments, 2)
//     return function(){
//         const args = Array.prototype.slice.call(arguments)
//         return fn.apply(context, rest.concat(args))
//     }
// }

// 4 ES6
// function bind(fn,context, ...rest) {
//     return function(...args){
//         // return fn.apply(context, rest.concat(args))
//         return fn.call(context, ...rest.concat(args))
//     }
// }


// bind(info, person)('123456', 'asd@gmail.com')
// bind(info,person,'123456')('asd@mail.ru')
// bind(info, person, '123456', 'asd@gmail.com')()

function call(fn, context, ...args) {
    const uniqId = Date.now().toString()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId]
    return result
}
call(info, person, '123564', 'call@mail.ru')
// Apply

function apply (fn, context, args){
    const uniqId = Date.now().toString()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId]
    return result
}
apply(info, person, ['123564', 'call@mail.ru'])