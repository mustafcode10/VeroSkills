const numbers = [1, 5, 7, 2, 8, 3];
const evenNumbers = [2, 4, 6, 8, 10];

const people = [
  { name: "Jim", age: 21 },
  { name: "John", age: 25 },
  { name: "Sara", age: 20 },
  { name: "Peter", age: 30 },
  { name: "Joy", age: 18 },
  { name: "Dan", age: 44 },
];

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "The Art of Gathering", author: "Priya Parker" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Atomic habits", author: "James Clear" },
];

// filter()
const filteredNumbers = numbers.filter(function (num) {
  return num >= 5;
});

const filteredPeople = people.filter(function (person) {
  return person.age >= 21;
});

// find()
const foundNumber = evenNumbers.find(function (num) {
  return num > 6;
});

const targetAuthor = "James Clear";
const targetBook = books.find(function (book) {
  return book.author === targetAuthor;
});
console.log(targetBook);
