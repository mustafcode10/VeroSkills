// more complex array with multiple object items
// looping through array items and using them in code
// selecting random item from array
// Common array methods to update the array values

const eleH1 = document.querySelector('h1')
const output = document.querySelector('.output')

const url = 'my6.json'

eleH1.addEventListener('click', data1)

function data1(){
    fetch(url)
    .then(res => res.json())
    .then(data => out1(data))
}

function out1(arr){
    const ran = Math.floor(Math.random()* arr.length)
    console.log('---', arr[ran])
    const val = arr[ran]
    arr.push(val)
    arr.forEach((ele, index, array)=>{
        console.log(ele)
        output.innerHTML+= `<div> ${ele.first} - ${ele.last} ${ele.id}</div>`

    })

}