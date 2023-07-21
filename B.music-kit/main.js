// main.js
const keys = Array.from(document.querySelectorAll(".key"));
let isPlaying = false;
const keysPressed = [];

document.addEventListener('keydown', (evt) => {
    const {key, code} = evt;
    console.log(`Key: ${key} [Code: ${code}]`);

    const correspondance = keys.filter(item => item.dataset.key === key.toLowerCase());
    if (correspondance.length) {
        const musicKey = correspondance[0];
        musicKey.classList.add('is-pressed');
        keysPressed.push(musicKey);
        
        if (!isPlaying) {
            const url = `./sounds/${musicKey.dataset.sound}.wav`;
            const sound = new Audio(url);
            sound.play();
            isPlaying = true;
        }
    }

});

document.addEventListener('keyup', (evt) => {
    const {key, code} = evt;
    const musicKey = document.querySelector(`.key[data-key=${key.toLocaleLowerCase()}]`);
    if (musicKey && musicKey.classList.contains('is-pressed')) {
        musicKey.classList.remove('is-pressed');
    }
    isPlaying = false;
});