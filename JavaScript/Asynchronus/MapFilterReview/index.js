// Map & Filter

const arr = [2,3,4,5,6,7,8,9,10]


console.log('Map')
const copy = arr.map(value => value ** 2)
console.log('Square', copy)

function squared(num){
    return num ** 2

}

const copy2 = arr.map(squared )
// console.log(copy2)

console.log('Filter')

const evens = arr.filter(value => value % 2 === 0)
console.log('Evens', evens)
