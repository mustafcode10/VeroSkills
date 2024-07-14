// Get a resource
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(json => console.log(json));

// Create a resource
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'JavaScript',
    body: 'I love coding',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Update a resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'JavaScript lover',
    body: 'I love Coding',
    topic: 'API Basics',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


// Delete a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
