function sequentialExecution(functions) {
    // Start with an empty promise that resolves immediately
    let promiseChain = Promise.resolve();
    const results = [];

    functions.forEach((func, index) => {
        // Chain each function to the promise chain
        promiseChain = promiseChain.then(func).then(result => {
            results[index] = result; // Store the result
        });
    });

    // Return a promise that resolves when the entire chain completes
    return promiseChain.then(() => results);
}

// Example usage:
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve('Result 1');
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 2 completed');
            resolve('Result 2');
        }, 500);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve('Result 3');
        }, 2000);
    });
}

sequentialExecution([task1, task2, task3])
    .then(results => {
        console.log('All tasks completed successfully');
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });