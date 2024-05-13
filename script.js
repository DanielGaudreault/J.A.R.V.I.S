function sendCommand() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("response").innerHTML = "Command: " + userInput;
    // Clear input field after processing
    document.getElementById("userInput").value = "";
}

// Add event listener to execute sendCommand function when the button is clicked
document.getElementById("sendButton").addEventListener("click", sendCommand);
