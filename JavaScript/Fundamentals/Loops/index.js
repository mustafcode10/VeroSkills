// For loop, keeps running while the condition is true.

// for (let rep= 0; rep<=10; rep++) {
// console.log(`liftining weigth repetition ${rep}`)
    
// }

const mustafArr = [
    "Mustaf",
    "Abtidon",
    2024-1994,
    "Software Engineer",
    ["Hassan", "Yahye"]
]

// for(i = 0; i < mustafArr.length; i++){
//     console.log(mustafArr[i])
// }

const mustafTypes = [];

for(i=0; i<mustafArr.length; i++){
    // one way
    // mustafTypes[i] = typeof mustafArr[i]
    // Another way
    mustafTypes.push(typeof mustafArr[i])
}
//  console.log(mustafTypes)

////////////////////
const cost = 25.00
const amount = [35.00, 40.00, 35.00, 50.00]
const change = []
for (let i = 0; i< amount.length; i++) {
    change.push(amount[i] - cost)
    
}
// console.log(change)

// Continue and Break keyword.
// Continue is going to stop the current element and go to the next one.
// Break will break out to the loop entirely.

// Continue only print string into console.
for (let i = 0; i < mustafArr.length; i++) {
    if (typeof mustafArr[i] !==  "string")  continue   
    // console.log(mustafArr[i], typeof mustafArr[i])
}

// Break- break out of the loop  if an element is  number.

for(i =0; i < mustafArr.length; i++){
    if(typeof mustafArr[i] === "number") break
    // console.log(mustafArr[i], typeof mustafArr[i])
}

// Looping in reverse.

for(i = mustafArr.length -1; i >=0; i--){
    // console.log(i, mustafArr[i])
}

// Nested Loops.
// weight liftining example - 3 different exercise, 5 reps each exercise.

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`Exercise ${exercise}`)
    for(let rep = 1; rep <= 5; rep++){
     console.log(`----Exercise ${exercise} - rep ${rep}`)
    }
}

// While loop

// let rep = 1;

// while (rep <= 10){
//     console.log(`rep ${rep}`)
//     rep++;

// }

let dice = Math.trunc(Math.random() * 6 ) + 1

while(dice !== 6){
    console.log(` You rolled a dice ${dice}`)
    dice = Math.trunc(Math.random() * 6 ) + 1
    if(dice === 6 ) console.log(`Dice is ${dice}`)

}