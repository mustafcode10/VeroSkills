// Some call back are asyn such as addEventListener, setTimeout/Internal
// Some call back are synchrononus such as map, filter
// Get something to server 
const optionsObject = {
    method: 'Get',
    Credential: 'hahahha'
}
// Post something to server 
const optionsObject2 = {
    method: 'Post', 
    body: {
        title: 'My first Post',
        name: 'Mustaf',
        content: 'Post Content'
    }
}
// Put update something to server
const optionsObject3 = {
    method: 'Put',
    body: {
        title: 'updated title'
    }

}
window.fetch('https://jsonplaceholder.typicode.com/posts', optionsObject)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))