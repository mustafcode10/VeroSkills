// ES6 Classes and Inheritance
// Prompt: Write an ES6 class Rectangle with properties length and width and a method to calculate the area. 
// Then create a subclass Square that inherits from Rectangle and includes a constructor that only requires one side length.

// Skills Assessed: ES6 classes, class methods, class inheritance.

class Rectangle {
    constructor(length, width){
        this.length = length
        this.width = width

    }

    calculateArea(){
        return this.length * this.width
    }
}

const rectangle1 = new Rectangle(4,2)
console.log(rectangle1.calculateArea())

class Square extends Rectangle {
    constructor(length){
        super(length, length)
    }

}

const square1 =  new Square(6)

console.log(square1.calculateArea())


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





// Certainly! Here are some exercises that build upon similar concepts, involving class hierarchies, inheritance, and prototype manipulation in JavaScript:

// Exercise 1: Multimedia Library System
// Create a class hierarchy for a multimedia library system. This system should handle different types of media items such as books, DVDs, and CDs.

// Requirements:
// Base Class MediaItem:

// Add a private field #id and a constructor that initializes the id.
// Provide a getter method for id.
// Subclass Book:

// Extend MediaItem.
// Add additional properties title and author, and initialize them using the constructor.
// Make the title property non-writable and non-enumerable.
// Subclass DVD:

// Extend MediaItem.
// Add additional properties title and director, and initialize them using the constructor.
// Make the title property non-writable and non-enumerable.
// Subclass CD:

// Extend MediaItem.
// Add additional properties title and artist, and initialize them using the constructor.
// Make the title property non-writable and non-enumerable.
// Create Prototypes:

// Create a prototype object mediaItemPrototype from the MediaItem prototype using Object.create.
// Add a method getDetails() to the prototype that returns a string with the item's id and title.
// Create Derived Classes:

// Create classes LibraryBook, LibraryDVD, and LibraryCD that extend Book, DVD, and CD respectively using Object.assign.
// Include the getDetails() method from mediaItemPrototype.
// Instance Creation and Demonstration:

// Create instances of LibraryBook, LibraryDVD, and LibraryCD.
// Show that you can access the id, title, and respective properties.
// Demonstrate that the title property is non-writable.
// Use the getDetails() method to display item details.
// Use instanceof to confirm the instance's type.

// Base Class MediaItem
class MediaItem {
    #id;
  
    constructor(id) {
      this.#id = id;
    }
  
