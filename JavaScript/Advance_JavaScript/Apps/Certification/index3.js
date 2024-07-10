// Implement a function sequentialExecution that takes an array of functions
// (each accepting a callback
// and executes them sequentially. Each function should wait for the previous one 
//to complete before starting.

function sequentialExecution(functions, callback){

    let index = 0;
    function next(){
        if(index < functions.length){
            functions[index](function(){
                index++
                next()
            })

        } else {
            callback()
        }
        
    }
    next()

}






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