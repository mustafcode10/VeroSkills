//Array of numbers
 const numbers = [1, 2, 3, 4];

 // map  methods:
 const multipleNumber = numbers.map(num => num * 2)
//  numbers.forEach(num => console.log(num * 10))
 const oddNumbers =  numbers.filter(num => num % 2 !== 0);
 const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
 const averageNumbers = sumNumbers / numbers.length
 const evenNumber = numbers.find(num => num % 2 === 0)
 const ascendingNumbers = numbers.sort()
//  console.log(multipleNumber)
//  console.log(oddNumbers)
// console.log(sumNumbers)
// console.log(evenNumber)
// console.log(ascendingNumbers)
// console.log(averageNumbers)

// for(num of numbers){
//     console.log('num', num * 3)
// }

const person = { name: 'John', age: 30 };

// for( key in person){
//     console.log(`${key}: ${person[key]} `)
// }

// chaining method:
const filteredNumbers = numbers
.filter(num => num % 2 === 0)
.map(num => num * 2)
.sort()
.reduce((acc, curr) => acc + curr, 0);

// console.log(filteredNumbers)

// Array Destructing
const numbers2 = [1, 2, 3, 4]
const [one, two, three, four] = numbers2
console.log(one, two, three, four)

// Object Destructing
const person2 = {firstName: 'Mustaf', lastName: 'Abtidon', age: 25}
const {firstName, lastName, age} = person2
console.log('Destructing value',firstName, lastName, age)

//spread Operator Array
const newNumbers = [...numbers, 5, 6]
console.log(newNumbers)
//spread operator Object
const people = {...person, city: 'mogadishu', country: 'Somalia'}
console.log(people)

// Rest Parameter

function sum2(...numbers){
    return numbers.reduce((acc, curr)=> acc + curr, 0)
}
// console.log(sum2(10,20,30,40))

// shorthand object
const firstName3 = 'Mustaf'
const age3 = 20
const person3 = {firstName3, age3}
console.log(person3)


const person10 = {
    name10: "Alice",
    age10: 25
  };
  
  const { name10, age10 } = person10;  // Destructuring
  console.log(name10, age10)
  
  const anotherPerson = { name10, age10 };  // Shorthand properties
  console.log(anotherPerson);  // { name10: 'Alice', age10: 25 }
  

  /////////////////////////////////////////////////////
  console.log('--------part two -------')

  const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
];

const names = users.map(user => user.name)
users.forEach(user => user.name)
// filter 
const ages = users.filter(user => user.age >= 25)
// find a user John
const user = users.find(user => user.name = 'John')
// reducer
const totalAge = users.reduce((acc, curr)=> acc + curr.age, 0)
// sort 
users.sort((a, b) => b.age - a.age)

// console.log(names)
// console.log(ages)
// console.log(user)
console.log(totalAge)
console.log(users)


////////// loops //////
for (const user of users){
    console.log('user', user) // { name: 'Jim', age: 35 } { name: 'John', age: 30 }{ name: 'Jane', age: 25 }
}

const user15 = {name: 'mustaf', age: 30}
for(const key in user15){
    console.log(`${key}: ${user15[key]}`) //name: mustaf  age: 30

}

// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 }
// ];

//Chaining Methods:

const agesGreather25 = users
.filter(user => user.age > 25)
.sort()
.map(user => ({ ...user, age: user.age }))
.reduce((acc, curr)=> acc + curr.age, 0)

// console.log(agesGreather25)

// Array Destructuring with Objects
// Extracting values from arrays of objects.
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 }
// ];
const [firstUser, secondUser] = users
console.log(firstUser)

// Object Destructing
const cat = {name66: 'meow', age66: 5}
const {name66, age66} = cat
console.log(name66, age66) 

// Template Literals & String Interpolation
// const dog = {name66: 'meow', age66: 5}
const greet = `I am cat and my name ${cat.name66} and my age ${cat.age66}`
console.log(greet)

// spread operator array and Object
const arr1 = [1, 2, 3, 4]
const arr2 = [...arr1, 5, 6, 7]
console.log(arr2)

// Object shorthand
const user20 = {name: 'mustaf', age: 25}
const user21 = {...user20, city: 'Mogadishu', country: 'Somalia'}
console.log(user21)

const first_name = 'mustaf'
const last_name = 'abtidon'
const email = 'm@gmail.com'
const pass = '123@123'
const address =  'lyndale'
const state = 'MN'


const userInfo = {first_name, last_name, email, pass, address, state}
console.log(userInfo)

// Rest Parameter
function totalNumbers(...numbers){
 return numbers.reduce((acc, curr)=> acc + curr, 0)
}

console.log(totalNumbers(10, 20, 30, 35))

import {add} from './math.js'

console.log(add(2, 4))


