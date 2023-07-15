// ./utilities.js

// Return a random integer between 0 (inclusive) and max (exclusive)
export function getRandomInteger(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

// Extract each element from an array in a random order and nest them within a new array which is returned
export function shuffleArray(arr) {
    // Use spread syntax to make a copy of the array therefore not mutating the original
    const copy = [...arr];
    const newArr = [];
    let min = 0;
    let max = copy.length;
    while (copy.length > 0) {
        const length = copy.length;
        const randomIndex = getRandomInteger(length);
        // splice mutate the original array's length which also creates a way to stop the loop
        const quote = copy.splice(randomIndex, 1)[0];
        newArr.push(quote);
    }
    return newArr;
}