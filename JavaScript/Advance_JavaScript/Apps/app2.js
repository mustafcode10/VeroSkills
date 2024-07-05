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
