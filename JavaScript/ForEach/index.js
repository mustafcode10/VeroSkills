const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

let sum = 0;

numbers.forEach(function (number) {
  squaredNumbers.push(number * number);
});

console.log(squaredNumbers);