function searchWikipedia(query, chatContainer) {
    var apiUrl = constructApiUrl(query);
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy server URL
    var requestUrl = proxyUrl + apiUrl;

    fetch(requestUrl)
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
