

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function(){
        console.log('Greet!');
    }
})
Object.prototype.sayHello = function (){
    console.log('Hello');
}
// Protottype это определенный обьект который присутствует у родительскиих Элементов и он вызывается сверху вниз

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String( 'i am string')
