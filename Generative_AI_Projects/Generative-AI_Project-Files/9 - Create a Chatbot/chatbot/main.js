import openai from "./config.js";
import "./style.css";

const input = document.querySelector("input");
const form = document.querySelector("form");
const asstOutput = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  asstOutput.innerHTML = "Thinking...";
  main();
  input.value = "";
});

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
];

async function main() {
  const response = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  console.log(response.choices[0].message);
  asstOutput.innerHTML = response.choices[0].message.content;
}
