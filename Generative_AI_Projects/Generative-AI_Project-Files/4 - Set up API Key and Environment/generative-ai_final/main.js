import openai from "./config.js";

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Tell me a funny joke" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
