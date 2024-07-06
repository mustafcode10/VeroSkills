const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = [];

let sum = 0

numbers.forEach(function(num){
    squaredNumbers.push(num * num)
});

numbers.forEach(function(num){
 sum += num
})

console.log('SquaredNumbers', squaredNumbers)
console.log('sum', sum)