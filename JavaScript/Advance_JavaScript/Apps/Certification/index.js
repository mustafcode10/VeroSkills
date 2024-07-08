// Implement a function sequentialExecution that takes an array of functions 
//(each accepting a callback
// and executes them sequentially. Each function should wait for the previous one to complete before starting.


// function sequencial(){
//     return new Promise.all()
// }





// function fun1(){

//   setTimeout(()=> {
//     console.log('one')
//   }, 3000)
    
// }

// function fun2(){

//     setTimeout(()=> {
//       console.log('two')
//     }, 2000)
    
// }

// function fun3(){
//     setTimeout(()=> {
//         console.log('three')
//       }, 1000)
   
// }


// sequencial([fun1, fun2, fun3]).then(() => {
//     console.log('All tasks completed successfully');
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('All tasks completed or Rejected');
// })


// function sequentialExecution(functions) {
//     return new Promise((resolve, reject) => {
//         let index = 0;

//         function next() {
//             if (index >= functions.length) {
//                 resolve();
//                 return;
//             }

//             const func = functions[index];
//             index++;

//             func((error) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     next();
//                 }
//             });
//         }

//         next();
//     });
// }

// // Example usage:
// function task1(callback) {
//     setTimeout(() => {
//         console.log('Task 1 completed');
//         callback(null);  // No error
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log('Task 2 completed');
//         callback(null);  // No error
//     }, 500);
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log('Task 3 completed');
//         callback(null);  // No error
//     }, 2000);
// }

// sequentialExecution([task1, task2, task3])
//     .then(() => {
//         console.log('All tasks completed successfully');
//     })
//     .catch((error) => {
//         console.error('Error occurred:', error);
//     });




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