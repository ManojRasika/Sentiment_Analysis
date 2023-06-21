// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get the input text from the textarea
    const text = document.getElementById('textInput').value;

    // Call the Google Cloud Function using Fetch API
    fetch('<https://europe-west1-hazel-tea-390307.cloudfunctions.net/sentiment_analysis_2>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        // Display the result in the resultContainer div
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerText = 'Sentiment: ' + data.sentiment;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Attach the submitForm function to the form submission event
const form = document.getElementById('sentimentForm');
form.addEventListener('submit', submitForm);
