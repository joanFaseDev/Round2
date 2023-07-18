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

// Clone an HTML element then place it inside a parent element. Remove the original one. 
export function validateItem(item, classToRemove, classToAdd, classParent) {
    const clone = item.cloneNode(true);
    clone.classList.remove(classToRemove);
    clone.classList.add(classToAdd);
    const answerSection = document.querySelector(classParent);
    answerSection.append(clone);
    item.remove();
}

// Check the value of an object specific property
export function checkPropertyValue(obj, property, value) {
    return obj[property] === value;
}

// Removed all child element from a HTML parent element
export function clearAllChildren(parentClass) {
    const parent = Array.from(document.querySelector(`.${parentClass}`).children);
    parent.forEach((item) => item.remove());
}

export function createFeedbackElement(parentClass, classesToAdd, textContent) {
    const feedbackQuote = document.querySelector(`.${parentClass}`);
    const p = document.createElement("p");
    const i = document.createElement("i");
    console.log(...classesToAdd);
    i.classList.add(...classesToAdd);
    p.textContent = textContent;
    p.append(i);
    feedbackQuote.append(p);
}

// Select all nodes with a class of 'elementsClass' and add them one or multiple classes
export function addStylesToElement(elementsClass, stylesToAdd) {
    const quoteNodes = document.querySelectorAll(`.${elementsClass}`);
    quoteNodes.forEach(item => {
        item.classList.add(...stylesToAdd);
    });
}

export function removeStylesToElement(elementsClass, stylesToRemove) {
    const quoteNodes = document.querySelectorAll(`.${elementsClass}`);
    quoteNodes.forEach(item => {
        item.classList.remove(...stylesToRemove);
    });
}