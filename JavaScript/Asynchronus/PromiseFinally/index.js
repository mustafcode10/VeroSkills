// Promise.finally will run no matter if the promise was rejected or resolved 
// use finally for individual promises, use promise.all/allSettled for multiple purpose.

const pizzaIsGood = true
const myPromise = new Promise((resolve, reject)=>{
    if(pizzaIsGood){
      resolve('Yay')
    } else{
        reject('ewww')
    }

})

myPromise.then(msg => console.log('Yay!'))
myPromise.catch(msg => console.log('Eww'))
myPromise.finally(msg => console.log('byeee!'))