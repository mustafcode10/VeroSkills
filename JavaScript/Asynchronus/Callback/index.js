// Call back used in return statement.
function findTotal(item1, item2){
    return item1 + item2

}

function totalTotalwithTaxes(a, b){
    return findTotal(a, b) * 1.10
}

console.log(totalTotalwithTaxes(1, 9))

// call back used in argument
const arr =  [1, 2, 3]

const newArr =  arr.map(value  => value + 1)

console.log(newArr)


////////////////////////////////////////////////////////////
//////////////  PART TWO ////////////////////////////////
//////////////////////////////////////////////////

// Some call back are asyn such as addEventListener, setTimeout/Internal
// Some call back are synchrononus such as map, filter

// const myH1 = document.querySelector('h1')

// myH1.addEventListener('click', function(){
//     console.log('clicked H1')
// })


// Syn
console.log('Begin')
// some call back are syn
arr.map(value => console.log(value))


// asyn setTimeoout
arr.map(value => {
    setTimeout(function(){
        console.log(value)
    }, 1000)
})

//syn
console.log('end')

