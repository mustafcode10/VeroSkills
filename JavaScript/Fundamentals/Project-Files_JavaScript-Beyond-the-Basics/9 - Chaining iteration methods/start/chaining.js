const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const people = [
  { name: "Alice", age: 30 },
  { name: "Hope", age: 19 },
  { name: "Ben", age: 25 },
  { name: "Charlie", age: 50 },
  { name: "Dana", age: 28 },
  { name: "Joey", age: 43 },
];

// Chaining methods

const filteredPeople = people
.filter(person => person.age >= 30)
.map(person => person.name);

console.log(filteredPeople)

const results = numbers
.map(num => num * 2)
.filter(num => num >= 5)
.reduce((acc, curr) => acc + curr, 0)

console.log(results)
