const main = document.querySelector("main");
const apodEl = document.querySelector(".apod");
const roverList = document.querySelector(".rover-list");

const apiKey = "YOUR API KEY";

const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const roverURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-01-15&api_key=${apiKey}`;

async function fetchData(url, handleData) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    handleData(data);
  } catch (error) {
    console.error("There is a problem with your fetch:", error);
  }
}

function handleApodData(data) {
  const html = `
    <img src="${data.url}" alt="apod">
    <p>${data.title}</p>
  `;
  apodEl.insertAdjacentHTML("beforeend", html);
}

function handleRoverData(data) {
  const photos = data.photos
    .map(photo => `<li><img src="${photo.img_src}" alt="Rover photo"></li>`)
    .join("");
  roverList.insertAdjacentHTML("beforeend", photos);
}

// Fetch and displat APOD
fetchData(apodURL, handleApodData);

// Fetch and display rover images
fetchData(roverURL, handleRoverData);
