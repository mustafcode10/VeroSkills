const numbers = [1, 2, 3, 4, 5];

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "The Art of Gathering", author: "Priya Parker" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Atomic habits", author: "James Clear" },
];

const names = ["abra", "bo", "guil", "hanna", "jacob", "kayla"];

// map 
const multipliedNumbers = numbers.map(num => num * 2)
const capitalizedNames = names.map( name => name.charAt(0).toUpperCase() + name.split(1))
// const bookTitles = books.map(book => book.title)
// console.log(bookTitles)

const evenNumbers = [2, 4, 6, 8, 10];

const people = [
  { name: "Jim", age: 21 },
  { name: "John", age: 25 },
  { name: "Sara", age: 20 },
  { name: "Peter", age: 30 },
  { name: "Joy", age: 18 },
  { name: "Dan", age: 44 },
];
// Filter
// Creates a new array with all elements that pass the test implemented by the provided function.
const evens =  evenNumbers.filter(num => num % 2 === 0)
const filteredNumbers = numbers.filter( num => num > 3)
const filteredPeople = people.filter(person => person.age >= 30)
console.log(filteredPeople)

// find
const foundNumber = numbers.find(num => num > 3)
const targetBook =  books.find(book => book.author === 'Priya Parker')
console.log(targetBook)

// reducer
const expenses = [
    { category: "Food", amount: 25 },
    { category: "Transportation", amount: 10 },
    { category: "Food", amount: 15 },
    { category: "Housing", amount: 100 },
    { category: "Transportation", amount: 20 },
  ];

const totalAmount =  expenses.reduce((acc, curr)=> acc + curr.amount, 0 );
console.log(totalAmount)

const totalByCategory =  expenses.reduce((acc, curr) => {
    if(acc[curr.category]){
        acc[curr.category] += curr.amount
    } else {
        acc[curr.category] = curr.amount
    }
    return acc;

},{})

console.log(totalByCategory)

//////
// sort 
const numbers2 = [7, 4, 2, 6, 1, 3, 5];
const fruits = ["pear", "banana", "apple", "orange", "kiwi"];

numbers2.sort()
fruits.sort().reverse()
// console.log(fruits)

// chaining method

const filteredPeople2 =  people
.filter(person => person.age > 25)
.map(person => ({...person, name: person.name}))
.sort()
.reduce((acc, curr) => acc + curr.age, 0)

// console.log(filteredPeople2)


const destructuringNumbers = [1, 2];

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

  const [one, two, three = 3 ] =  destructuringNumbers
  const [fl, ca, ny] =  getStates()
  console.log(one, two, three, fl, ca)

/////////////////
const pet = {
    animal: "dog",
    name1: "Joey",
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

  const {animal, name1, breed, age} = pet
  const {make, model, year} = getCarInfo()

  console.log(animal, name1, make, model)

  function greetPet({ name1, breed, age}){
    return console.log(`Hi my name ${name1}  the breed ${breed} You are ${age} years old`)

  }
 
  greetPet(pet)
/////////////////

// spread
const brass = ["trumpet", "trombone"];
const woodwind = ["alto sax", "tenor sax", "bari sax"];
const rhythm = ["piano", "bass", "drums"];

const myBand = [...brass, ...woodwind, ...rhythm]
console.log(myBand)

const originalArray = ["a", "b", "c"];

const newArray = [...originalArray, "d", "e", "f"]

// console.log(newArray)

// Rest Parameters: Allow functions to accept any number of arguments.
function myFruits(...fruits) {
    const [fruit1, fruit2, ...otherFruits] = fruits;
    console.log(otherFruits);
    console.log(`My favorite fruits are ${fruit1} and ${fruit2}!`);
  }
  
  myFruits("apples", "grapes", "oranges", "peaches", "kiwis");
  
  function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  console.log(findMax(10, 20, 30, 40, 50, 60, 70, 2000));



// Object shorthand synthax
const firstName = "Marty";
const lastName = "McFly";
const hobby = "skateboarding";

const timeTraveler = {
  firstName,
  lastName,
  hobby,
};

const person = {
  name: "Lorraine",
  age: 30,
  sayHello() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

const name = "Luigi";
const lives = 36;

const character = {
  name,
  lives,
  jump() {
    console.log(`Boing! ${this.name} has ${this.lives} lives!`);
  },
};


character.jump();


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
  
  // Unique values with Set objects
  const mySet = new Set([1, 2, 3, 4]);
  
  const uniqueItems = new Set(items);
  const uniqueItemsArray = [...uniqueItems];
  
  const uniquePrices = new Set(prices);
  const uniquePricesArray = [...uniquePrices];
  console.log(uniquePricesArray);







