class Student {
    constructor( name){
        this.name = name
    }
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
}

class ProtoStudent {
    university = 'Oxford'
}


const student = Reflect.construct(Student, ['Inokentii'])
// console.log(student.__proto__ === Student.prototype);

Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student)

student.age = 25 
console.log(Reflect.isExtensible(student));
console.log(student);