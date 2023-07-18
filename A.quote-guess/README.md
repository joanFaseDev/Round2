# Quote Guess

## About

This project is about buildind a small-scope application using HTML, CSS, vanilla JavaScript and SASS as I wish to get familiar with the latter. The application should displayed multiple famous quotes, each split in half. First halfs will be to the left of the screen and second halfs will be to the right. The goal will be for the user to find the first and second half of the quote then to validate its choice by clicking in succession on the first then second half. Once all parts have been clicked, good and bad answers will be highlighted then Users will have the choice to start a new game.

## PseudoCode

- [X] Store numerous famous quotes (quote + author) in a file.
- [X] Create a function to randomly sort an array.
- [X] Create a function to generate a random integer between 0 and X.
- [X] Randomly access four of these quotes.
- [X] Display them on screen.
- [X] Create a function to access a specific key's value for all the objects stored in an array.
- [X] Store the quotes (quotes only) of the displayed quotes in a list. Randomly sort that list.
- [X] Store the authors (authors only) of the displayed quotes in a list. Randomly sort that list.
- [X] Create a function to display on screen each element within an array.
- [X] Display the quotes in a column located to the left of the screen.
- [X] Display the authors in a column located to the right of the screen.

- [] Grow in size the number of quotes in the dedicated file.
- [X] Create a condition forcing user to select a quote before selecting an author.
- [X] Create a condition forcing user to select an author if its last element clicked was a quote.
- [X] Once an element is clicked and the logic applied, store in a variable the type of this element ('quote' or 'author').
- [X] If the last element clicked was a quote, the user MUST select an author.
- [X] If the last element clicked was an author AND there are still quotes and authors left in the pool THEN the user MUST select a quote.
- [] Add an HTML element as visual feedback to clearly point to the user what type of data he CAN click ('quote' or 'author') at any moment.
- [] Add a 'gray' color style to 'quote' or 'author' data when they can't be clicked.
- [X] Create a function to remove all previous visual feedbacks before adding new ones.
- [X] If there are no more quotes/authors in the pool THEN the game is over and the result can be compute.
- [X] Error: The feedback style on quote elements is active even when the user has to pick an author. The style need to be set ONLY when the user has to pick a quote. Same logic for author elements.
- [X] Error: The feedback style is also applied to the elements in the 'answer' pool. The style need to be applied only on the elements that can actually be clicked to not confuse the user.
- [X] If a quote or an author is clicked:
    - [X] The element is clone then placed within a special container with a dedicated style. The original element is removed from the DOM.
    - [X] Refactor the code to clone and display the clicked elements.
    - [X] All other quotes/authors (depending on what type of data the user has clicked) are disabled and can't be clicked until an author/quote has been associated.
    - [X] Once quote and author have been selected they're horizontally aligned in the container.
    - [X] Then the user can once again select a quote or author in the elements left in the columns.
- [] Once an 'author' element has been clicked, associate it with the previously clicked 'quote' element and store the date.
- [] When the game is over, compare each pair 'quote'/'author' chose by the user to the corresponding 'quote'/'author' in the quote file.
- [] For each good answer, the user get a point.
- [] Good and bad answers have a different style (plus an icon associated) to make it obvious to the user which answer was wrong and which one was right.
- [] Once the game is over, display the score and ask the user if it wants to play again.

## Links
[Sass Basics](https://sass-lang.com/guide/)