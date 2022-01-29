const  array = [1,2,3,6]
const str = 'Hello'
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iter = array[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let item = 0; item < str.length; item++) {
//     const element = str[item];
//     console.log(element);
    
// }

// const country = {
//     values: ['en','ru','us', 'kg'],
//     [Symbol.iterator](){
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
    

// }
// for(let item of country) {
//     console.log(item);
// }

// Generator 

function *gen(num = 4){
    for (let i = 0; i < num; i++) {
        try{
            yield i   
        }catch(e) {
            console.log('Error');
        }
    }
}

const iter = gen (3)
console.log(iter.next());
console.log(iter.throw('My error'));
console.log(iter.next());
console.log(iter.next());

for(let i of gen (4)){
    console.log(i);
}



