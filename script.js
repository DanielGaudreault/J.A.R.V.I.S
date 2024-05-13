document.getElementById("sendButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    displayResponse("You: " + userInput);
    // Clear input field after processing
    document.getElementById("userInput").value = "";
    // Simulate Jarvis response
    setTimeout(function() {
        var response = generateResponse(userInput);
        displayResponse("Jarvis: " + response);
    }, 500);
});

function generateResponse(userInput) {
    // Simulate Jarvis's response based on user input
    return "I'm sorry, I'm just a simple assistant and can't answer that.";
}

function displayResponse(response) {
    var responseContainer = document.getElementById("response");
    responseContainer.innerHTML += "<p>" + response + "</p>";
}
