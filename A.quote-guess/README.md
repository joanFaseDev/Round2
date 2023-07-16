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
- [] If a quote or an author is clicked:
    - [X] The element is clone then placed within a special container with a dedicated style. The original element is removed from the DOM.
    - [] All other quotes/authors (depending on what type of data the user has clicked) are disabled and can't be clicked until an author/quote has been associated.
    - [X] Once quote and author have been selected they're horizontally aligned in the container.
    - [] Then the user can once again select a quote or author in the elements left in the columns.

## Links
[Sass Basics](https://sass-lang.com/guide/)