import openai from "./config.js";
import "./style.css";

const form = document.getElementById("posterForm");
const movieOneTitle = document.getElementById("movieOneInput");
const movieTwoTitle = document.getElementById("movieTwoInput");
const posterOutput = document.getElementById("posterOutput");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  posterOutput.innerHTML = "Generating image...";

  const prompt = `Create a crossover movie poster for these two movies: "${movieOneTitle.value.trim()}" and "${movieTwoTitle.value.trim()}".`;
  generatePoster(prompt);
  form.reset();
});

async function generatePoster(prompt) {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt,
  });

  const imgURL = image.data[0].url;
  if (imgURL) {
    posterOutput.innerHTML = `<img src=${imgURL} alt="Crossover Movie Poster">`;
  } else {
    posterOutput.innerHTML =
      "Sorry, an error occurred while generating the poster.";
  }
}
