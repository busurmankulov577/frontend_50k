const person = {
    name: 'Damir',
    age: undefined,
    year: 1999,
    isProgrammer: true,
    'complex key': 'Complex Value',
    ['key' + (1+3)]: 'Comuted key',
    languages: ['ru','eng', 'de'],
    greet(){
        console.log('greet from person');
    },
    info(){
        console.log('Info about person by name ', this.name );
        console.log(this);
    }
}
// console.log(person);
// console.log(person["complex key"])
// person.greet()
// console.log()
// // person['key4'] = undefined;
// delete person['key4']
// console.log(person);

// const name = person.name 

// const age = person.age
// const languages = person.languages
// console.log(name ,age, languages);


// const {age: personAge = 10 , languages, name} = person;
// console.log(name ,personAge, languages);
// console.log(person);

// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('Key:' ,key);
//         console.log('value' ,person[key]) 
//     }
    
// }
// опасен может заходить в его прототип и изза этого может быть  проблемы либо нужно писать проверки 

// Object.keys(person).forEach((key) => {
//         console.log('Key:' ,key);
//         console.log('value' ,person[key]) 
// })

//                                                                                                                      // Context 
// person.info();

const logger = {
    keys(){
        console.log('Object Keys: ' , Object.keys(this));
    },
    // keysAndValues(){
    //     Object.keys(this).forEach(key => {
    //         console.log(`'${key}': ${this[key]}`);
    //     })
    // }
    // const self = this,
    keysAndValues(){
        Object.keys(this).forEach( function (key) {
            console.log(`'${key}': ${this[key]}`);
        }.bind(this))
    },
    withparams( top = false, berween = false , bottom  = false){
        if(top) {
            console.log('______start______');
        }
        
        Object.keys(this).forEach((key, index, array) => {
            console.log(`'${key}': ${this[key]}`);
            if(berween && index !== array.length -1) {
                console.log('--------------------');
            }
        })

        if(bottom) {
            console.log('______ End ______');
        }
        
    }
}
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
// logger.withparams.call(person, true,true,true)
logger.withparams.apply(person, [true,true,true])

