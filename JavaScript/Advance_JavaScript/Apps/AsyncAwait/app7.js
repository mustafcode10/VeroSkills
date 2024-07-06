// Asyn and Await
// Using async and await is another way to create promises
// Promises are an ideal way to handle data that is not available right away 
// as you can asynchronously make the request and then handle it once the data is returned.
// Promises run after the initial code is stated, which allow time for resolving the response to the request.
// Async and await can be used for asynchronous functions
// Async is placed in front of the function to turn it into an async function.  
// This will cause the function to return a promise back. 
// Await allows you to pause the code until the promise is fulfilled.

const eleH1 = document.querySelector('h1')
const output = document.querySelector('.output')

outputData()
async function outputData(){
    const myOutput = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Mustaf Abtidon');
        }, 3000)
    })
    output.innerHTML += 'Await Pause<br>';
    const val1 = await myOutput
    output.innerHTML += val1 + '<br>';
}

function greeting(delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Mustaf Abtidon ' + delay)
        }, delay)
    })
}

async function welcome(delay){
    const val = await greeting(delay)
    output.innerHTML += val + '<br>'
    console.log(val)
}
welcome(14000)
welcome(4000)
welcome(8000)
welcome(1000)