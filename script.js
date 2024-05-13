document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendButton").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatWindow = document.getElementById("chat-window");

    displayMessage("You: " + userInput, chatWindow);
    processCommand(userInput);
    document.getElementById("user-input").value = "";
}

function processCommand(userInput) {
    // Here you'll implement the logic to process user commands
    // This could involve natural language processing, API calls, etc.
    // For now, let's just echo back the user's input
    var response = "I'm sorry, I don't understand that command.";
    displayMessage("J.A.R.V.I.S.: " + response, document.getElementById("chat-window"));
}

function displayMessage(message, element) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    element.appendChild(messageElement);
    element.scrollTop = element.scrollHeight;
}
