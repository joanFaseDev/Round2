# Music Kit

## About

This project is based on the 'Drum Kit' project by Wes Bos. The goal here is to build a small-scope application using HTML, CSS, and JavaScript. The application must display a set of 'keys' associated with a letter and a sound. By pressing a letter on the keyboard, the user will trigger the corresponding key which will display some CSS styles (any visual feedback indicating that the key is pressed) and will play the sound associated.
My objective is to recreate Wes Bos's application without watching its video. Once it is complete, I will look at how Wes Bos managed to do it. What I'm interested in here is first trying to solve a problem by myself and then compare my solution to one of a more experienced developer.

## Pseudo-code

- [] Display on screen a set of 'music key' elements. Each key is associated with a alphabetical letter ('a', 'b', 'l',...).
- [X] Find a way to listen for any keyboard's key being pressed.
- [X] When a key is pressed, save the character associated with it. Case sensitivity doesn't apply so 'v' and 'V' are considered the same.
- [X] If the character saved corresponds to one of the alphabetical letter displayed on screen then add a visual feedback on this letter's key.
- [X] Find a way to listen for any keyboard's key being released.
- [X] When a key is released, save the character associated with it.
- [X] Check if there is a music key associated with this character AND if that music key has a visual feedback applied on it. If that is the case, remove the visual feedback (The goal here is to only apply the visual feedback for a short amount of time, when the key is pressed.).
- [] Find a way to play a sound/music in the browser.
- [] Access various sounds/musics through a base URL plus a query data corresponding to a specific sound/music.
- [] Associate each 'music key' with a query data.
- [] When a 'music key' is activated, play a sound using the base URL plus the query data contained in the specific 'music key'.
- [] Find a 2D styled image to insert as a background for the application.