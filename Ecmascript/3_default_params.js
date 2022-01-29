const defaultB = 30 
const getDafult = c => c * 2

function compute (a = 10, b = getDafult(a)){
    return a + b
}
console.log(compute());