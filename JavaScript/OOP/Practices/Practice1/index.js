// Question: Create an abstract class Shape with an abstract method getArea. Then,
//  create two derived classes Circle and Rectangle that implement the getArea method.

// Requirements:

// Create an abstract class Shape with a method getArea that throws an error if not implemented.
// Create a Circle class that extends Shape and implements the getArea method.
// Create a Rectangle class that extends Shape and implements the getArea method.

class Shape {
    getArea() {
        throw new Error("Method 'getArea()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radio){
        super()
        this.radio = radio

    }

    getArea(){
        return Math.PI * this.radio * this.radio
    }
}

const circle = new Circle (2)
// console.log('circle: ', circle.getArea())


class Rectangle extends Shape {
    constructor(length, width){
        super()
        this.length =  length
        this.width = width

    }

    getArea(){
        return this.length * this.width
    }
}

const rectangle = new Rectangle (4, 2)
console.log('rectangle', rectangle.getArea())

class Square extends Shape {
    constructor(length){
      super()
      this.length = length

    }
    getArea(){
       return this.length * this.length
    }
}

const square = new Square(4)
console.log('square', square.getArea())


// Creating and Using Constructors
// Prompt: Write a JavaScript constructor function for a Car object with properties like make, model, and year. 
// Create an instance of this Car and demonstrate accessing its properties.
// Skills Assessed: Understanding of constructors, object instantiation, and property access.


function Car (make, model, year){
    this.make = make
    this.model =  model
    this.year = year
}

const car =  new Car ('Toyata', 'Camry', 2014)

console.log(`Make : ${car.make} Model: ${car.model} Year: ${car.year}`)

// Implementing Inheritance
// Prompt: Define two classes, Vehicle as a parent class and Bike as a subclass that extends Vehicle.
// Include common properties in Vehicle, and specific properties in Bike. 
// Demonstrate creating an instance of Bike and accessing both inherited and specific properties.

// Skills Assessed: Inheritance, class syntax, extends keyword, instance creation.


class Vehicle {
    constructor(make, model, year){
        this.make =  make
        this.model = model
        this.year = year
    }

