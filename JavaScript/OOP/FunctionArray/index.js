// Function and Array are special type of an Object
function greet() {
  return console.log("Hellooo function is an special type of an Object ");
}

greet();
greet.hello = function () {
  console.log("New Function Hello");
};

greet.hello();

// Array

const arr = [5, true, "Mustaf", {}];
arr.year = 2024;
arr.greet = function (){
    console.log ('Helloo Array is special type of an Object')
}

console.log(arr);
console.log(arr.length)
arr.greet()
