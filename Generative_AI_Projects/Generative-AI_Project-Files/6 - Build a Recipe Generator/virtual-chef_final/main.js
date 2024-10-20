import openai from "./config.js";
import "./style.css";

const ingredientsInput = document.querySelector("#ingredientsInput");
const form = document.querySelector("form");
const recipeOutput = document.querySelector("#recipeOutput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  main(ingredientsInput.value.trim());
  ingredientsInput.value = "";
});

async function main(ingredients) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert chef. Your task is to generate a short, tasty meal recipe using the following ingredients provided by the user: ${ingredients}.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
