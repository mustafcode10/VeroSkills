const numbers = [1, 2, 3];

function getStates() {
  return ["florida", "california", "new york", "oregon"];
}

const car = {
  make: "Tesla",
  model: "Model 3",
  year: "2023",
  range: "315mi",
  color: "Deep Blue Metallic",
};

// Array destructuring
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

const [first, second, third ] = numbers
console.log(first, second, third);

const [fl, ca, ny, or] = getStates()

// console.log(fl, ca, ny, or)


for(const [key, value] of Object.entries(car)){
  console.log(key, value)

}





