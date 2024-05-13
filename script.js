function sendCommand() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("response").innerHTML = "Command: " + userInput;
    // Process userInput and generate response (in this case, just echoing back the command)
    // You can add more sophisticated logic here
}

// Add event listener to execute sendCommand function when the button is clicked
document.getElementById("sendButton").addEventListener("click", sendCommand);
