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

// Promise

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

