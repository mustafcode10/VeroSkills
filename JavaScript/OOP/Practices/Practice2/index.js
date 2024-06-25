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

const rectangle = new Rectangle(4,2)
console.log(rectangle.calculateArea())

class Square extends Rectangle {
    constructor(length){
        super(length, length)
    }

}

const square =  new Square(6)

console.log(square.calculateArea())