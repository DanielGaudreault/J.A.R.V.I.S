document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendButton").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatWindow = document.getElementById("chat-window");

    displayMessage("You: " + userInput, chatWindow);
    processCommand(userInput);
    document.getElementById("user-input").value = "";
}

function processCommand(userInput) {
    if (userInput.toLowerCase().includes("weather")) {
        getWeather(userInput);
    } else if (userInput.toLowerCase().includes("reminder")) {
        var reminder = userInput.split("reminder")[1].trim();
        setReminder(reminder);
    } else if (userInput.toLowerCase().includes("search")) {
        var query = userInput.split("search")[1].trim();
        search(query);
    } else {
        displayMessage("J.A.R.V.I.S.: I'm sorry, I don't understand that command.", document.getElementById("chat-window"));
    }
}

function getWeather(userInput) {
    var location = userInput.split("weather")[1].trim();
    var apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var description = data.weather[0].description;
            var temperature = (data.main.temp - 273.15).toFixed(1); // Convert temperature from Kelvin to Celsius
            var response = "The weather in " + location + " is currently " + description + " with a temperature of " + temperature + "°C.";
            displayMessage("J.A.R.V.I.S.: " + response, document.getElementById("chat-window"));
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            displayMessage("J.A.R.V.I.S.: Sorry, something went wrong while fetching weather data.", document.getElementById("chat-window"));
        });
}

function setReminder(reminder) {
    setTimeout(function() {
        alert("J.A.R.V.I.S. Reminder: " + reminder);
    }, 5000); // Set a reminder after 5 seconds for demonstration purposes
    displayMessage("J.A.R.V.I.S.: Reminder set for \"" + reminder + "\".", document.getElementById("chat-window"));
}

function search(query) {
    var apiUrl = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var abstract = data.AbstractText;
            if (abstract) {
                displayMessage("J.A.R.V.I.S.: " + abstract, document.getElementById("chat-window"));
            } else {
                displayMessage("J.A.R.V.I.S.: No information found for \"" + query + "\".", document.getElementById("chat-window"));
            }
        })
        .catch(error => {
            console.error("Error fetching search results:", error);
            displayMessage("J.A.R.V.I.S.: Sorry, something went wrong while fetching search results.", document.getElementById("chat-window"));
        });
}

function displayMessage(message, element) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    element.appendChild(messageElement);
    element.scrollTop = element.scrollHeight;
}
