const fruits = ["apple", "banana", "orange", "peach"];
const numbers = [1, 2, 3, 4, 5];
const greeting = "Hello, world!";

const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
};

// Loops
for (const fruit of fruits) {
  // console.log(fruit.toUpperCase());
}

for (const prop in car) {
  console.log(prop + ": " + car[prop]);
}