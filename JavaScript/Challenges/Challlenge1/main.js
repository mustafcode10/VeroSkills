// Deatructing Array and Object


//Array
const numbers = [1, 2, 3]
const [first, second, third] = numbers

// console.log(first, second, third)

function getStates() {
    return ["florida", "california", "new york", "oregon"];
  }

  const car = {
    make: "Tesla",
    model: "Model 3",
    year: "2023",
    range: "315mi",
    color: "Deep Blue Metallic",
  };

  const [fl, ca, ny, or] = getStates()

  for (const [key, value] of Object.entries(car)){
     console.log(`${key} : ${value}`)
  }

//   console.log(first, second, third, fl, ca)


// Destructing Object
  const pet = {
    animal: "dog",
    name: "Joey",
    breed: "australian shepherd",
    age: 11,
  };
  
  function getCarInfo() {
    return {
      make: "Tesla",
      model: "Model 3",
      year: "2023",
      color: "Deep Blue Metallic",
    };
  }

const {animal, name, breed, age } = pet
const {make, model, year, color} = getCarInfo()

console.log(animal, name, breed, age, make, model, year, color)

// fuction destructing

function greetPet({name, breed, age}){
    return console.log(`Hi ${name} and the breed ${breed} and you are ${age} years old`)
}

greetPet(pet)

// Template literals

function sayHello(name){
    return `Hello ${name}`
}

const message = `${sayHello('Mustaf')} How are you doing`
console.log(message)

console.log(`Hi I am a ${animal} named ${name} I am breed ${breed} and ${age} years old `)

const x = 5
const y = 10
const sum = `The sum of ${x} and ${y} is ${x + y}!`
console.log(sum)

/////////////////// Spread Operator
const brass = ["trumpet", "trombone"];
const woodwind = ["alto sax", "tenor sax", "bari sax"];
const rhythm = ["piano", "bass", "drums"];

const aus = {
    animal: "dog",
    breed: "Australian shepherd",
  };
  
  const joey = {
    name: "Joey",
    age: "11",
  };


const myBand = [...brass, ...woodwind, ...rhythm]
console.log(myBand)

const myPet = {
    ...aus,
    ...joey,
    color: 'red',
    mood: 'playful'
}


console.log(myPet)

// Rest Parameter

function myFruits(...fruits){
    const [fruit1, fruit2, ...otherFruits] = fruits
    console.log('other fruits', otherFruits)
    console.log(`my favorite fruits are ${fruit1}, ${fruit2}`)
}

myFruits("apples", "grapes", "oranges", "peaches", "kiwis");

function sum2(...numbers){
 return numbers.reduce((acc, curr)=> acc + curr, 0)
}

console.log(sum2(1,2,3,4))


function findMax(...numbers){
 return Math.max(...numbers)
}

console.log(findMax(10, 20, 40, 30))

//// object shorthand synthax

const firstName = 'John'
const lastName = 'Doe'
const age1 = 26

const person = {
    firstName,
    lastName,
    sayHi(){
        return console.log(`Hi my name ${firstName} and ${lastName}`)
    }

}

person.sayHi()

///////// Set

const items = [
    "apple",
    "banana",
    "orange",
    "banana",
    "kiwi",
    "orange",
    "banana",
  ];
  
  const prices = [25, 50, 75, 100, 50, 25, 120];

  const uniqueItems = new Set(items)
  const uniqueItemsArray = [...uniqueItems]

  const uniquePrices =  new Set(prices)
  const uniquePricesArray = [...uniquePrices]

  console.log(uniqueItemsArray)
  console.log(uniquePricesArray)


  // import 

  import  {add}  from './math.js'
  console.log(add(2, 8))

  
