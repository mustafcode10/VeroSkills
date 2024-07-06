// Catch method in the promise allows for error handling
// You can also use try and throw for custom error handling.
// Promises can be chained together, that once the promise resolves
//  it will move the code to the next step where the response object is the function result.

const eleH1 = document.querySelector('h1')
const output = document.querySelector('.output')
eleH1.textContent = 'Click Me'
const url = 'my8.json'

eleH1.addEventListener('click', getFileValue)

async function getFileValue(){
    const responseValue = await fetch(url)
    const myValue1 = await responseValue.json()
    // console.log(myValue1)
    output.innerHTML = `<div>${myValue1.first} ${myValue1.last} </div>`
    outputTest()
}

async function outputTest(){
    try {
        let rep = await Promise.resolve('Hello');
        if(!rep.ok){
            throw new Error('Error oh no')
        }
    } catch(error){
         console.log(error)
    }
}

//////////////////////////////////////////////////////////////
//////////////////////// PART TWO  ///////////////////////////
//////////////////////////////////////////////////////////////

fun1()
fun2()
fun3()
async function fun1(){
    console.log('one')
    let rep = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('five')
        }, 5000)
    })
    const val = await rep
    console.log(val)
}

function fun2(){
    console.log('two')
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log('four')
        return data;
    })
}

async function fun3(){
    let rep = await Promise.resolve('three')
    console.log(rep)
}