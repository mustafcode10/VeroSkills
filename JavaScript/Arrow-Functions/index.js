const numbers = [2, 4, 6, 8, 10, 12];

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "The Art of Gathering", author: "Priya Parker" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Atomic habits", author: "James Clear" },
];

// map()
const multipliedNumbers = numbers.map(num => num * 2);

// forEach()
numbers.forEach(num => console.log(num * num));

// filter()
const filteredNumbers = numbers.filter(num => num >= 5);

// find()
const targetBook = books.find(book => book.author === "Priya Parker");
console.log(targetBook);