const brass = ["trumpet", "trombone"];
const woodwind = ["alto sax", "tenor sax", "bari sax"];
const rhythm = ["piano", "bass", "drums"];

const aus = {
  animal: "dog",
  breed: "Australian shepherd",
};

const joey = {
  name: "Joey",
  age: "11",
};

// Spread operator
const originalArray = ["a", "b", "c"];
const newArray = [...originalArray, "d", "e", "f"];

const myBand = [...brass, ...woodwind, ...rhythm];

const myPet = {
  ...aus,
  ...joey,
  color: "red merle",
  mood: "playful",
};
console.log(myPet);