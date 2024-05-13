// app.js

const readline = require('readline');
const { getWeather, setReminder, search, getJoke } = require('./assistant');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle user input
function handleInput(input) {
    if (input.toLowerCase().includes("weather")) {
        const location = input.split("weather")[1].trim();
        getWeather(location)
            .then(weatherData => {
                console.log(`Weather in ${location}: ${weatherData.temperature}°C, ${weatherData.condition}`);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    } else if (input.toLowerCase().includes("reminder")) {
        const reminder = input.split("reminder")[1].trim();
        setReminder(reminder);
    } else if (input.toLowerCase().includes("search")) {
        const query = input.split("search")[1].trim();
        search(query);
    } else if (input.toLowerCase().includes("joke")) {
        getJoke();
    } else {
        console.log("Sorry, I don't understand that command.");
    }
}

// Prompt user for input
rl.question("How can I assist you? ", function(input) {
    handleInput(input);
    rl.close();
});
