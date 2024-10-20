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
