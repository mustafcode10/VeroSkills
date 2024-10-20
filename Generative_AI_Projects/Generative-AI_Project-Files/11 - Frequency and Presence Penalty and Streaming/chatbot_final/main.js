import openai from "./config.js";
import "./style.css";

const input = document.querySelector("input");
const form = document.querySelector("form");
const asstOutput = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  asstOutput.innerHTML = "";
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
  let asstMessage = "";

  messages.push({
    role: "user",
    content: query,
  });

  const response = await openai.chat.completions.create({
    messages,
    model: "gpt-4",
    temperature: 1.3, // 1 is the default temperature value
    presence_penalty: 0.6,
    frequency_penalty: 0.5,
    stream: true,
  });

  for await (const chunk of response) {
    const textChunk = chunk.choices[0].delta.content;
    if (textChunk) {
      asstMessage += textChunk;
      asstOutput.innerHTML += textChunk;
    }
  }

  messages.push({ role: "assistant", content: asstMessage });
  console.log(messages);
}
