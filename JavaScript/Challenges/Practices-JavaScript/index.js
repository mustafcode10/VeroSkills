// Conclusion
// Mastering these JavaScript concepts will make your code more efficient, readable, and maintainable. 
// Here's a quick recap:

// Array Methods: Use map, forEach, filter, find, reduce, and sort to manipulate arrays.
// Loops: for...of for iterating over iterable objects and for...in for enumerating object properties.
// Chaining Methods: Combine multiple array methods to process data in a single statement.
// Destructuring: Extract values from arrays and objects easily.
// Template Literals: Create complex strings and embed expressions using backticks and ${}.
// Spread Operator: Expand arrays and objects for easier data manipulation.
// Rest Parameters: Allow functions to accept any number of arguments.
// Shorthand Syntax: Simplify object creation when property and variable names match.
// Modules: Organize code into reusable files with import and export.


/////////////////////////////////////////////////////////////////////////////
/////////////////////////     PART ONE    //////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// Array Methods: map, forEach, filter, find, reduce, sort

 //Array of numbers
const numbers = [1, 2, 3, 4];

// 1 map Method:
// Creates a new array with the results of calling a provided function on every element in the calling array.
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// 2 forEach Method:
// Executes a provided function once for each array element.
numbers.forEach(num => console.log(num));

// 3 filter Method:
// Creates a new array with all elements that pass the test implemented by the provided function.
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// 4 find Method:
// Returns the value of the first element in the array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// 5 reduce Method:
// Executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10

// 6 sort Method:
// Sorts the elements of an array in place and returns the array. 
// The default sort order is built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.
numbers.sort((a, b) => a - b); // for ascending order
console.log(numbers); // [1, 2, 3, 4]
// numbers.sort((a, b) => b - c); // for descending order


// for...of Loop:
// Iterates over iterable objects (like arrays, strings, etc.) and returns the values of the iterable.
for (const num of numbers) {
    console.log(num);
}

// for...in Loop:
// Iterates over enumerable properties of an object (including inherited properties).
const person = { name: 'John', age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


// Chaining Methods
// Combining multiple array methods in a single statement.
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
console.log(result); // 12 (because (2*2) + (4*2) = 4 + 8 = 12)


// Array Destructuring
// Extracting values from arrays or objects into distinct variables.
const numbers2 = [1, 2, 3];
const [one, two, three] = numbers2;
console.log(one, two, three); // 1 2 3

// Object Destructuring
// Extracting values from objects into distinct variables.
const person2 = { name: 'John', age: 30 };
const { name, age } = person2;
console.log(name, age); // John 30

// Template Literals & String Interpolation
// Template literals allow for easier string creation and embedding expressions 
// within strings using backticks (`) and ${} syntax.
const name2 = 'John';
const age2 = 30;
const greeting = `Hello, my name is ${name2} and I am ${age2} years old.`;
console.log(greeting); // "Hello, my name is John and I am 30 years old."

// Spread Operator for Arrays and Objects
// The spread operator (...) allows for expanding an array or object into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1, city: 'New York' };
console.log(obj2); // { name: 'John', age: 30, city: 'New York' }

// Rest Parameters
// Rest parameters (...) allow a function to accept an indefinite number of arguments as an array.
function sum2(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum2(1, 2, 3, 4)); // 10

// Shorthand Syntax for Object Property and Value
// When the property name and variable name are the same, you can use shorthand syntax in object literals.
const name3 = 'John';
const age3 = 30;
const person3 = { name3, age3 };
console.log(person3); // { name3: 'John', age3: 30 }


// Importing and Exporting Modules
// Modules allow for splitting code into separate files and importing/exporting functionality.

// In main.js
import { add, pi } from './math.js';

console.log(add(2, 3)); // 5
console.log(pi); // 3.14159

/////////////////////////////////////////////////////////////////////////////
/////////////////////////     PART TWO   //////////////////////////////////
////////////////////////////////////////////////////////////////////////////

/// map Method:
// Creates a new array with the results of calling a provided function on every element in the calling array.
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane', 'Jim']

// forEach Method:
// Executes a provided function once for each array element.
users.forEach(user => console.log(user.name));
// Output: 'John', 'Jane', 'Jim'

// filter Method:
// Creates a new array with all elements that pass the test implemented by the provided function.
const adults = users.filter(user => user.age >= 30);
console.log(adults); 
// Output: [ { name: 'John', age: 30 }, { name: 'Jim', age: 35 } ]

// find Method:
// Returns the value of the first element in the array that satisfies the provided testing function.
const user = users.find(user => user.name === 'Jane');
console.log(user); 
// Output: { name: 'Jane', age: 25 }

// reduce Method:
// Executes a reducer function on each element of the array, resulting in a single output value.
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 90

// sort Method:
// Sorts the elements of an array in place and returns the array.
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 }
// ];
users.sort((a, b) => a.age - b.age);
console.log(users); 
// Output: [ { name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jim', age: 35 } ]

// Loops: for of and for in
// for...of Loop:
// Iterates over iterable objects (like arrays) and returns the values.
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 }
// ];
for (const user of users) {
    console.log(user.name);
}
// Output: 'John', 'Jane', 'Jim'


// for...in Loop:
// Iterates over enumerable properties of an object.
const user1 = { name: 'John', age: 30, city: 'New York' };
for (const key in user1) {
    console.log(`${key}: ${user1[key]}`);
}
// Output: 'name: John', 'age: 30', 'city: New York'

// Chaining Methods with Objects
// Combining multiple array methods in a single statement.
const result2 = users
    .filter(user => user.age > 25)
    .map(user => ({ ...user, age: user.age + 1 }))
    .reduce((acc, user) => acc + user.age, 0);
console.log(result2); // 66 (31 + 36)

// Array Destructuring with Objects
// Extracting values from arrays of objects.
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 }
// ];
const [firstUser, secondUser] = users;
console.log(firstUser, secondUser);
// Output: { name: 'John', age: 30 }, { name: 'Jane', age: 25 }

// Object Destructuring
// Extracting values from objects into distinct variables.

const user2 = { name1: 'John', age1: 30, city: 'New York' };
const { name1, age1, city } = user2;
console.log(name1, age1, city); // Output: 'John', 30, 'New York'

// Template Literals & String Interpolation
// const user = { name: 'John', age: 30 };
const greeting2 = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
console.log(greeting2); // "Hello, my name is John and I am 30 years old."

// Spread Operator for Arrays and Objects
// Arrays:
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 }
// ];
const moreUsers = [
    ...users,
    { name: 'Jim', age: 35 }
];
console.log(moreUsers);
// Output: [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jim', age: 35 } ]

// Object:
// const user = { name: 'John', age: 30 };
const updatedUser = { ...user, city: 'New York' };
console.log(updatedUser); // { name: 'John', age: 30, city: 'New York' }

// Rest Parameters
function introduce(...users) {
    users.forEach(user => console.log(`Hello, my name is ${user.name} and I am ${user.age} years old.`));
}
const user4 = { name: 'John', age: 30 };
const user5 = { name: 'Jane', age: 25 };
introduce(user4, user5);
// Output: 'Hello, my name is John and I am 30 years old.', 'Hello, my name is Jane and I am 25 years old.'

// Shorthand Syntax for Object Property and Value
const name6 = 'John';
const age6 = 30;
const user6 = { name6, age6 };
console.log(user6); // { name6: 'John', age6: 30 }

// Importing and Exporting Modules
import { user7, greet } from './user.js';

console.log(greet(user7)); // "Hello, my name is John and I am 30 years old."








