// Some call back are asyn such as addEventListener, setTimeout/Internal
// Some call back are synchrononus such as map, filter
window.fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))