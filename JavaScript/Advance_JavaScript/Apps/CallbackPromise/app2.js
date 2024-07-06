// Callbacks 

// a function calling another function - a function passed in as an argument
// pass as argument do not include the parenthesis 
// callbacks are a valuable part of asynchronous - its the callback that processes the data 
// and that we wait for to return once the data is received.
// avoid multiple callbacks which can make code difficult to read - 
// also should avoid nesting within each other or you can caught up within each other as they wait for the responses



// Callback 
// console.log('Test1')

// function greeting(){
//     console.log('Hello World')
// }
// test1(greeting)

// function test1(callback){
//     callback()
// }
// setInterval(greeting, 5000)
// console.log('Test2')


// Promises
// organize the sequence of code, produces a result that can be used within the next step
// default callbacks parameters of resolve and reject
// resolve() promise is successful and returns whatever is within the parameter
// reject() is a failed promise - catch() is executed when the reject is triggered.

const pro1 = Promise.resolve('hello');
pro1.then(res => {
    console.log(res);
})

const pro2 = new Promise((resolve, reject)=>{
    resolve('hello world');
})
pro2.then(res => {
    console.log(res);
})

const pro3 = new Promise((resolve, reject)=> {
    const val = 100
    if(val > 50){
       resolve(val);
    } else {
        reject('Low value');
    }

})

pro3.then(output => console.log(output)), (err)=>{
    console.error(err)
}

let counter = 0
const pro4 = new Promise((resolve, reject)=> {
   resolve('ready')
//    reject('error')

}).then(value => {
    counter++
    console.log( value);
    return  `next step ${counter}`
}).then(value => {
    counter++
    console.log( value)
    return `next step ${counter}`
}).then(value => {
    counter++
    console.log( value)
    return `next step ${counter}`
}).then(value => {
    counter++
    console.log( value)
    return `next step ${counter}`
}).then(value => {
    counter++
    console.log( value)
    return `next step ${counter}`
}).then(value => {
    counter++
    console.log( value)
    return `next step ${counter}`
}).then(val => {
    console.log( val)
}).catch(err => {
    console.log(err)
})

