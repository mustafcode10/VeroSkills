const pet = {
  animal: "dog",
  name: "Joey",
  breed: "australian shepherd",
  age: 11,
};

// Template literals
const { animal, name, breed, age } = pet;

console.log(
  "Hi, I'm a " +
    animal +
    " named " +
    name +
    ". I am an " +
    breed +
    " and " +
    age +
    " years old."
);
