import openai from "./config.js";

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant, providing advice on nutrition, exercise, and general well-being. Please keep your reply to two sentences.",
  },
  {
    role: "user",
    content:
      "Hi, I'm Guil! Give me some tips for improving my morning routine?",
  },
  {
    role: "assistant",
    content:
      "To improve your morning routine, try setting a consistent wake-up time, include some stretching or light exercises to wake up your body, and have a balanced breakfast with protein, whole grains, and fruits or vegetables.",
  },
  { role: "user", content: "Also, what are some healthy breakfast ideas?" },
  {
    role: "assistant",
    content:
      "Some healthy breakfast ideas include oatmeal topped with berries and nuts, a smoothie with spinach, banana, and almond milk, or scrambled eggs with vegetables and whole grain toast.",
  },
  { role: "user", content: "Do you remember my name?" },
];

async function main() {
  const response = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  console.log(response.choices[0].message.content);
}

main();
