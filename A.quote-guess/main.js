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
    currentIndexAnswer: 0,
    answers: [],
    // Make a copy of the pairs quote/author used for the game so that it can be used later to compute its result.
    solution: [...items],
    userPoints: 0, 
    setLastItem(lastItem) {
        this.lastItemClicked = lastItem; 
    },
    setNewQuote(evt) {
        const answer = {};
        answer.quote = evt.target.textContent;
        this.answers.push(answer);
    },
    setNewAuthor(evt) {
        const author = evt.target.textContent;
        this.answers[this.getIndexAnswer()].author = author;
        this.incrementIndexAnswer();
    },
    getIndexAnswer() {
        return this.currentIndexAnswer;
    },
    getUserPoints() {
        return this.userPoints;
    },
    incrementIndexAnswer() {
        this.currentIndexAnswer++;
    },
    incrementUserPoints() {
        this.userPoints++;
    }
};

console.log(handler.solution);

// Is called when the document, its elements and styles are fully loaded.
window.addEventListener('load', (evt) => {
    displayItems(quotes, 4, "wrapper-quotes", "quote", ".start");
    displayItems(authors, 4, "wrapper-authors", "author", ".start");

    document.querySelectorAll(".quote").forEach(item => {
        item.addEventListener('click', (evt) => {
            if (checkPropertyValue(handler, "lastItemClicked", "author")) {
                handler.setNewQuote(evt);
                
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
        item.addEventListener('click', (evt) => {
            if (checkPropertyValue(handler, "lastItemClicked", "quote")) {
                handler.setNewAuthor(evt);

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
                    // For each pair quote/author displayed, check the user's corresponding answer.
                    handler.solution.forEach(item => {
                        const {quote, author} = item;
                        handler.answers.forEach(answer => {
                            const {quote: answerQuote, author: answerAuthor} = answer;
                            if (quote === answerQuote) {
                                // If both quote & author were guessed correctly
                                if (author === answerAuthor) {
                                    handler.incrementUserPoints();
                                    console.log(`Correct!\nThe author of "${answerQuote}" is ${answerAuthor}.`);
                                // If a quote wasn't associated with its rightful author    
                                } else {
                                    const parent = document.querySelector(".result");
                                    const p = document.createElement("p");
                                    p.innerHTML = `<i class="fa-solid fa-circle-xmark fa-bounce fa-xl"></i>You guessed wrong. You thought that <span class="bold">${answerAuthor}</span> was the author of the quote <span class="bold">"${answerQuote}"</span>.\nIts true author is <span class="bold">${author}</span>.`;
                                    parent.append(p);
                                }
                            }
                        })

                    });
                    const parent = document.querySelector(".result");
                    const result = document.createElement("p");
                    result.classList.add("result-message");
                    result.innerHTML = `You got <span class="bold">${handler.getUserPoints()}</span> points. ${(handler.getUserPoints() === handler.solution.length) ? "Terrific! You correctly associated all quotes with their respective authors! Congratulation!" : ""}`;
                    parent.append(result);
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

