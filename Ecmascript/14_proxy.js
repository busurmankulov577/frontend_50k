const validator = {
    get(target,prop){
        return prop in target ? target[prop] : `Поля ${prop} i objects not`
    },
    set(target,prop,value){
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Line has to be more 2 symbols . now ' + value.length);
        }
    }


}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy( form,validator)

// console.log(formProxy.password);
// console.log(formProxy['username']);
// formProxy.password= '12'
// console.log(formProxy.password);

function log(message){
    console.log('[Log]:', message);
}

const proxy = new Proxy (log, {
    apply(target,thisArg , argArray){
        if(argArray.length === 1){
            Reflect.apply(target, thisArg, argArray)
        }else {
            console.log('Values of element is not defined');
        }
    }
})
proxy('Custom message')
proxy('message', 2)



