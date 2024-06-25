// Question: Create a class BankAccount that encapsulates the account holder's information and their balance.
//  Ensure that the balance can only be modified using deposit and withdrawal methods.

// Requirements:

// Create a BankAccount class.
// The class should have private attributes for the account holder's name and balance.
// Implement methods to get the account holder's name and balance.
// Implement methods to deposit and withdraw money from the account. Ensure the balance cannot go negative.


// class BankAccount {
//     #balance
//     #name
//     constructor(name,  initialBalance = 0){
//         this.#balance = initialBalance
//         this.#name = name

//     }
    
//     getbalance(){
//         return this.#balance
//     }

//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount

//         } 

//     }

//     withdraw(amount){
//         if(amount > 0 && amount <= this.#balance){
//             this.#balance -= amount

//         }

//     }

//     getAccount (){
//        return this.#name
//     }

// }


// const account = new BankAccount('wallsfargo', 2000 )
// account.deposit(100)
// account.withdraw(50)
// console.log(account.getbalance())



// Question: Create an abstract class Shape with an abstract method getArea. Then,
//  create two derived classes Circle and Rectangle that implement the getArea method.

// Requirements:

// Create an abstract class Shape with a method getArea that throws an error if not implemented.
// Create a Circle class that extends Shape and implements the getArea method.
// Create a Rectangle class that extends Shape and implements the getArea method.


// class Shape {
//     getArea(){
//         throw new Error(this.getArea)
        
//     }
// }

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


class Rectangle extends Shape {
    constructor(length, width){
      super()
      this.length = length
      this.width = width
    }

    getArea(){
        return this.length * this.width
    }
}

const circle = new Circle(2)
console.log('circle', circle.getArea())


const rectangle = new Rectangle(4, 2)
console.log('rectangle ', rectangle.getArea())









