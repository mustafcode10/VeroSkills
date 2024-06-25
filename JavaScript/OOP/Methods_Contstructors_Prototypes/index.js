function Person(name, age) {
    this.name = name;
    this.age = age;
    // Avoid defining methods inside the constructor function
    // this.greet = function(){
    //     return `Hello I'm ${this.name} and I'm ${this.age} years old.`
    // }
}

const bob = new Person('bob', 33);
const jack = new Person('jack', 30);

// Define the greet method on the prototype
Person.prototype.greet = function() {
    return `Hello I'm ${this.name} and I'm ${this.age} years old.`;
};

console.log(bob.greet()); // Output: Hello I'm bob and I'm 33 years old.
console.log(jack.greet()); // Output: Hello I'm jack and I'm 30 years old.

// Demonstrate that the greet method is not an own property of the instances
console.log(`bob.hasOwnProperty('greet') ${bob.hasOwnProperty('greet')}`); // Output: false


// Key Points:

// Memory Efficiency: When methods are defined on the prototype, they are shared among all instances, saving memory.
// Performance: Shared methods on the prototype do not need to be recreated for each instance, leading to better performance.
// Own Properties vs. Prototype Properties: The hasOwnProperty method checks if a property exists directly on the instance.
//  Prototype properties will not show up as own properties, which is why bob.hasOwnProperty('greet') returns false.


// Methods on Prototypes for Build in Constructors

console.log(`Array.hasOwnProperty('map') ${Array.hasOwnProperty('map')}`)
console.log(`Array.prototype.hasOwnProperty('map') ${Array.prototype.hasOwnProperty('map')}`)


console.log(`Array.hasOwnProperty('length') ${Array.hasOwnProperty('length')}`)
console.log(`Array.prototype.hasOwnProperty('length') ${Array.prototype.hasOwnProperty('length')}`)

