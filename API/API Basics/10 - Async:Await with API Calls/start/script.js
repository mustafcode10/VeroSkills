const main = document.querySelector("main");

const poke = `https://pokeapi.co/api/v2/pokemon/pikachu`

async function fetchData(url){
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Http error status: ${response.status}`)

        }
        const data = await response.json()
        console.log(data)
        renderData(data)
        
    } catch (error) {
        console.error(`There was a problem with fetch `, error)

        
    }

}

fetchData(poke)

function renderData(data) {
    const html = `
      <h2>${data.name}</h2>
      <p>ID: ${data.id}</p>
      <p>Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}</p>
    `;
    main.insertAdjacentHTML("beforeend", html);
  }