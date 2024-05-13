function processCommand(userInput) {
    if (userInput.toLowerCase().includes("reminder")) {
        var reminder = userInput.split("reminder")[1].trim();
        setReminder(reminder);
    } else {
        // Other commands
    }
}

function setReminder(reminder) {
    setTimeout(function() {
        alert("J.A.R.V.I.S. Reminder: " + reminder);
    }, 5000); // Set a reminder after 5 seconds for demonstration purposes
    displayMessage("J.A.R.V.I.S.: Reminder set for \"" + reminder + "\".", document.getElementById("chat-window"));
}
