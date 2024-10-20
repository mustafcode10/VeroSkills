import openai from "./config.js";
import "./style.css";

const ingredientsInput = document.querySelector("#ingredientsInput");
const form = document.querySelector("form");
const recipeOutput = document.querySelector("#recipeOutput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("It works!");
  ingredientsInput.value = "";
});
