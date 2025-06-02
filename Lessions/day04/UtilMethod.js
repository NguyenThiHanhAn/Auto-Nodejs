//Support function
//Service function - Utility function

//3 is argument
//let isEvenNumber_ = isEvenNumber(3);
//onsole.log(`Is 3 even number: ${isEvenNumber_}`);

//number is parameter
function isEvenNumber(number) {
    //Detail Implementation
    return number % 2 === 0;
}

//const isOddNumber = function (number)
function isOddNumber(number) {
    return number % 2 !== 0;
}

//Common JS Module
module.exports = {
    teo: isEvenNumber,
    ti: isOddNumber
}