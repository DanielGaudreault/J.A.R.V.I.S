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
    if (userInput.toLowerCase().includes("search")) {
        // Extract search query
        var searchQuery = userInput.substring(7).trim(); // Remove "search" keyword
        searchWikipedia(searchQuery, chatContainer);
    } else {
        displayMessage("Assistant: Sorry, I'm not sure how to help with that. Try searching using 'search [topic]'.", "assistant-message", chatContainer);
    }
}

function searchWikipedia(query, chatContainer) {
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.query && data.query.search && data.query.search.length > 0) {
                var searchResults = data.query.search;
                var firstResult = searchResults[0]; // Get the first search result

                // Display the summary of the first search result
                var summary = firstResult.snippet.replace(/<[^>]*>/g, ''); // Remove HTML tags
                displayMessage("Assistant: " + summary, "assistant-message", chatContainer);
            } else {
                displayMessage("Assistant: No results found for '" + query + "'.", "assistant-message", chatContainer);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            displayMessage("Assistant: Sorry, something went wrong while fetching data.", "assistant-message", chatContainer);
        });
}

function displayMessage(text, className, container) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = text;
    container.appendChild(messageElement);
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}
