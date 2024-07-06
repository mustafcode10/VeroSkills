const numbers = [7, 4, 2, 6, 1, 3, 5];
const fruits = ["pear", "banana", "apple", "orange", "kiwi"];

const people = [
  { name: "Abe", age: 70 },
  { name: "Hope", age: 30 },
  { name: "Joey", age: 25 },
  { name: "Peter", age: 40 },
  { name: "Hanna", age: 23 },
];

// array.sort(compareFn)
numbers.sort();
fruits.sort().reverse();

people.sort((a, b) => b.age - a.age);

console.log(people);
