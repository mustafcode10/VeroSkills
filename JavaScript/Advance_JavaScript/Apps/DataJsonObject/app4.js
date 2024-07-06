// JavaScript Objects and JSON
// JavaScript Object and Array
// Bracket notation and dot notation
// JSON data and difference
// how to get JSON data as a JavaScript Object

const eleH1 = document.querySelector('h1')
const url = 'my4.json'

eleH1.addEventListener('click', ()=> {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.name)
    })
   
})


const myObj1 = {
    first: 'Mustaf',
    "last": "Abtidon",
    id: 10,
    'zip code': 55544
}

const myArr1 = ['Mustaf', 'Abtidon', 10, myObj1]

// Object
console.log(myObj1)
console.log(myObj1.first)
console.log(myObj1['last'])
console.log(myObj1['zip code']) // benefit []

// Array
console.log(myArr1)
console.log(myArr1[3])
console.log(myArr1[3].id)
const myStr = 'id'
console.log(myArr1[3][myStr])
