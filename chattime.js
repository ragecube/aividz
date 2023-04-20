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

