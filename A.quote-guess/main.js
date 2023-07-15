// main.js
import { getQuotes } from './quotes.js';
import { shuffleArray} from './utilities.js';

const quotes = shuffleArray(getQuotes());

for (let i = 0; i < 4; i++) {
    const item = quotes[i];
    const { quote, author } = item;

    const body = document.querySelector("body");
    const div = document.createElement("div");
    const paraQuote = document.createElement("p");
    const paraAuthor = document.createElement("p");

    div.classList.add("wrapper-quote");
    paraQuote.textContent = quote;
    paraAuthor.textContent = author;

    div.append(paraQuote, paraAuthor);
    body.append(div);
}
