
// These tools will allow you to create dynamic strings and embed variables and expressions within a string.
const pet = {
    animal: "dog",
    name: "Joey",
    breed: "australian shepherd",
    age: 11,
  };
  
  // Template literals
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  const message = `${sayHello("Jim")} How are you today?`;
  console.log(message);
  
  const { animal, name, breed, age } = pet;
  
  console.log(
    `
    Hi, I'm a ${animal} named ${name}. 
    I am an ${breed} 
    and ${age} years old.
    `
  );
  
  const x = 5;
  const y = 10;
  const sum = `The sum of ${x} and ${y} is ${x + y}!`;
  console.log(sum);