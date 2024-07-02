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

// Exercise:
// Create a promise that resolves after 3 seconds with a message "Hello, World!" and logs the message using .then.

function myPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve('Hello world')
        }, 3000)

    })
}

myPromise().then(res => console.log(res))

// Exercise:
// Write an async function that waits for 1 second and then returns a message "Async/Await is cool!". 
// Log the message using await.

async function waitingPromise(){
    let promise =  new Promise((resolve)=>{
       setTimeout(()=>{
        resolve('Async/Await is cool!')
       })
    }, 4000)

    let result = await promise
    console.log(result)
}

waitingPromise()


//// Fetch

async function fetUser(){
    let fetchResult = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let user = await fetchResult.json()
    console.log(user)
}

// fetUser()

// Exercise:
// Write an async function that fetches data from https://jsonplaceholder.typicode.com/posts and logs the first post.

async function fetchPosts(){
    let fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await fetchResult.json()
    console.log(posts)
}

// fetchPosts()
// Write a function that simulates a delay using setTimeout and then calls a callback function to log a message.

function delayMsg(callback){

        setTimeout(()=>{
           callback('hahahha call back')
        }, 2000)

}

function handleCallback(data){
    console.log(data)
}

delayMsg(handleCallback)

const myPromise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('hahahaha new promise')
    }, 3000)

})

myPromise2.then(res => console.log(res))


// Exercise Solution:
// Write an async function that waits for 1 second and then returns a message "Async/Await is cool!". 
// Log the message using await.

function coolMsg(){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve('Async/Await is cool! hahahhaha')
        }, 1000)
    })

}
async function logMsg(){
    let msg = await coolMsg()
    console.log(msg)

}
logMsg()


// Create a promise that simulates fetching user data. Use .finally to log a message "Fetch attempt completed"
// after the promise is settled.

function fetchDataPromise(){
    return new Promise((resolve)=>{
      setTimeout(()=> {
        resolve('success')
      })
    })
}

fetchDataPromise().then(res => console.log(res))
fetchDataPromise().finally(() => console.log('Fetch attempt completed'))

// Another way

const fetchDataUserPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            name: 'Mustaf',
            age: 25
        })
    })

})

fetchDataUserPromise.then(data => console.log(data))
fetchDataUserPromise.finally(()=> console.log('Fetch attempt completed finally'))

