function Person(name, age){
    this.name = name
    this.age = age

}

// new is create new constructor object  from function and set property and value 
// never ever return a constroctor function.
const mustaf =  new Person('Mustaf', 29)

console.log(mustaf)