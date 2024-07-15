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
  fetchAndDisplayEntries();
  






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

fetchData(5)
