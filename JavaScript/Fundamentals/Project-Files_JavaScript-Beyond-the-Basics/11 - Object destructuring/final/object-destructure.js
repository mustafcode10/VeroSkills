const pet = {
  animal: "dog",
  name: "Joey",
  breed: "australian shepherd",
  age: 11,
};

function getCarInfo() {
  return {
    make: "Tesla",
    model: "Model 3",
    year: "2023",
    color: "Deep Blue Metallic",
  };
}

const { make, model, year, color } = getCarInfo();
console.log(make, model, year, color);

function greetPet({ name, breed, age }) {
  console.log(
    "Hi " + name + ", the " + breed + ". You are " + age + " years old!"
  );
}

greetPet(pet);

// Object destructuring
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
