////////////////////////////////////////////////
/////// Array Destructuring //////////////////
/////////////////////////////////////////////

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



////////////////////////////////////////////////////////
//////////      Object Destructuring      /////////////
//////////////////////////////////////////////////////



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