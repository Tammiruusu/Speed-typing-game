const RANDOM_QUOTE_API_URL = 'https://dummyjson.com/quotes/random';
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.quote);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = quote;
    quoteInputElement.value = null;
}

renderNewQuote();