//const NumberSupportFunctions=require('./UtilMethod.js')

//Destructure
const {
    teo,
    ti
} = require('./UtilMethod.js')

// . dot notation
//let isEvenNumber_ = isEvenNumber(3);
//console.log(`Is 3 even number: ${isEvenNumber_}`);

//Get an user input then check if it's even or odd number
let userInput = getUserInput();
let isEvenNumber_ = teo(userInput);

if (isEvenNumber_) {
    console.log(`The number ${userInput} is an even number`);
} else {
    console.log(`The number ${userInput} is an odd number`);
}

function getUserInput() {
    return 3;
}