# 100 Days of Code - Round 2

## Day 1 - July 15, 2023

I started my first project for this round 2 of the 100 days of code challenge, which is a small-scoped application using HTML, CSS, and vanilla JavaScript where a user must guess the authors of various famous quotes.
I set up Sass and am using this project to get familiar with the 'module' thing introduced in ES6. For now, I have a list of quotes that I can randomly sort and display on screen.
Tomorrow I'll work on a way to select a quote and then an author to associate them as a user's answer/input.

[Day 1 - Quote Guess](https://github.com/joanFaseDev/Round2/commit/0f9f43251345be1c808c6bd2750379f0c5c292e8)


## Day 2 - July 16, 2023

I made progress on the Quote Guess application. When the document is loaded, 4 pairs of quotes/authors are picked out of a predefined list. The pairs are then split into two groups (quotes & authors) then randomly sorted and displayed on screen.
Currently, when a quote or author is clicked it is cloned and then moved in another container with a dedicated style (the original element is removed from the document). Visually it works for now but I have yet to implement the logic to 1) prevent the user to pick two quotes or authors in a row, and 2) associate a quote and an author clicked into an object I can later check to test the user's answer.
I guess I now know what to do tomorrow!

[Day 2 - Quote Guess]()