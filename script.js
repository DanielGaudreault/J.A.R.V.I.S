function sendCommand() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("response").innerHTML = "Command: " + userInput;

    // Send userInput to backend for processing (AJAX or fetch)
    // Example:
    // fetch('/process', {
    //     method: 'POST',
    //     body: JSON.stringify({ command: userInput }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     document.getElementById("response").innerHTML = "Response: " + data.response;
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
}
