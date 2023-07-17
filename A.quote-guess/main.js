// main.js
import { getQuotes } from './quotes.js';
import { shuffleArray} from './utilities.js';
import { retrieveItemsFromArray } from './utilities.js'; 
import { getObjectValues } from './utilities.js';
import { displayItems } from './utilities.js';
import { validateItem } from './utilities.js';
import { checkPropertyValue } from './utilities.js';
import { clearAllChildren } from './utilities.js';


const items = retrieveItemsFromArray(shuffleArray(getQuotes()), 4);
const quotes = shuffleArray(getObjectValues(items, "quote"));
const authors = shuffleArray(getObjectValues(items, "author"));
const handler = {
    // Initialize 'lastItemClicked' with 'author' so the user can only select a quote when the game starts.
    lastItemClicked: "author",
    setLastItem(lastItem) {
        this.lastItemClicked = lastItem; 
    },
};

// Is called when the document, its elements and styles are fully loaded.
window.addEventListener('load', (evt) => {
    displayItems(quotes, 4, "wrapper-quotes", "quote", ".start");
    displayItems(authors, 4, "wrapper-authors", "author", ".start");

    document.querySelectorAll(".quote").forEach(item => {
        item.addEventListener('click', () => {
            if (checkPropertyValue(handler, "lastItemClicked", "author")) {
                validateItem(item, "quote", "answer-quote", ".wrapper-answer-quotes");
                handler.setLastItem("quote");
            }
        });
    });
    
    document.querySelectorAll(".author").forEach(item => {
        item.addEventListener('click', () => {
            if (checkPropertyValue(handler, "lastItemClicked", "quote")) {
                validateItem(item, "author", "answer-author", ".wrapper-answer-authors");
                // Every time a quote/author pair is added, check if there are still authors left to associate.
                const wrapperAuthors = document.querySelector(".wrapper-authors");
                if (wrapperAuthors.childElementCount === 0) {
                    // Game is over and result screen is displayed.
                } else {
                    // There is still authors left to associate
                    handler.setLastItem("author");
                }   
            }
        });
    });

    if (checkPropertyValue(handler, "lastItemClicked", "author")) {
        clearAllChildren("feedback-quotes");

        const feedbackQuote = document.querySelector(".feedback-quotes");
        console.dir(feedbackQuote.children);
        const p = document.createElement("p");
        p.textContent = "Pick a QUOTE!";
        feedbackQuote.append(p);
    }    
});

