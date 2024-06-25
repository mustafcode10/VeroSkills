// Define a custom constructor function w/ the name Person and only takes in ONE argument, "name"
// Create new instances of Person with each of names in array below
// *bonus* assign proper name variables to each newly created object instance
// for example, the variable bob should hold the object bob constructed by Person.

const arrOfNames = ['bob', 'jack', 'tony', 'john'];

function Person(name){
    this.name = name;
}

const listOfNames = [];
for (const name of arrOfNames){
    console.log(name); // Print each name
    listOfNames.push(new Person(name)); // Create a new Person instance and add to listOfNames
}

console.log(listOfNames); // Print all Person instances

const [bob, jack, tony, john] = listOfNames; // Destructure listOfNames into individual variables

console.log(jack); // Print the Person instance for 'jack'
