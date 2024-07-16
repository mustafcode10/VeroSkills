// Write a JavaScript function to make a GET request 
// to a public Web API and display
// the first 5 entries in a formatted list in the console.

async function fetchAndDisplayEntries() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
  
      console.log('First 5 Entries:');
      data.slice(0, 5).forEach((entry, index) => {
        console.log(`${index + 1}. Title: ${entry.title}`);
        console.log(`   Body: ${entry.body}`);
        console.log('----------------------');
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the function
  // fetchAndDisplayEntries();
  


// Write a JavaScript function to make a GET request to a public API with query parameters for filtering results. Display the filtered results in the console.


const url = `https://jsonplaceholder.typicode.com/posts/`
async function fetchData(id){
    try {
        const response = await fetch(`${url}${id}`)
        console.log(response)
        const data =  await response.json()
        console.log(data)

    } catch (error) {
        console.error('fetch failed', error)
        
    }
}

// fetchData(5)


// Function to make a GET request to JSONPlaceholder API with query parameters
function getPostsByUserId(userId) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const url = `${baseUrl}?userId=${userId}`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


// getPostsByUserId(5);


const jsonString = `{
  "name": "Luna",
  "occupation": "Developer",
  "age": 35,
  "isAwesome": true
}`

console.log(jsonString)

const jsonParse = JSON.parse(jsonString)
console.log(jsonParse)



function updatePost(postId, title, body) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: postId,
      title: title,
      body: body,
      userId: 1 // Assuming the userId is 1 for this example
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Post updated:', data);
    })
    .catch(error => {
      console.error('Error updating post:', error);
    });
}

// Example usage of the function
updatePost(1, 'Updated Title', 'Updated body of the post.');



