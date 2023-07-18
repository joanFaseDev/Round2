// main.js
import { getQuotes } from './quotes.js';
import { shuffleArray} from './utilities.js';
import { retrieveItemsFromArray } from './utilities.js'; 
import { getObjectValues } from './utilities.js';
import { displayItems } from './utilities.js';
import { validateItem } from './utilities.js';
import { checkPropertyValue } from './utilities.js';
import { clearAllChildren } from './utilities.js';
import { createFeedbackElement } from './utilities.js';
import { addStylesToElement } from './utilities.js';
import { removeStylesToElement } from './utilities.js';


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
                clearAllChildren("feedback-quotes");
                removeStylesToElement("quote", ["select-quote", "pointer"]);
                addStylesToElement("author", ["select-author", "pointer"]);
                createFeedbackElement(
                    "feedback-authors", 
                    ["fa-solid", "fa-arrow-down", "fa-bounce", "fa-xl"], 
                    "Now click on its author"
                );
                validateItem(item, "quote", "answer-quote", ".wrapper-answer-quotes");
                handler.setLastItem("quote");
            }
        });
    });
    
    document.querySelectorAll(".author").forEach(item => {
        item.addEventListener('click', () => {
            if (checkPropertyValue(handler, "lastItemClicked", "quote")) {
                clearAllChildren("feedback-authors");
                removeStylesToElement("author", ["select-author", "pointer"]);
                addStylesToElement("quote", ["select-quote", "pointer"]);
                createFeedbackElement(
                    "feedback-quotes", 
                    ["fa-solid", "fa-arrow-down", "fa-bounce", "fa-xl"], 
                    "First, click on a quote"
                );
                validateItem(item, "author", "answer-author", ".wrapper-answer-authors");
                // Every time a quote/author pair is added, check if there are still authors left to associate.
                const wrapperAuthors = document.querySelector(".wrapper-authors");
                // Game is over and result screen is displayed.
                if (wrapperAuthors.childElementCount === 0) {
                    // Clear all visual feedbacks now that the game is over
                    clearAllChildren("feedback-quotes");
                    removeStylesToElement("quote", ["select-quote", "pointer"]);
                // There is still authors left to associate
                } else {
                    handler.setLastItem("author");
                }   
            }
        });
    });

    // Must be call once when the page is fully loaded as the user as yet to click on an element.
    clearAllChildren("feedback-quotes");
    clearAllChildren("feedback-authors");
    createFeedbackElement(
        "feedback-quotes", 
        ["fa-solid", "fa-arrow-down", "fa-bounce", "fa-xl"], 
        "First, click on a quote"
    );

    // Select all nodes with a class of 'quotes' and add them a class of 'select-quote'
    addStylesToElement("quote", ["select-quote", "pointer"]);
});

