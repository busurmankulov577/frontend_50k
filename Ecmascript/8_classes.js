class Person {
    type = 'human'
    constructor(name){
        this.name = name
    }
    greet() {
        console.log(this.name + ' says hello');
    }


}

// const max = new Person ('max ')
// max.greet()
// console.log(max.type);
// console.log(max);

// console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
    constructor(name, job){
        super(name)
        this._job = job
    }
    get job(){
        return this._job.toUpperCase()
    }
    set job (job){
        if(job.length < 2){
            console.log('Validation Failed');
        }else {
            this._job = job
        }
        this._job = job
    }
    greet(){
        super.greet()
        // console.log('Rewritten');
    }
}

const frontend = new Programmer ('max', "Frontend")
// console.log(frontend);
// frontend.greet()

// console.log(frontend.job);
frontend.job = 'Backend'
// console.log(frontend.job);

class Util {
    static average(...args){
        return args.reduce((acc, i) => acc += i) / args.length
    }
}

// const util = new Util()
// console.log(util.average(1,1,2,3,5,8,13));

const res = Util.average(1,1,2,3,5,8,13)
console.log(res.toFixed(1));