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

    // Simulate backend processing with AJAX
    setTimeout(function() {
        simulateBackendProcessing(userInput, chatContainer);
    }, 500);
}

function simulateBackendProcessing(userInput, chatContainer) {
    // Simulate AJAX call to JSON file (replace with actual backend endpoint)
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var assistantMessageElement = document.createElement("div");
            assistantMessageElement.classList.add("message", "assistant-message");
            assistantMessageElement.textContent = "Assistant: " + (response[userInput.toLowerCase()] || "Sorry, I couldn't understand that.");
            chatContainer.appendChild(assistantMessageElement);
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };
    // Replace 'responses.json' with your backend endpoint
    xhr.open("GET", "responses.json", true);
    xhr.send();
}

document.getElementById("sendButton").addEventListener("click", sendMessage);
