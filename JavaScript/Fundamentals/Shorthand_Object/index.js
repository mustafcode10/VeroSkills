// Shorthand syntax for object property / value

const firstName = "Marty";
const lastName = "McFly";
const hobby = "skateboarding";

const timeTraveler = {
  firstName,
  lastName,
  hobby,
};

const person = {
  name: "Lorraine",
  age: 30,
  sayHello() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

const name = "Luigi";
const lives = 36;

const character = {
  name,
  lives,
  jump() {
    console.log(`Boing! ${this.name} has ${this.lives} lives!`);
  },
};

character.jump();