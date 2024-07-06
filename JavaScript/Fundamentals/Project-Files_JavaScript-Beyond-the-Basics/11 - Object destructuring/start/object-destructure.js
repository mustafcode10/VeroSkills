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
    range: "315mi",
    color: "Deep Blue Metallic",
  };
}

// Object destructuring

const {animal, name, breed, age} = pet

// console.log(animal, name, breed, age)

const {make, model, year, range, color} = getCarInfo();

console.log(make, model)

function greetPet({animal, name, bread}){
  return console.log(`hi ${animal} name ${name} bread ${breed}`)

}

greetPet(pet)


