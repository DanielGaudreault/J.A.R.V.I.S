document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendButton").addEventListener("click", sendMessage);
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatContainer = document.getElementById("chat-container");
    
    // Display user message
    displayMessage("You: " + userInput, "user-message", chatContainer);
    
    // Clear input field
    document.getElementById("user-input").value = "";

    // Respond to user input
    respondToUserInput(userInput, chatContainer);
}

function respondToUserInput(userInput, chatContainer) {
    // Simulate response based on user input
    var response;
    if (userInput.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        response = "I'm just a simple HTML assistant, but thank you for asking!";
    } else if (userInput.toLowerCase().includes("time")) {
        response = "The current time is: " + new Date().toLocaleTimeString();
    } else {
        response = "Sorry, I couldn't understand that.";
    }

    // Display assistant message
    displayMessage("Assistant: " + response, "assistant-message", chatContainer);
}

function displayMessage(text, className, container) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = text;
    container.appendChild(messageElement);
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

console.log("Script loaded successfully."); // Check if script is loaded
