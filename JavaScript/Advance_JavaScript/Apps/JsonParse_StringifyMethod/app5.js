// JSON.parse() method parses a JSON string
// JSON.stringify() method converts a value to a JSON string

const eleH1 = document.querySelector('h1')
const output = document.querySelector('.output')

eleH1.addEventListener('click', fun2)

const url = 'my5.json'

function fun1(){
    fetch(url)
    .then(res => res.text()).then(data => {
        outputter1(data)
    })

}
function outputter1(val){
    const obj1 = JSON.parse(val)
    // console.log(obj1)
    output.textContent = `${obj1.first} ${obj1.last} ${obj1.id}`
}
function fun2(){
    fetch(url)
    .then(res => res.json()).then(data => {
        outputter2(data)
    })

}
function outputter2(obj1){
    // console.log(obj1)
    const obj2 = JSON.stringify(obj1)
    console.log(obj2)
    output.textContent = `${obj1.first} ${obj1.last} ${obj1.id} ${obj2}`
}



