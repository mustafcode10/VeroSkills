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
const multipliedNumbers =  numbers.map(num => num * 2);
console.log(multipliedNumbers)

const bookTitles =  books.map(function( book, i){
  return i + " - " + book.title
})

const capitalizedNames =  names.map(function(name){
 return name.charAt(0).toUpperCase() + name.slice(1)
});

// console.log(bookTitles)

console.log(capitalizedNames)


