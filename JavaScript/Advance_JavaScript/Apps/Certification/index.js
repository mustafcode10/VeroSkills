// Implement a function sequentialExecution that takes an array of functions
// (each accepting a callback
// and executes them sequentially. Each function should wait for the previous one to complete before starting.

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
    console.log("Task 1 completed");
    callback(null); // No error
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback(null); // No error
  }, 500);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback(null); // No error
  }, 2000);
}

sequentialExecution([task1, task2, task3])
  .then(() => {
    console.log("All tasks completed successfully");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Implement a function that takes an array of Promises and a limit on the number of concurrent
// Promises that can be executed at a time.
// The function should return a new Promise that resolves when all input Promises are settled.

//     Accepts an array of Promises (promises) and a concurrency limit (limit).
// Returns a new Promise that resolves when all input Promises are settled.
// Manages concurrent execution using a for loop and a queue-like approach.

function limitConcurrentPromises(promises, limit) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let resolvedCount = 0;
        const results = [];
        const total = promises.length;

        function executeNext() {
            if (index >= total) {
                return;
            }

            const currentIndex = index;
            const promise = promises[index];
            index++;

            Promise.resolve(promise)
                .then(result => {
                    results[currentIndex] = result;
                })
                .catch(error => {
                    results[currentIndex] = error;
                })
                .finally(() => {
                    resolvedCount++;
                    if (resolvedCount === total) {
                        resolve(results);
                    } else {
                        executeNext();
                    }
                });
        }

        for (let i = 0; i < limit && i < total; i++) {
            executeNext();
        }
    });
}

// Example usage:
const delay = (time, result) => new Promise(resolve => setTimeout(() => resolve(result), time));

const promises = [
    delay(1000, 'Result 1'),
    delay(2000, 'Result 2'),
    delay(500, 'Result 3'),
    delay(3000, 'Result 4'),
    delay(1500, 'Result 5')
];

limitConcurrentPromises(promises, 2)
    .then(results => {
        console.log('All promises settled:', results);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });


