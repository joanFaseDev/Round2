// main.js
import { getQuotes } from './quotes.js';
import { shuffleArray} from './utilities.js';
import { retrieveItemsFromArray } from './utilities.js'; 
import { getObjectValues } from './utilities.js';
import { displayItems } from './utilities.js';

const items = retrieveItemsFromArray(shuffleArray(getQuotes()), 4);
const quotes = shuffleArray(getObjectValues(items, "quote"));
const authors = shuffleArray(getObjectValues(items, "author"));
console.log(items, quotes, authors);

displayItems(quotes, 4, "wrapper-quotes", "quote", ".start");
displayItems(authors, 4, "wrapper-authors", "author", ".start");

document.querySelectorAll(".quote").forEach(item => {
    item.addEventListener('click', () => {
       const clone = item.cloneNode(true);
       clone.classList.remove("quote");
       clone.classList.add("answer-quote");
       const answerSection = document.querySelector(".wrapper-answer-quotes");
       answerSection.append(clone);
       item.remove(); 
    });
});

document.querySelectorAll(".author").forEach(item => {
    item.addEventListener('click', () => {
       const clone = item.cloneNode(true);
       clone.classList.remove("author");
       clone.classList.add("answer-author");
       const answerSection = document.querySelector(".wrapper-answer-authors");
       answerSection.append(clone);
       item.remove(); 
    });
});
