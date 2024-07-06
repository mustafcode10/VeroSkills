// Rest parameters

function myFruits(...fruits) {
    const [fruit1, fruit2, ...otherFruits] = fruits;
    console.log(otherFruits);
    console.log(`My favorite fruits are ${fruit1} and ${fruit2}!`);
  }
  
  myFruits("apples", "grapes", "oranges", "peaches", "kiwis");
  
  function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  console.log(findMax(10, 20, 30, 40, 50, 60, 70, 2000));