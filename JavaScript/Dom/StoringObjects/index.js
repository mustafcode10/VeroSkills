const person = {
    name: 'mustaf',
    age: 25,
    address: {
        street: 'lyndale',
        zip: '6666'
    }
}


console.log(person)
const str = JSON.stringify(person)
console.log('toString', str)
const strToObject =  JSON.parse(str)
console.log('strToObject', strToObject)