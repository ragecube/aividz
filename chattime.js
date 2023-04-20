const api = new OpenAI('<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>');

const chatContainer = document.getElementById('chat-container');

const prompt = 'Hello, what can I help you with today?';

async function getResponse(prompt) {
  const completions = await api.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 150,
    n: 1,
    stop: '\n',
  });

  const message = completions.choices[0].text.trim();
  return message;
}

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.innerHTML = userInput;
  chatContainer.appendChild(userMessage);
  
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';
  botMessage.innerHTML = await getResponse(userInput);
  chatContainer.appendChild(botMessage);
  
  document.getElementById('user-input').value = '';
}

document.getElementById('send-message').addEventListener('click', sendMessage);
