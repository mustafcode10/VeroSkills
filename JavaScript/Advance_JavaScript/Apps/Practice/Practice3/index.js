// Concurrency Introduction
// Definition: Concurrency in JavaScript refers to handling multiple operations simultaneously
// using asynchronous programming.

// Using Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Fetch Method - Get File
// Definition: The Fetch API is used to make network requests and handle responses.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// JavaScript Data as JSON and JavaScript Objects
// Definition: JSON (JavaScript Object Notation) is a format for storing and transporting data.
//  JavaScript objects are used to represent data within the language.

const jsonString = '{"name": "Jane", "age": 25}';
const user = JSON.parse(jsonString);
console.log(user);

const newJsonString = JSON.stringify(user);
console.log(newJsonString);

const jsonData = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

jsonData.forEach((person) => {
  console.log(`${person.name} is ${person.age} years old.`);
});
// Async and Await Files Catch Errors
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Handle errors using try/catch within an async function.
async function fetchData2(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData2('https://jsonplaceholder.typicode.com/posts/1');


// Promise.all in JavaScript
const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

Promise.all([promise1, promise2])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//   Web API Connection
//   Definition: Web APIs allow interaction with external services and data sources over the web using HTTP requests.
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await response.json();
  console.log(data);
}

getData();


function sequentialExecution(functions) {
    return new Promise((resolve, reject) => {
        let index = 0;

        function next() {
            if (index >= functions.length) {
                resolve();
                return;
            }

            const func = functions[index];
            index++;

            func((error) => {
                if (error) {
                    reject(error);
                } else {
                    next();
                }
            });
        }

        next();
    });
}

// Example usage:
function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback(null);  // No error
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback(null);  // No error
    }, 500);
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback(null);  // No error
    }, 2000);
}

sequentialExecution([task1, task2, task3])
    .then(() => {
        console.log('All tasks completed successfully');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });