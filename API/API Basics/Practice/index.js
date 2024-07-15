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
fetchData(url, renderData)