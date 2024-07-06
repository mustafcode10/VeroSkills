//Function Declaration.
// function logger() {
//     console.log('My name is Mustaf')
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `juice with  ${apples} apples and orange ${oranges} oranges`
//     // console.log(juice)
//     return juice;

// }

// // fruitProcessor(5, 0)
// // restore function as variable

// const appleJuice = fruitProcessor(5,0)
// // console.log(appleJuice)

// const appleAndOrangeJuice = fruitProcessor(6,6)
// console.log(appleAndOrangeJuice)

//Function Declaration

// function calAge1(birthday) {
//     return 2024 - birthday
// }

// const age1 = calAge1(2001)
// console.log(age1)

// // Function Expression. It's good to use not getting Suprises.

// const calAge2 = function(birthday) {
//     return 2024 - birthday;
// }

// const age2 = calAge1(2001)
// console.log(age2)

// // ES6 Arrow Function
// // Arrow Functions have a different is scope and therefore a different this keyword.

// const calAge3 = (birthday, name )=> {
//     const age = 2024 - birthday;
//     return `${name} is ${age} years old`
// }

// const age3 = calAge3(2001, 'Mustaf')
// console.log(age3)

// const calAge4 = (birthday) => 2024 - birthday
// const age4 = calAge4(2001)
// console.log(age4)

// Call Function to another Function.

// const addTenYears = function(age){
//     return age + 10
// }

// const canRideRollerCoast = function(age) {
//     const tenYearsOlder = addTenYears(age)
//     // console.log('TenYearsOlder', tenYearsOlder)
//     return tenYearsOlder > 14

// }

// const canRide = canRideRollerCoast(8)
// console.log(canRide)

// Function Declaration.

function addYears(age) {
  return age + 10;
}

function canRideRollerCoast1(age) {
  const tenYearsOlder = addYears(age);
  if (tenYearsOlder > 14) {
    console.log("You can ride roller coaster");
    return true;
  } else {
    console.log("you are too young to ride roaler coast");
    return false;
  }
}

const canride1 = canRideRollerCoast1(8);

// Function Declaration
function sayHello(name) {
  return `Hello ${name}`;
}
console.log(sayHello("Mustaf"));

// Function Expression.
const sayHello2 = function (name) {
  return `Hello ${name}`;
};
console.log(sayHello2("John"));
//Function Arrow
const sayHello3 = (name) => `Hello ${name}`;
console.log(sayHello3("Chris"));
