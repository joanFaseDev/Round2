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

[Day 2 - Quote Guess](https://github.com/joanFaseDev/Round2/commit/fe3ac8706c7c5d85623c52e34e6947aba9b2c675)


# Day 3 - July 17, 2023

I worked on the Quote Guess application and wrote the code to prevent the user from picking the same type of data twice in a row ("quote" or "author"). If a quote was clicked before then the next clicked element must be an author and if an author was clicked, JavaScript checked if there are still authors elements in the pool. If there is, the loop continues. If not, the result screen that I have yet to write will pop up.
I also refactored some of the code I previously wrote to reuse it as much as possible. Tomorrow, I'll implement visual feedback for the user and will finish writing the logic to associate quote and author elements.

[Day 3 - Quote Guess](https://github.com/joanFaseDev/Round2/commit/5fec1ca2377b1a36908503b888f72ff3a14add60)


# Day 4 - July 18, 2023

I worked almost entirely on visual feedbacks today. I created a dynamic text with a tweening icon to clearly point out to the user which element ('quote' or 'author') it can pick at any time. I also added a bit of css transition to the hovered element to highlight what is currently focused by the user. I made it so the various previous styles are always removed once an element is clicked then a new style related to the type of data the user need to pick (once again 'quote' or 'author') next is added.
Finally, I added more quotes to the pool to create a little more variety. The ideal solution would probably to get a JSON files with hundred of quote/author pairs I could select from but considering the scope of this application I found my solution ok for now. Tomorrow, I'll wrote the logic to keep in memory each pair quote/author selected by the user so I can compare them at the end of the game and compute the result.

[Day 4 - Quote Guess](https://github.com/joanFaseDev/Round2/commit/df49c5d5857a2cdb0b9d0512644c8be980a6d8c9)


# Day 5 - July 19, 2023

I wrote the logic to save each pair quote/author selected by the user. At the end of the game, these pairs are compared to the authentic ones. For each good guess, the user gets a point. There's also a special message displayed if the user guessed all pairs correctly. For each "bad guess", a message is displayed on the screen to indicate to the user who the real author was.
I have yet to implement the logic to restart the game if the user wishes to. I also want to grow the pool of pairs of quotes/authors. Finally, I wish to find a way to host this application as well as the future ones I'll be developing for this round 2 of the 100 days of code challenge. I don't have a lot of time during the week, that's why I've decided to start a new project tomorrow and finish this one this weekend as the amount of work left to do is small but requires research on my part.
I don't know yet what the second project will be, I'll think about it while working my night shift!

[Day 5 - Quote Guess](https://github.com/joanFaseDev/Round2/commit/a684280859e18c262d61a96e62ae0d1b24d546e5)


# Day 6 - July 20, 2023

I started a new small-scope application based on a project from [Wes Bos website](https://wesbos.com/). My goal is to build the application on my own and then, once it is finished, compare what I did with the work of a more experienced developer. 
The application must display a set of 'music keys', each key is associated with a letter and a sound. By pressing the corresponding character on the keyboard, the user will trigger the sound plus visual feedback.
I wrote the code to listen for the user input, check if the key pressed corresponds to one of the 'music key' and, if that is the case, add a style on the 'music keys' element. I also wrote the part about removing the style once the key is released.
Tomorrow, I'll focus on the sound/music part: how to access the sounds, how to play them, ...

[Day 6 - Music Kit]()