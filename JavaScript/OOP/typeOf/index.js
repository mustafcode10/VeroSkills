console.log(typeof '')
console.log(typeof {})

function Person(name){
    this.name = name
}

const mustaf = new Person('mustaf')

console.log('typeOf Person typical isnt function and its objectbut function isnt primitive type', typeof Person)

// type of caveats

console.log(typeof null === "object") // it isnt object and its mistake and js knows becouse of alot od websites are depedant.
console.log(typeof NaN === 'number')
console.log(typeof [3,4,5] === 'object')

console.log('typeof NaN', typeof NaN)
console.log(`isNaN('x')} ${ isNaN('x')}`)
console.log(`isNaN('3')} ${ isNaN('3')}`)
console.log(`Number('3')} ${Number('3')}`)
console.log(`isNaN('')} ${ isNaN('')}`)
console.log(`Number('')} ${Number('')}`)

// mistake use Array.isArray instead of using typeof
console.log(`typeof [] ${typeof []}`)

console.log(`Array.isArray([]) ${Array.isArray([])}`)
console.log(`Array.isArray({}) ${Array.isArray({})}`)