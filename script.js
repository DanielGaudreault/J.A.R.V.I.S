function sendCommand() {
    var userInput = document.getElementById("userInput").value;
    var response = generateResponse(userInput);
    displayResponse(response);
}

function generateResponse(userInput) {
    var responses = {
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a computer program, but I'm functioning well. Thank you for asking!",
        "what's the weather like today": "Let me check... It looks like it's sunny with a high of 75°F.",
        // Add more responses here based on expected user queries
    };

    for (var key in responses) {
        if (userInput.toLowerCase().includes(key)) {
            return responses[key];
        }
    }

    return "I'm sorry, I'm not sure how to respond to that.";
}

function displayResponse(response) {
    var responseContainer = document.getElementById("response");
    responseContainer.innerHTML = "Jarvis: " + response;
    // Clear input field after processing
    document.getElementById("userInput").value = "";
}

document.getElementById("sendButton").addEventListener("click", sendCommand);
