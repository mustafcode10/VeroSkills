
// .prototype is reversed for the building functions like Array, Number and so on 
// __proto__ you can use any thing else not reseved function.
// All Array, Number, Boolean live in Object Base

console.log('This is Number prototype => Number.prototype', Number.prototype)
console.log('This is Array prototype => Array.prototype',Array.prototype)
console.log('This is Object prototype => Object.prototype',Object.prototype)

const num = 3

console.log('num.__proto__', num.__proto__)
console.log('num.__proto === Number.prototype', num.__proto__ === Number.prototype) // true

const arr = [1, 2, 3]
console.log('This is Array prototype', arr.__proto__)
console.log('arr.__proto === Array.prototype', arr.__proto__ ===  Array.prototype) // true

const objectBase = Object.prototype
const arrayBase = Array.prototype

console.log('arrayBase === objectBase ', arrayBase.__proto__ === objectBase) // true
console.log('Array.prototype === Object.prototype', Array.prototype === Object.prototype) // false
console.log('Array.prototype.__proto__ === Object.prototype ', Array.prototype.__proto__ === Object.prototype) 


console.log('Number.prototype === Object.prototype', Number.prototype === Object.prototype) // false
console.log('Number.prototype.__proto__ === Object.prototype', Number.prototype.__proto__ === Object.prototype) // true

console.log('Boolean.prototype === Object.prototype ', Boolean.prototype === Object.prototype) // false
console.log('Boolean.prototype.__proto__ === Object.prototype', Boolean.prototype.__proto__ === Object.prototype) // true

console.log('Object.prototype === Object.prototype ', Object.prototype === Object.prototype) 
