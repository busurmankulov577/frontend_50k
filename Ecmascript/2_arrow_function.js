// function sum(a,b){
//     return a + b
// }
// function cubs(a){
//     return a ** 3
// }
const sum = (a,b) => a + b;
const cubs = a => a ** 3;

// console.log(sum(41,45));
// console.log(cubs(3));

// setTimeout( () => console.log('After one second'), 1000)

// Context 
function log() {
    console.log(this);
}
const arrowLog = () => console.log(this);
const person = {
    name: 'Elena',
    age: 26,
    log: log,
    arrowLog: arrowLog,
    felayLog: function(){
        // const self = this
        global.setTimeout( () => {
            console.log(this.name + ' ' + this.age);
        },500)
    }
}
// console.log(global);
person.felayLog()
