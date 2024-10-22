import openai from './config.js'


async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Tell me a funny joke" }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
  main();



const apiKey = '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';




const apiUrl = 'https://api.openai.com/v1/chat/completions';

async function getChatGPTResponse(prompt) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // or gpt-4 if available
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 150,
            }),
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure `choices` exists and has at least one element
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error("No choices found in API response");
        }

    } catch (error) {
        console.error('Error:', error.message || error);
        return "An error occurred while fetching the response.";
    }
}

// Example usage:
getChatGPTResponse("What is JavaScript?")
    .then(response => console.log(response))
    .catch(err => console.error(err));


