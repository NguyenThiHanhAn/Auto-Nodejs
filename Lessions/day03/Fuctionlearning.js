//DRY: Don't Repeat Yourself
//Single Responsibility: Tính đơn nhiệm
//Clean code

//Function name:
//calmelCase
//Declare a function


//Method 01: [Function Declaration ] method | hoisting
let userInputNum = getUserInputNum();
let inputNumber = convertToNumber(userInputNum);
evaluateEvenOrOddNumber(inputNumber);

function getUserInputNum() {
    let inputNum = readLine.question('Your num:');
    return inputNum;
}

function convertToNumber(str) {
    return Number(str);
}
function evaluateEvenOrOddNumber(num) {
}

let returnedValue = functionName();
function functionName() {
    return 1;
}
//Method 01: [Function Expression ] method |No hoisting
const addNumber = function (firstNum, secondNum) {
    return firstNum + secondNum;
}
let sum = addNumber(1, 2);