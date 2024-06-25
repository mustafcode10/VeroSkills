// You have two objects, rectangle and square. 
// The rectangle object has a method to calculate the area. Use .call() to borrow this method for the square object.

// Define the rectangle object with a method to calculate the area
const rectangle = {
    width: 0,
    height: 0,
    calculateArea: function() {
        return this.width * this.height;
    }
};

// Define the square object
const square = {
    sideLength: 0
};

// Set the width and height of the rectangle to the side length of the square
square.width = square.sideLength;
square.height = square.sideLength;

// Define a method to calculate the area of the square by borrowing the rectangle's method
square.calculateArea = function() {
    return rectangle.calculateArea.call(this);
};

// Example usage
square.sideLength = 5;
square.width = square.sideLength;
square.height = square.sideLength;

console.log(square.calculateArea()); // Outputs: 25



// You are tasked with creating a class hierarchy for a library system. This system needs to handle different types of library items and provide detailed information about each item. Follow these steps to complete the task:

// Create a base class Item:

// Add a private field #id and a constructor that initializes the id.
// Provide a getter method for id.
// Create a subclass Book that extends Item:

// Add additional properties title and author, and initialize them using the constructor.
// Use Object.defineProperty() to make the title property non-writable and non-enumerable.
// Create a prototype object libraryBookPrototype from the Book prototype using Object.create():

// Add a method getDetails() to the prototype, which returns a string with the book's id, title, and author.
// Create a LibraryBook class that extends the Book class using Object.assign():

// Include the getDetails() method from libraryBookPrototype.
// Demonstrate the use of the instanceof keyword:

// Verify the inheritance hierarchy.
// Create an instance of LibraryBook and demonstrate its functionality:

// Show that you can access the id, title, and author, and that the title property is non-writable.
// Use the getDetails() method to display the book's details.
// Use instanceof to confirm the instance's type.


// Step 1: Create the base class Item
class Item {
    #id;
  
    constructor(id) {
      this.#id = id;
    }
  
    getId() {
      return this.#id;
    }
  }
  
  // Step 2: Create the subclass Book
  class Book extends Item {
    constructor(id, title, author) {
      super(id);
      Object.defineProperty(this, 'title', {
        value: title,
        writable: false,
        enumerable: false
      });
      this.author = author;
    }
  }
  
  // Step 3: Create libraryBookPrototype
  const libraryBookPrototype = Object.create(Book.prototype);
  libraryBookPrototype.getDetails = function() {
    return `ID: ${this.getId()}, Title: ${this.title}, Author: ${this.author}`;
  };
  
  // Step 4: Create LibraryBook class
  class LibraryBook extends Book {
    constructor(id, title, author) {
      super(id, title, author);
    }
  }
  Object.assign(LibraryBook.prototype, libraryBookPrototype);
  
  // Step 5: Demonstrate instanceof keyword
  const libBook = new LibraryBook(1, 'The Great Gatsby', 'F. Scott Fitzgerald');
  
  console.log(libBook instanceof LibraryBook); // Output: true
  console.log(libBook instanceof Book);        // Output: true
  console.log(libBook instanceof Item);        // Output: true
  
  // Step 6: Demonstrate instance functionality
  console.log(libBook.getId());                 // Output: 1
  console.log(libBook.author);                  // Output: F. Scott Fitzgerald
  console.log(libBook.getDetails());            // Output: ID: 1, Title: The Great Gatsby, Author: F. Scott Fitzgerald
  
  // Attempt to change the title property
  libBook.title = 'New Title';
  console.log(libBook.title); // Output: The Great Gatsby (title is non-writable)

