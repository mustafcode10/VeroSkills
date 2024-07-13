const main = document.querySelector("main");

const poke = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    renderData(data);
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
