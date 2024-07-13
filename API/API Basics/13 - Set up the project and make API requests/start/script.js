const main = document.querySelector("main");
const apodEl = document.querySelector(".apod");
const roverList = document.querySelector(".rover-list");

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There is a problem with your fetch:", error);
  }
}
