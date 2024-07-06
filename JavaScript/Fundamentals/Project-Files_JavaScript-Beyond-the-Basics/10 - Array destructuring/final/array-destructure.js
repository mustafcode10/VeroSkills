const numbers = [1, 2];

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
const [first, second, third = 3] = numbers;
const [fl, ca, ny, or] = getStates();

for (const [key, value] of Object.entries(car)) {
  console.log(key + ": " + value);
}
