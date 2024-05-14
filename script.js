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
    searchGoogle(userInput);
    document.getElementById("userInput").value = "";
}

function searchGoogle(query) {
    var apiKey = "AIzaSyCksB_LXCIFFR9o2OrCK7i-nsEqX9tvplE"; // Replace with your Google API key
    var cx = "jarvis-423300"; // Replace with your Google Search Engine ID
    var url = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + encodeURIComponent(query);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var searchResults = data.items;
        if (searchResults) {
            var firstResult = searchResults[0];
            if (firstResult) {
                var snippet = firstResult.snippet;
                displayMessage("Jarvis", snippet);
            } else {
                displayMessage("Jarvis", "No search results found.");
            }
        } else {
            displayMessage("Jarvis", "Error fetching search results.");
        }
    })
    .catch(error => {
        console.error("Error fetching search results:", error);
        displayMessage("Jarvis", "Error fetching search results.");
    });
}

function displayMessage(sender, message) {
    var chatBox = document.getElementById("chatBox");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
