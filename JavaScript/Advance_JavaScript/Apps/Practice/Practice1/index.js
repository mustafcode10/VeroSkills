// Working with Promises (Advanced JS)
// Prompt: Write a JavaScript function that returns a new Promise. 
// This Promise should resolve after a delay of 2 seconds with a string message. 
// Demonstrate how to use .then(), .catch(), and .finally() with this Promise.

// Skills Assessed: Understanding of Promises, async programming with setTimeout, and Promise methods.

function delayedMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Message after 2 seconds');
        }, 2000);
    });
}

// Using .then() to handle resolved Promise
delayedMessage()
    .then(message => {
        console.log('Resolved:', message);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Finally block executed');
    });