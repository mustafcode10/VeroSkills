// const arr = [1,2,3]

// for(i = 0; i< arr.length; i++){
//     console.log(arr[i])

// }

// for(const a of arr){
//     console.log(a)

// }

// const obj ={

// }

// Given an array of numbers, use both .map() and .forEach() to create a new array that contains each number multiplied by 2.

const arr = [1,2,3]
const newArr = arr.map(value => value * 2)
console.log(newArr)
const multiply = []
arr.forEach(value => {
    multiply.push(value * 2)

})

console.log(multiply)

// Write a function that uses .filter() to return all even numbers from an array and another function that uses .find() to return the first even number from an array.

const filteredArray = arr.filter(value => value % 2 === 0 )

const findEVEN = arr.find(value => value % 2 === 0 )
console.log(findEVEN)

const sum = arr.reduce((acc, cur)=>  acc + cur, 0)
console.log(sum)

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))


// What are the three states of a Promise? Write a code snippet to demonstrate these states.

function promiseFun(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
          resolve('success')
       }, 1000)
    })
}

// promiseFun().then(res => console.log(res))
// promiseFun().catch(err => console.log(err))
// promiseFun().finally(()=> console.log('reserved'))

//////// What does fetch() return and how can you handle the response?
//https://jsonplaceholder.typicode.com/todos/1

async function fetchTodos(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response.json())
    const result = await response.json()
    console.log(result)
    
}

// fetchTodos()

// async function example() {
//     let value = 42;
//     let result = await value; // This will immediately set result to 42
//     console.log(result); // Output: 42
//   }
  
//   example();


//   async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   }
  
//   fetchData();


//   How do you use the .then() method in a Promise chain? Provide an example.

// function myPromiseData(){
//      fetch('https://api.example.com/data')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// myPromiseData()
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data =>  console.log(data))


// fetch('https://api.example.com/data')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

