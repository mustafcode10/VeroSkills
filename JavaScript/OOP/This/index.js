// Event listener
// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     this.textContent += ' new '; // refers to the button element
// });

// Global scope
console.log("This in global scope:", this); // logs the global object (window in browsers)

// Function declaration
function test() {
  console.log("This from test() function:", this); // logs the global object (window in browsers)
}

// Object literal
const obj = {
  x: this, // refers to the global object (window in browsers)
};

// Method in an object
const obj2 = {
  age: 30,
  x: function () {
    console.log("This from obj2.x method:", this); // logs obj2
  },
};

// Call the test function
test();

// Log the value of obj.x
console.log("obj.x:", obj.x);

// Log the obj2.x method reference
console.log("obj2.x:", obj2.x);

// Call the obj2.x method
obj2.x();

////////////////////////////////////
////    PART TWO ///////////////////
//////////////////////////////////

const obj1 = {
  age: 30,
  obj2: {
    year: 2024,
    this: function () {
      console.log("This from obj2.x method:", this); // logs obj2
    },
  },
};

console.log(obj1.obj2.this())

const obj4 = {
    age: 30,
    obj2: {
      year: 2024,
      this:  () =>  {
        console.log("Arrow func This from obj2.x method:", this); // logs obj2 arrow func always this === 'Window'
      },
    },
  };
  
  console.log(obj4.obj2.this())