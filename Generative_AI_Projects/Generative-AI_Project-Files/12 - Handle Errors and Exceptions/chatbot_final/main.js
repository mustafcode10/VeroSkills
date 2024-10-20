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
      "You are a helpful assistant, providing advice on nutrition, exercise, and general well-being. If the user asks a question unrelated to those topics, kindly inform the user that you're unable to reply. Please keep your reply short.",
  },
];

async function main(query) {
  messages.push({
    role: "user",
    content: query,
  });

  try {
    const response = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
      temperature: 1.5, // 1 is the default
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
    });

    if (response?.choices?.[0]?.message) {
      messages.push(response.choices[0].message);
      console.log(messages);
      asstOutput.innerHTML = response.choices[0].message.content;
    } else {
      throw new Error("Invalid response structure from OpenAI");
    }
  } catch (error) {
    console.error("Error: ", error);
    asstOutput.innerHTML =
      "Sorry, an error occurred while processing your request.";
  }
}
