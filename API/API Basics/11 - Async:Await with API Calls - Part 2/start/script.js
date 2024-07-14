const main = document.querySelector("main");

const poke = "https://pokeapi.co/api/v2/pokemon-species";

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    renderSpecies(data)
  } catch (error) {
    console.error("There is a problem with your fetch:", error);
  }
}

fetchData(poke);

function renderData(data) {
  const html = `
    <h2>${data.name}</h2>
    <p>ID: ${data.id}</p>
    <p>Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}</p>
  `;
  main.insertAdjacentHTML("beforeend", html);
}

function renderSpecies(data) {
  const listItems = data.results.map(item => `<li>${item.name}</li>`).join("");
  const html = `
    <h2>Pokemon Species</h2>
    <ul>${listItems}</ul>
  `;
  main.insertAdjacentHTML("beforeend", html);
}