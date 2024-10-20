import openai from "./config.js";
import "./style.css";

const form = document.getElementById("posterForm");
const movieOneTitle = document.getElementById("movieOneInput");
const movieTwoTitle = document.getElementById("movieTwoInput");
const posterOutput = document.getElementById("posterOutput");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  posterOutput.innerHTML = "Generating image...";
  console.log(movieOneTitle.value, movieTwoTitle.value);
});

async function generatePoster() {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Create a poster featuring a sleek, silver car with open gull-wing doors in front of a clock tower. The background shows a night sky with lightning. A trail of fire leads from the car's tires. A teenage boy in 1980s attire and a wild-haired scientist stand near the car, hinting at adventure and time travel. Use vibrant colors and futuristic elements for an energetic feel.`,
  });

  const imgURL = image.data[0].url;
  posterOutput.innerHTML = `<img src="${imgURL}" alt="Crossover Movie Poster">`;
}

generatePoster();
