// Immediately Invoked Function Expressions (IIFEs) 
// how can we use IIFEs on async functions??
// why? use cases

(async function () {fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
}) ()


