const  numbers = [1, 2, 3, 4]

const multipliedNumbers =  numbers.map(num => num * 2)

const newArr = []
numbers.forEach(num => newArr.push(num * 2))

console.log(multipliedNumbers)
console.log(newArr)

for (const num of numbers){
    console.log(num)

}

const person = {
    name: 'John',
    age: 25
}

for (const key in person){
    console.log(`${key} : ${person[key]}`)

}

const evens =  numbers.filter( num => num % 2 === 0)
const findEven = numbers.find(num => num % 2 === 0)
console.log('even', evens)
console.log('findeven', findEven)


// Write a function that uses .filter() to return all even numbers from an array and 
// another function that uses .find() to return the first even number from an array.]

// Write a function using .reduce() to calculate the sum of an array of

const sum = numbers.reduce((acc, curr)=> acc + curr, 0);

numbers.sort().reverse()
console.log(numbers)

const people = [
    { name: "Jim", age: 21 },
    { name: "John", age: 25 },
    { name: "Sara", age: 20 },
    { name: "Peter", age: 30 },
    { name: "Joy", age: 18 },
    { name: "Dan", age: 44 },
  ];

const filteredPeople =  people
.filter(person => person.age > 25)
.map(person => (person.name))

console.log(filteredPeople)

const [first, second, third] = numbers

console.log(first, second, third)

// Obj Destructing
const person2 = {
    firstname: 'John',
    age: 26

}

const {firstname, age} = person2
console.log(firstname, age)

const x = 2
const y = 4
const sumNumber = `the sum of ${x} and ${y} is ${x + y}`
console.log(sumNumber)

// spread Operator
const arr  = [1, 2 ]
const newArr2 =  [...arr, 3, 4 ]
console.log(newArr2)

// rest 
function sum10(...numbers){
 return numbers.reduce((acc, curr)=> acc + curr, 0)
}

console.log(sum10(10, 20, 30))


// set
const numbers10 = [1, 2, 2, 3, 4, 4, 5];
const uniqNumbers =  new Set(numbers10)
const uniqNumbersArray = [...uniqNumbers]
console.log(uniqNumbersArray)


// import 
import {add} from './math.js'

console.log(add(2, 4))


// Create a promise that resolves with a greeting message after 1 second. 
// Use async/await to wait for the promise and log the message.s

 const greetingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });