// Import the functions from the FoxTrove module using CommonJS
const { getFox, foxAmount } = require('.');

// Call and log the results of the getFox function
const randomFox = getFox();
console.log('Random fox image:', randomFox);

// Call and log the results of the foxAmount function
const amountOfFoxes = foxAmount();
console.log('Amount of foxes available:', amountOfFoxes);
