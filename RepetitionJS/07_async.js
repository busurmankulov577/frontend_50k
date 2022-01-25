// EVEN LOOP

// const timeout = setTimeout(() => {
    
//     console.log('After TimeOut');
// }, 2500)
// clearTimeout(timeout)

// const interval = setInterval(() => {
    
//     console.log('After TimeOut');
// }, 1000)
// // clearTimeout(timeout)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('After 2 second');
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(' Something wrong with code')
        },wait)
    })
    return promise;
    
} 
// delay(2500)
// .then(() => {
//     console.log('After 2 seconds');
// })
// .catch( err => console.log(err))
// .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1,1,2,3,5,8,13
]))
// getData().then(data => console.log(data))

async function asyncExample(){
    try {
        await delay(3000)
        const data = await getData()
        console.log("data", data);
        
    } catch(e) {
        console.log(e);
    } finally {
        console.log('Finally');
    }
}
asyncExample()

