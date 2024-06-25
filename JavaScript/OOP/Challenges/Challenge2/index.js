// Challenge 2

// Create TWO(2) new object named newPhil & newPatrick
// Each of these new objects must have {makeMePrototype} as the prototype
// newPhil.__proto__ === makeMeThePrototype must RETURN TRUE
// hint look up how to use Object.assign properly


// Object Create to change the prototype and then 
// Object Assign to merge the properties onto new object

const objPhil = {
    name: 'phil',
    favFood: 'lobster tails'
}

const objPatrick = {
    name: 'patrick',
    retired: true,
    favFood: 'cowboy steak'
}

const makeMeThePrototype = {
    isRetired: function(){
        if (this.retired) {
            console.log(`Hello, ${this.name} IS RETIRED`)
        } else {
            console.log(`${this.name} IS NOT RETIRED YET`)
        }
    },
    getFavFood: function(){
        console.log(`${this.name}'s favorite food is ${this.favFood}`)
    }
}

// Create newPhil and newPatrick with makeMeThePrototype as their prototype
const newPhil = Object.assign(Object.create(makeMeThePrototype), objPhil);
const newPatrick = Object.assign(Object.create(makeMeThePrototype), objPatrick);

// Check if their prototypes are correctly set
console.log(newPhil.__proto__ === makeMeThePrototype); // Output: true
console.log(newPatrick.__proto__ === makeMeThePrototype); // Output: true

// Testing the methods
newPhil.getFavFood(); // Output: phil's favorite food is lobster tails
newPatrick.getFavFood(); // Output: patrick's favorite food is cowboy steak

newPhil.isRetired(); // Output: phil IS NOT RETIRED YET
newPatrick.isRetired(); // Output: Hello, patrick IS RETIRED
