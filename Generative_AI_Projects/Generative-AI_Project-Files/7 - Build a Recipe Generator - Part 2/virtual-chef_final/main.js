import openai from "./config.js";
import "./style.css";

const ingredientsInput = document.querySelector("#ingredientsInput");
const form = document.querySelector("form");
const recipeOutput = document.querySelector("#recipeOutput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  recipeOutput.innerHTML = "Thinking...";
  main(ingredientsInput.value.trim());
  ingredientsInput.value = "";
});

async function main(ingredients) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        You are an expert chef and a helpful assistant specialized in culinary creations. Your task is to generate a short, tasty meal recipe using the following real ingredients provided by the user: ${ingredients}.
       
        Ensure the ingredients listed are actual, commonly known food items. If the list contains non-food items or items not typically used in cooking, kindly inform the user that a recipe cannot be generated with those inputs.
        
        Format the recipe using HTML, starting with an <h2> tag for the recipe's name. Include a simple step-by-step preparation method. The recipe should be practical and easy to follow.
        `,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  recipeOutput.innerHTML = completion.choices[0].message.content;
}
