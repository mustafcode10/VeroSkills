function Person(name){
    this.name = name
}
const mustaf = new Person('mustaf')
console.log(mustaf)

// new create mustaf custom protoype from person protype 
console.log('Person.prototype === mustaf.__proto__', Person.prototype === mustaf.__proto__)

// Object base
console.log('mustaf.__proto__.__proto__ === Object.__proto__)', mustaf.__proto__.__proto__ === Object.prototype)