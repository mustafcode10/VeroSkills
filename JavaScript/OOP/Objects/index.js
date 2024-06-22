///////////////////////////////////////////////////////
// Js Object
// Collection of unodered key/value pairs
// Key must be string or evaluated to string
// Values can be any type ({obj}, [], string)
// Can only be looped with for in loop
// Building block of js
///////////////////////////////////////////////////////

// A regular for loop can be used to loop through arrays, strings, but not Objects
const obj = {
    name: 'Mustaf',
    age: 25
}

for (const key in obj) {
  console.log(`${key} : ${obj[key]}`)
}

const person = {
    name: 'John',
    email: 'John@gmail.com',
    greet: function(){
        console.log(`hello ${this.name}`)
    }
}

// Method
person.greet()

// another way 
console.log('Keys ', Object.keys(person))
console.log('Values ', Object.values(person))
console.log(person.hasOwnProperty('name'))


const sum = 2 + 3

const obj2 = {
    name: 'Mustaf',
    age: 25,
    1: 'one',
    [sum]: 'five'
}

// access property obj2

console.log(obj2['1'])
console.log(obj2)