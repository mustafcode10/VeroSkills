console.log('hello')

const eleH1 = document.querySelector('h1')
const  output = document.querySelector('.output')

const promise1 = new Promise((resolve, reject)=>setTimeout(resolve, 1000, 'hello') )
const promise2 = new Promise((resolve, reject)=>setTimeout(resolve, 2000, 'world') )
console.log(promise1, promise2)




function getDataFromPromises(){
    
    Promise.all([promise1, promise2]).then((res)=> {
        console.log(res)
        res.forEach(val => console.log(val))

    })
}
// getDataFromPromises()


const url1 = "https://jsonplaceholder.typicode.com/posts/1"
const url2 = "https://jsonplaceholder.typicode.com/posts/2"

const urls = [url1, url2]
console.log(urls)

function getData(){
    const requests =  urls.map(url => fetch(url).then(res =>res.json()))
    Promise.all(requests).then(displayData)

}
getData()
function displayData(arr){
    arr.forEach(val => console.log('------', val.title))

}
///////////////////////////////////////////////////////////////////////////
// Implement a function sequentialExecution that takes an array of functions 
// (each accepting a callback
// and executes them sequentially. Each function should wait for the previous one to complete before starting.

