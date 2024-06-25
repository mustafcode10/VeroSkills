function Person2(name, age){
    this.name = name
    this.age = age
    this.rest = function(){
        return `${this.name} is now tired and resting`
    }

}

const mustaf2 = new Person2('mustaf', 25)

console.log('mustaf', mustaf2)
console.log(mustaf2.rest())


// convert class

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
         this.rest = function(){
            return `${this.name} is now tired and resting`
         }
    }

    introduce(){
     return `Hi my name  ${this.name} and I'm ${this.age}`
    }

}

const mustaf = new Person('mustaf', 25)
console.log('mustaf', mustaf.introduce())

class Teacher extends Person {
    constructor(name, age, job){
        super(name, age)
        this.job = job
    }

    work(){
        return super.introduce() + `I'm also a teacher that teaches JavaScript`
    }

}

console.log('Teacher.__proto__ === Person', Teacher.__proto__ === Person)

const john = new Teacher('john', 33, 'teacher')
console.log(john)
console.log(john.work())


// Convert function constructor without class  with out ES6

function Teacher2(name, age, job){
    Person2.call(this, name, age)
    this.job = job
}

Teacher2.prototype = Object.create(Person2.prototype)
Teacher2.prototype.constructor = Teacher2

const mustafTeacher2 =  new Teacher2('mustafT2', 25, 'teacher')
console.log('Teacher2', mustafTeacher2)