// Advanced Asynchronous Flow Control
// Prompt: Write a piece of code that demonstrates the use of Promise.allSettled().
//  Create multiple Promises where some resolve and others reject. Show how Promise.allSettled() 
//  can be used to handle these Promises, and how it differs from Promise.all().

// Skills Assessed: Advanced Promise handling and understanding the differences between Promise.all() and Promise.allSettled().

const promises = [
    Promise.resolve('resolve 1'),
    Promise.reject('reject 2'),
    new Promise((resolve, reject)=>resolve('resolve 3')),
    new Promise((resolve, reject)=>reject('reject 4'))
]

// Promise.all(promises).then(res => console.log('hhhhh', res))
Promise.allSettled(promises)
.then(results => {
    results.forEach(result => {
        if(result.status === 'fulfilled'){
            console.log('Fulfilled:', result.value);
        } else {
            console.log('Rejected:', result.reason);
        }
    })
})
.catch(error => {
    console.error('Error:', error);
});