    displayInfo(){
        return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`
    }
}


class Bike extends Vehicle {
    constructor(make, model, year, type){
        super(make, model, year)
        this.type =  type
    }
    displayInfo(){
        return `${super.displayInfo()} Type: ${this.type}`
    }
}


const bike = new Bike('ITALJET', 'XPRO', 2022, 'Sport')
// console.log(`Display Information ${bike.displayInfo()}`)

// Encapsulation with Getters and Setters
// Prompt: Create a class Person with private fields for name and age, and 
// provide getters and setters for these fields. Instantiate the Person class and 
// demonstrate the use of getters and setters.
// Skills Assessed: Encapsulation, private fields, getters and setters.

class Person {
    #name
    #age
    constructor(name, age){
        this.#name = name
        this.#age = age
    }

    get name(){
        this.#name
    }
    set name(newName){
        return this.#name = newName

    }
    get age(){
        this.#age
    }
    set age(newAge){
        if(this.age > 0){
            return this.#age = newAge

        } else {
            console.error('Age cannot be neagative')
        }

    }


}

const person =  new Person('Mustaf', 25)
console.log(`Name: ${person.name} Age: ${person.age}`)

person.name = 'John'
console.log('Updated Name:', person.name)

person.age = -10
console.log('Age: ', person.age)


// Polymorphism and Method Overriding
// Prompt: Write a class Animal with a method speak(). Create a subclass Dog that overrides the speak() method.
// Instantiate Dog and demonstrate how the overridden method works.

// Skills Assessed: Polymorphism, method overriding, class methods.

class Animal {
    speak(){
        return `The animal makes a sound.`
    }
}

class Dog extends Animal {
    speak(){
        return`The dog barks.`
    }
}


const dog = new Dog()
console.log( dog.speak())


// Working with Prototypes
// Prompt: Create a function constructor Book and add a method to its prototype. 
// Create an instance of Book and demonstrate accessing the method added to the prototype.
// Skills Assessed: Prototype manipulation, function constructors, prototype methods.

function Book(title, author){
    this.title =  title
    this.author = author


}

Book.prototype.displayInfo = function(){
    return `Title: ${this.title}, Author: ${this.author}`
}

const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald' )

console.log(book.displayInfo())


// Question: Create a class BankAccount that encapsulates the account holder's information and their balance.
//  Ensure that the balance can only be modified using deposit and withdrawal methods.

// Requirements:

// Create a BankAccount class.
// The class should have private attributes for the account holder's name and balance.
// Implement methods to get the account holder's name and balance.
// Implement methods to deposit and withdraw money from the account. Ensure the balance cannot go negative.


class BankAccount {
    #balance
    #name
    constructor(name,  initialBalance = 0){
        this.#balance = initialBalance
        this.#name = name

    }
    
    getbalance(){
        return this.#balance
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount

        } 

    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount

        }

    }

    getAccount (){
       return this.#name
    }

}


const account = new BankAccount('Wells Fargo', 2000 )
account.deposit(100)
account.withdraw(50)
console.log(account.getbalance())


// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
// Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class
//  and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. 
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary){
        this.salary = salary
        this.name = name
        console.log(`Name of the Employee: ${name}`);
        console.log(`Monthly Salary: $${salary}`);

    }
    calculateAnnualSalary(){
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary)
        this.department = department

    }

    calculateAnnualSalary(){
       const baseSalary =  super.calculateAnnualSalary()
       const bonus = 0.1
       console.log(`Bonus (10%  of the base salary) ${bonus}`)
       return (bonus * baseSalary) + baseSalary
    }
}

// Create an instance of the Manager class
const manager1 = new Manager('John Dode', 5000, 'Marketing');
const annualSalary1 = manager1.calculateAnnualSalary();

// console.log(`Manager: ${manager1.name}`);
// console.log(`Department: ${manager1.department}`);
// console.log(`Annual Salary: $${annualSalary1}`);


// Write a JavaScript program that creates a class called Bank with properties for bank names and branches.
//  Include methods to add a branch, remove a branch, and display all branches. 
// Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
    constructor(){
        this.names = ''
        this.branches = []
    }
    // add barch methods
    addBranch(branch){
        this.branches.push(branch)
        console.log(`${branch} added successfully.`);
    }

    removeBranch(branch){
      const index = this.branches.indexOf(branch)
        if(index !== -1 ){
           this.branches.splice(index, 1)
           console.log(`Branch ${branch} removed successfully`)
        } else {
            console.log(`Branch ${branch} does not exist`)
        }
    }

    displayBranches(){
        if(this.branches.length === 0){
            console.log('No branches available.');
        } else {
            console.log('List of Bank Branches:');
            this.branches.forEach((branch, index)=> {
                console.log(`${index + 1}.${branch} `)
            })
        }
  

    }
}

// Create an instance of the Bank class
const bank = new Bank();
// Add branches
bank.addBranch('Branch A');
bank.addBranch('Branch B');
bank.addBranch('Branch C');
// Display all branches
bank.displayBranches();
// Remove a branch
bank.removeBranch('Branch B');
// Display all branches again
bank.displayBranches();


// Write a JavaScript program that creates a class called University with properties for university name and departments.
// Include methods to add a department, remove a department, and display all departments. 
// Create an instance of the University class and add and remove departments.

class University {
    constructor(name) {
      this.name = name;
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
      console.log(`Department "${department}" added to ${this.name}.`);
    }
  
    removeDepartment(department) {
      const index = this.departments.indexOf(department);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Department "${department}" removed from ${this.name}.`);
      } else {
        console.log(`Department "${department}" does not exist in ${this.name}.`);
      }
    }
  
    displayDepartments() {
      console.log(`Departments in ${this.name}:`);
      if (this.departments.length === 0) {
        console.log('No departments available.');
      } else {
        this.departments.forEach((department, index) => {
          console.log(`${index + 1}. ${department}`);
        });
      }
    }
  }
  
  // Create an instance of the University class
  const university = new University('ABC University');
  
  // Perform operations on the university
  university.displayDepartments(); // Departments in ABC University: No departments available.
  
  university.addDepartment('Science');
  university.addDepartment('Mathematics');
  university.addDepartment('Physics');
  university.displayDepartments();
  // Departments in ABC University:
  // 1. Computer Science
  // 2. Mathematics
  // 3. Physics
  
  university.removeDepartment('Mathematics');
  university.displayDepartments();
  // Departments in ABC University:
  // 1. Science
  // 2. Physics
  
  university.removeDepartment('Chemistry');
  // Department "Chemistry" does not exist in ABC University.
  
//   Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. 
//   Include a method to calculate the total price by multiplying the price by the quantity. 
//   Create a subclass called PersonalCareProduct that inherits from the Product class and 
//   adds an additional property for the warranty period. Override the total price calculation method to include 
//   the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    calculateTotalPrice(quantity) {
      return this.price * quantity;
    }
  }
  
  class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
      super(id, name, price);
      this.warrantyPeriod = warrantyPeriod;
    }
  
    calculateTotalPrice(quantity) {
      const totalPrice = super.calculateTotalPrice(quantity);
      return totalPrice + this.warrantyPeriod;
    }
  }
  
  // Create an instance of the PersonalCareProduct class
  const personalCareProduct = new PersonalCareProduct(1, 'Shampoo', 10, 2);
  
  // Calculate the total price
  const totalPrice = personalCareProduct.calculateTotalPrice(3);
  
  console.log(`Total Price: $${totalPrice}`);
  















