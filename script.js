function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatContainer = document.getElementById("chat-container");
    
    // Display user message
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "user-message");
    userMessageElement.textContent = "You: " + userInput;
    chatContainer.appendChild(userMessageElement);
    
    // Clear input field
    document.getElementById("user-input").value = "";

    // Generate response
    setTimeout(function() {
        var assistantResponse = generateResponse(userInput);
        var assistantMessageElement = document.createElement("div");
        assistantMessageElement.classList.add("message", "assistant-message");
        assistantMessageElement.textContent = "Assistant: " + assistantResponse;
        chatContainer.appendChild(assistantMessageElement);

        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
}

function generateResponse(userInput) {
    // Simple responses based on user input
    if (userInput.toLowerCase().includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        return "I'm just a simple HTML assistant, but thank you for asking!";
    } else if (userInput.toLowerCase().includes("time")) {
        return "The current time is: " + new Date().toLocaleTimeString();
    } else {
        return "Sorry, I can't do that without backend processing.";
    }
}

document.getElementById("sendButton").addEventListener("click", sendMessage);
