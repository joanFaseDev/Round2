// ./utilities.js

// Return a random integer between 0 (inclusive) and max (exclusive)
export function getRandomInteger(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

// Return an array of all values for a specific identifiers among the objects within an original array
export function getObjectValues(arr, key) {
    return arr.map(elem => elem[key]);
}

// Return an array with the first X elements within an original array
export function retrieveItemsFromArray(arr, numberItems) {
    const copy = [...arr];
    const newArr = [];
    if (numberItems > copy.length) {
        numberItems = copy.length;
    }
    for (let i = 0; i < numberItems; i++) {
        newArr.push(copy[i]);
    }
    return newArr;
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

// Display on screen all elements within an array
export function displayItems(arr, numberItems, wrapperClass, itemClass, parentElement) {
    if (numberItems > arr.length) {
        numberItems = arr.length;
    }

    const parent = document.querySelector(parentElement);
    const wrapper = document.createElement("div");
    wrapper.classList.add(wrapperClass);
    
    for (let i = 0; i < numberItems; i++) {
        const p = document.createElement("p");
        p.classList.add(itemClass);
        p.textContent = arr[i];
        wrapper.append(p);
    }
    parent.append(wrapper);
}