    get id() {
      return this.#id;
    }
  }
  
  // Subclass Book
  class Book extends MediaItem {
    constructor(id, title, author) {
      super(id);
      this.author = author;
      Object.defineProperty(this, 'title', {
        value: title,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass DVD
  class DVD extends MediaItem {
    constructor(id, title, director) {
      super(id);
      this.director = director;
      Object.defineProperty(this, 'title', {
        value: title,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass CD
  class CD extends MediaItem {
    constructor(id, title, artist) {
      super(id);
      this.artist = artist;
      Object.defineProperty(this, 'title', {
        value: title,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Create Prototypes
  const mediaItemPrototype = Object.create(MediaItem.prototype);
  
  // Add a method getDetails() to the prototype
  mediaItemPrototype.getDetails = function() {
    return `ID: ${this.id}, Title: ${this.title}`;
  };
  
  // Create Derived Classes
  class LibraryBook extends Book {
    constructor(id, title, author) {
      super(id, title, author);
      Object.assign(this, mediaItemPrototype);
    }
  }
  
  class LibraryDVD extends DVD {
    constructor(id, title, director) {
      super(id, title, director);
      Object.assign(this, mediaItemPrototype);
    }
  }
  
  class LibraryCD extends CD {
    constructor(id, title, artist) {
      super(id, title, artist);
      Object.assign(this, mediaItemPrototype);
    }
  }
  
  // Instance Creation and Demonstration
  const libraryBook = new LibraryBook(1, '1984', 'George Orwell');
  const libraryDVD = new LibraryDVD(2, 'Inception', 'Christopher Nolan');
  const libraryCD = new LibraryCD(3, 'Thriller', 'Michael Jackson');
  
  // Demonstrating LibraryBook
  console.log(libraryBook.id); // 1
  console.log(libraryBook.title); // 1984
  console.log(libraryBook.author); // George Orwell
  
  // Attempting to modify the title (should not change)
  libraryBook.title = 'Animal Farm';
  console.log(libraryBook.title); // 1984 (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryBook.getDetails()); // ID: 1, Title: 1984
  
  // Using instanceof to confirm the instance's type
  console.log(libraryBook instanceof LibraryBook); // true
  console.log(libraryBook instanceof Book); // true
  console.log(libraryBook instanceof MediaItem); // true
  
  // Demonstrating LibraryDVD
  console.log(libraryDVD.id); // 2
  console.log(libraryDVD.title); // Inception
  console.log(libraryDVD.director); // Christopher Nolan
  
  // Attempting to modify the title (should not change)
  libraryDVD.title = 'Interstellar';
  console.log(libraryDVD.title); // Inception (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryDVD.getDetails()); // ID: 2, Title: Inception
  
  // Using instanceof to confirm the instance's type
  console.log(libraryDVD instanceof LibraryDVD); // true
  console.log(libraryDVD instanceof DVD); // true
  console.log(libraryDVD instanceof MediaItem); // true
  
  // Demonstrating LibraryCD
  console.log(libraryCD.id); // 3
  console.log(libraryCD.title); // Thriller
  console.log(libraryCD.artist); // Michael Jackson
  
  // Attempting to modify the title (should not change)
  libraryCD.title = 'Bad';
  console.log(libraryCD.title); // Thriller (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryCD.getDetails()); // ID: 3, Title: Thriller
  
  // Using instanceof to confirm the instance's type
  console.log(libraryCD instanceof LibraryCD); // true
  console.log(libraryCD instanceof CD); // true
  console.log(libraryCD instanceof MediaItem); // true
  
// Exercise 2: Vehicle Hierarchy System
// Create a class hierarchy for a vehicle system that handles different types of vehicles such as cars, trucks, and motorcycles.

// Requirements:
// Base Class Vehicle:

// Add a private field #vin and a constructor that initializes the vin (Vehicle Identification Number).
// Provide a getter method for vin.
// Subclass Car:

// Extend Vehicle.
// Add additional properties make and model, and initialize them using the constructor.
// Make the make property non-writable and non-enumerable.
// Subclass Truck:

// Extend Vehicle.
// Add additional properties make and payloadCapacity, and initialize them using the constructor.
// Make the make property non-writable and non-enumerable.
// Subclass Motorcycle:

// Extend Vehicle.
// Add additional properties make and type, and initialize them using the constructor.
// Make the make property non-writable and non-enumerable.
// Create Prototypes:

// Create a prototype object vehiclePrototype from the Vehicle prototype using Object.create.
// Add a method getDetails() to the prototype that returns a string with the vehicle's vin and make.
// Create Derived Classes:

// Create classes Car, Truck, and Motorcycle that extend their respective base classes using Object.assign.
// Include the getDetails() method from vehiclePrototype.
// Instance Creation and Demonstration:

// Create instances of Car, Truck, and Motorcycle.
// Show that you can access the vin, make, and respective properties.
// Demonstrate that the make property is non-writable.
// Use the getDetails() method to display vehicle details.
// Use instanceof to confirm the instance's type.

// Base Class Vehicle
class Vehicle {
    #vin;
  
    constructor(vin) {
      this.#vin = vin;
    }
  
    get vin() {
      return this.#vin;
    }
  }
  
  // Subclass Car
  class Car extends Vehicle {
    constructor(vin, make, model) {
      super(vin);
      this.model = model;
      Object.defineProperty(this, 'make', {
        value: make,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass Truck
  class Truck extends Vehicle {
    constructor(vin, make, payloadCapacity) {
      super(vin);
      this.payloadCapacity = payloadCapacity;
      Object.defineProperty(this, 'make', {
        value: make,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass Motorcycle
  class Motorcycle extends Vehicle {
    constructor(vin, make, type) {
      super(vin);
      this.type = type;
      Object.defineProperty(this, 'make', {
        value: make,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Create Prototypes
  const vehiclePrototype = Object.create(Vehicle.prototype);
  
  // Add a method getDetails() to the prototype
  vehiclePrototype.getDetails = function() {
    return `VIN: ${this.vin}, Make: ${this.make}`;
  };
  
  // Create Derived Classes
  class LibraryCar extends Car {
    constructor(vin, make, model) {
      super(vin, make, model);
      Object.assign(this, vehiclePrototype);
    }
  }
  
  class LibraryTruck extends Truck {
    constructor(vin, make, payloadCapacity) {
      super(vin, make, payloadCapacity);
      Object.assign(this, vehiclePrototype);
    }
  }
  
  class LibraryMotorcycle extends Motorcycle {
    constructor(vin, make, type) {
      super(vin, make, type);
      Object.assign(this, vehiclePrototype);
    }
  }
  
  // Instance Creation and Demonstration
  const libraryCar = new LibraryCar('VIN123', 'Toyota', 'Camry');
  const libraryTruck = new LibraryTruck('VIN456', 'Ford', 1000);
  const libraryMotorcycle = new LibraryMotorcycle('VIN789', 'Harley-Davidson', 'Cruiser');
  
  // Demonstrating LibraryCar
  console.log(libraryCar.vin); // VIN123
  console.log(libraryCar.make); // Toyota
  console.log(libraryCar.model); // Camry
  
  // Attempting to modify the make (should not change)
  libraryCar.make = 'Honda';
  console.log(libraryCar.make); // Toyota (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryCar.getDetails()); // VIN: VIN123, Make: Toyota
  
  // Using instanceof to confirm the instance's type
  console.log(libraryCar instanceof LibraryCar); // true
  console.log(libraryCar instanceof Car); // true
  console.log(libraryCar instanceof Vehicle); // true
  
  // Demonstrating LibraryTruck
  console.log(libraryTruck.vin); // VIN456
  console.log(libraryTruck.make); // Ford
  console.log(libraryTruck.payloadCapacity); // 1000
  
  // Attempting to modify the make (should not change)
  libraryTruck.make = 'Chevy';
  console.log(libraryTruck.make); // Ford (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryTruck.getDetails()); // VIN: VIN456, Make: Ford
  
  // Using instanceof to confirm the instance's type
  console.log(libraryTruck instanceof LibraryTruck); // true
  console.log(libraryTruck instanceof Truck); // true
  console.log(libraryTruck instanceof Vehicle); // true
  
  // Demonstrating LibraryMotorcycle
  console.log(libraryMotorcycle.vin); // VIN789
  console.log(libraryMotorcycle.make); // Harley-Davidson
  console.log(libraryMotorcycle.type); // Cruiser
  
  // Attempting to modify the make (should not change)
  libraryMotorcycle.make = 'Yamaha';
  console.log(libraryMotorcycle.make); // Harley-Davidson (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryMotorcycle.getDetails()); // VIN: VIN789, Make: Harley-Davidson
  
  // Using instanceof to confirm the instance's type
  console.log(libraryMotorcycle instanceof LibraryMotorcycle); // true
  console.log(libraryMotorcycle instanceof Motorcycle); // true
  console.log(libraryMotorcycle instanceof Vehicle); // true
  
// Exercise 3: Electronic Devices Hierarchy
// Create a class hierarchy for an electronic devices system that handles different types of devices such as laptops, smartphones, and tablets.

// Requirements:
// Base Class Device:

// Add a private field #serialNumber and a constructor that initializes the serial number.
// Provide a getter method for serialNumber.
// Subclass Laptop:

// Extend Device.
// Add additional properties brand and model, and initialize them using the constructor.
// Make the brand property non-writable and non-enumerable.
// Subclass Smartphone:

// Extend Device.
// Add additional properties brand and carrier, and initialize them using the constructor.
// Make the brand property non-writable and non-enumerable.
// Subclass Tablet:

// Extend Device.
// Add additional properties brand and screenSize, and initialize them using the constructor.
// Make the brand property non-writable and non-enumerable.
// Create Prototypes:

// Create a prototype object devicePrototype from the Device prototype using Object.create.
// Add a method getDetails() to the prototype that returns a string with the device's serial number and brand.
// Create Derived Classes:

// Create classes Laptop, Smartphone, and Tablet that extend their respective base classes using Object.assign.
// Include the getDetails() method from devicePrototype.
// Instance Creation and Demonstration:

// Create instances of Laptop, Smartphone, and Tablet.
// Show that you can access the serial number, brand, and respective properties.
// Demonstrate that the brand property is non-writable.
// Use the getDetails() method to display device details.
// Use instanceof to confirm the instance's type.
// These exercises will help reinforce the concepts of class inheritance, prototype manipulation, and property configuration in JavaScript.

// Base Class Device
class Device {
    #serialNumber;
  
    constructor(serialNumber) {
      this.#serialNumber = serialNumber;
    }
  
    get serialNumber() {
      return this.#serialNumber;
    }
  }
  
  // Subclass Laptop
  class Laptop extends Device {
    constructor(serialNumber, brand, model) {
      super(serialNumber);
      this.model = model;
      Object.defineProperty(this, 'brand', {
        value: brand,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass Smartphone
  class Smartphone extends Device {
    constructor(serialNumber, brand, carrier) {
      super(serialNumber);
      this.carrier = carrier;
      Object.defineProperty(this, 'brand', {
        value: brand,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Subclass Tablet
  class Tablet extends Device {
    constructor(serialNumber, brand, screenSize) {
      super(serialNumber);
      this.screenSize = screenSize;
      Object.defineProperty(this, 'brand', {
        value: brand,
        writable: false,
        enumerable: false
      });
    }
  }
  
  // Create Prototypes
  const devicePrototype = Object.create(Device.prototype);
  
  // Add a method getDetails() to the prototype
  devicePrototype.getDetails = function() {
    return `Serial Number: ${this.serialNumber}, Brand: ${this.brand}`;
  };
  
  // Create Derived Classes
  class LibraryLaptop extends Laptop {
    constructor(serialNumber, brand, model) {
      super(serialNumber, brand, model);
      Object.assign(this, devicePrototype);
    }
  }
  
  class LibrarySmartphone extends Smartphone {
    constructor(serialNumber, brand, carrier) {
      super(serialNumber, brand, carrier);
      Object.assign(this, devicePrototype);
    }
  }
  
  class LibraryTablet extends Tablet {
    constructor(serialNumber, brand, screenSize) {
      super(serialNumber, brand, screenSize);
      Object.assign(this, devicePrototype);
    }
  }
  
  // Instance Creation and Demonstration
  const libraryLaptop = new LibraryLaptop('SN123', 'Apple', 'MacBook Pro');
  const librarySmartphone = new LibrarySmartphone('SN456', 'Samsung', 'Verizon');
  const libraryTablet = new LibraryTablet('SN789', 'Microsoft', '10.5 inches');
  
  // Demonstrating LibraryLaptop
  console.log(libraryLaptop.serialNumber); // SN123
  console.log(libraryLaptop.brand); // Apple
  console.log(libraryLaptop.model); // MacBook Pro
  
  // Attempting to modify the brand (should not change)
  libraryLaptop.brand = 'Dell';
  console.log(libraryLaptop.brand); // Apple (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryLaptop.getDetails()); // Serial Number: SN123, Brand: Apple
  
  // Using instanceof to confirm the instance's type
  console.log(libraryLaptop instanceof LibraryLaptop); // true
  console.log(libraryLaptop instanceof Laptop); // true
  console.log(libraryLaptop instanceof Device); // true
  
  // Demonstrating LibrarySmartphone
  console.log(librarySmartphone.serialNumber); // SN456
  console.log(librarySmartphone.brand); // Samsung
  console.log(librarySmartphone.carrier); // Verizon
  
  // Attempting to modify the brand (should not change)
  librarySmartphone.brand = 'Apple';
  console.log(librarySmartphone.brand); // Samsung (remains unchanged)
  
  // Using getDetails() method
  console.log(librarySmartphone.getDetails()); // Serial Number: SN456, Brand: Samsung
  
  // Using instanceof to confirm the instance's type
  console.log(librarySmartphone instanceof LibrarySmartphone); // true
  console.log(librarySmartphone instanceof Smartphone); // true
  console.log(librarySmartphone instanceof Device); // true
  
  // Demonstrating LibraryTablet
  console.log(libraryTablet.serialNumber); // SN789
  console.log(libraryTablet.brand); // Microsoft
  console.log(libraryTablet.screenSize); // 10.5 inches
  
  // Attempting to modify the brand (should not change)
  libraryTablet.brand = 'Apple';
  console.log(libraryTablet.brand); // Microsoft (remains unchanged)
  
  // Using getDetails() method
  console.log(libraryTablet.getDetails()); // Serial Number: SN789, Brand: Microsoft
  
  // Using instanceof to confirm the instance's type
  console.log(libraryTablet instanceof LibraryTablet); // true
  console.log(libraryTablet instanceof Tablet); // true
  console.log(libraryTablet instanceof Device); // true
  