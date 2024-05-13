document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") {
        return;
    }
    displayMessage("You", userInput);
    document.getElementById("userInput").value = "";
    setTimeout(function() {
        var response = generateResponse(userInput);
        displayMessage("Jarvis", response);
    }, Math.random() * 1000 + 500);
}

function generateResponse(userInput) {
    // Simulate Jarvis's response based on user input
    if (userInput.toLowerCase().includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("weather")) {
        return "Let me check... It looks like it's sunny with a high of 75°F.";
    } else {
        return "I'm sorry, I'm just a simple assistant and can't answer that.";
    }
}

function displayMessage(sender, message) {
    var chatBox = document.getElementById("chatBox");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
