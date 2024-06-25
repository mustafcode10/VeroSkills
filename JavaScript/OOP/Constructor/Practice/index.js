const arr = [1, 2]
console.log('arr', arr)

const arr2 = new Array(1,2)
console.log('new Array', arr2)

const arr3 = Array.prototype.constructor(1, 2)
console.log('Array.prototype.constructor', arr3)

console.log('arr.constructor === Array', arr.constructor === Array)
console.log('Array.constructor === Function', Array.constructor === Function)


const str = 'Hi'
console.log(str)

const str2 =  new String('Hi')
console.log('new String', str2)

const str3 =  String.prototype.constructor('Hi')
console.log('String.prototype.constructor', str3)
console.log('str.constructor === String', str.constructor === String)



console.log('Object.constructor === Function', Object.constructor === Function)
console.log('Boolean.constructor === Function', Boolean.constructor === Function)