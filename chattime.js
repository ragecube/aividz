var chatApi = new OpenAIChatApi({
  apiKey: "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"
});

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  chatApi.send(userInput).then(function(response) {
    var chatContainer = document.getElementById("chat-container");
    var chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble");
    chatBubble.innerHTML = "<span class='user-message'>" + userInput + "</span><br><span class='bot-message'>" + response.message + "</span>";
    chatContainer.appendChild(chatBubble);
    document.getElementById("user-input").value = "";
  });
}

