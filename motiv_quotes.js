// Create quotes array
const quotes = [
    "Stay strong, and fight for the Light.",
    "Darkness brings strength, but not conviction.",
    "Focus. Concentrate. What do you see?",
    "My mentor taught me well. It's what I do with his teachings that matters now.",
    "The goal of the Wielder is to defend life, not destroy it.",
    "As long as the Eagle flies, we will always be together."
];

// Test if array exists in Node
// console.log(quotes);

// Randomly select a quote
const randomSel = () => {
    // Initialize whole message and index
    let message = "";
    let index;
    // Run through array
    for (let i = 0; i < quotes.length; i++) {
        index = Math.floor(Math.random() * 6);
        if (i == quotes.length - 1) {
            message += quotes[index];
        } else {
            message += quotes[index] + " ";
        }
    }
    return message;
}

// Call function
console.log(randomSel());