const allPosts = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())


const allUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


const allTodos= fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())


Promise.all([allPosts, allUsers, allTodos])
.then(res => console.log(res))


Promise.allSettled([allPosts, allUsers, allTodos])
.then(res => console.log(res))

