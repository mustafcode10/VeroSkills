class Person {
    #name
    constructor(name){
        this.#name = name
    }
  get name(){
    return this.#name
  }
  set name(userInput){
    this.#name = userInput
  }
}

const john = new Person('john')