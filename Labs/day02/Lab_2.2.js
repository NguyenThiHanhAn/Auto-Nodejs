const readLine = require("readline-sync");
const number = readLine.questionInt("Your number: ");
let message = number % 2 === 0 ? "Is even number" : "Is odd number";
console.log(message);

