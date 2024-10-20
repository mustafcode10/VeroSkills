import openai from "./config.js";

async function main() {
  const response = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(response.choices[0].message.content);
}

main();
