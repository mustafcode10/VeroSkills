// Create a promise that resolves with a greeting message after 1 second. 
// Use async/await to wait for the promise and log the message.

// Function that returns a promise which resolves after 1 second with a greeting message
function greetingPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello! This is your greeting message.");
        }, 1000);
    });
}

// Async function to wait for the promise and log the message
async function logGreeting() {
    const message = await greetingPromise();
    console.log(message);
}

// Call the async function
logGreeting();


// Create a function that returns a Promise, which resolves with a string "Success" after 2 seconds using setTimeout. 
//Then, write code to consume this Promise with .then(), .catch(), and .finally() methods, 
//handling possible success and error scenarios.
// Skills Assessed: Understanding of Promises, setTimeout, and Promise methods.

// Function that returns a Promise resolving with "Success" after a delay
function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });
}

// Consuming the Promise using .then(), .catch(), and .finally() methods
delayedSuccess()
    .then((result) => {
        console.log('Resolved:', result); // Output: Resolved: Success
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Promise completed.');
    });
// Advanced Asynchronous Flow Control
// Prompt: Write a piece of code that demonstrates the use of Promise.allSettled().
//  Create multiple Promises where some resolve and others reject. Show how Promise.allSettled() 
//  can be used to handle these Promises, and how it differs from Promise.all().

// Skills Assessed: Advanced Promise handling and understanding the differences between Promise.all() and Promise.allSettled().

// Create an array of Promises with some resolving and some rejecting
const promises = [
    Promise.resolve('Resolved Promise 1'),
    Promise.reject('Rejected Promise 2'),
    new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Resolved Promise 3')),
    new Promise((resolve, reject) => setTimeout(reject, 500, 'Rejected Promise 4'))
];

// Using Promise.allSettled() to handle all Promises
Promise.allSettled(promises)
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
            } else {
                console.log('Rejected:', result.reason);
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });