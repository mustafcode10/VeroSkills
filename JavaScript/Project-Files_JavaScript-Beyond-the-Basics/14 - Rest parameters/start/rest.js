// Rest parameters
function myFruits(...fruits){
    const [fruit1, fruit2, ...other] = fruits
    console.log(fruit1, fruit2)
    console.log(other)
    

}

myFruits('apple', 'banan', 'lemon', 'kiwi');


function sum(...numbers){

    return numbers.reduce((acc, curr)=> acc + curr, 0)
}

console.log(sum(10, 20, 30));

function findMax(...numbers){
 return Math.max(...numbers)
};

console.log(findMax(10, 30, 50))