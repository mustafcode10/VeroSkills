import openai from "./config.js";
import "./style.css";

const input = document.querySelector("input");
const form = document.querySelector("form");
const asstOutput = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  asstOutput.innerHTML = "Thinking...";
  main(input.value.trim());
  input.value = "";
});

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant, providing advice on nutrition, exercise, and general well-being. If the user asks a question unrelated to those topics, kindly inform the user that you're unable to reply. Keep your reply to five sentences.",
  },
];

async function main(query) {
  messages.push({
    role: "user",
    content: query,
  });

  const response = await openai.chat.completions.create({
    messages,
    model: "gpt-4",
    temperature: 1.3, // 1 is the default temperature value
  });

  messages.push(response.choices[0].message);
  console.log(response.choices[0].message.content);
  asstOutput.innerHTML += response.choices[0].message.content;
}
