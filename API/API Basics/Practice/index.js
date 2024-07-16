const main = document.querySelector('main')


const url = 'https://jsonplaceholder.typicode.com/posts'
async function fetchData(url, handleData){
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Http error status: ${response.status}`)

        }
    //  console.log(response.json())
     const data = await response.json()
    //   console.log(data)
      handleData(data)
    } catch (error) {
        
    }

    


}

// fetchData()
function renderData(data){
    console.log('adadada', data)
   const lists = data.map(item => item.title)
    const html = `
    <h1> ${lists}</h1>

    `
    main.insertAdjacentHTML('beforeend', html)

}
// fetchData(url, renderData)

// Function to make a GET request to JSONPlaceholder API with query parameters
function getPostsByUserId(userId) {
    // Base URL for the JSONPlaceholder API
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    // Construct the full URL with query parameters
    const url = `${baseUrl}?userId=${userId}`;
  
    // Make the GET request using the Fetch API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Display the filtered results in the console
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Example usage of the function
  getPostsByUserId(5);
  