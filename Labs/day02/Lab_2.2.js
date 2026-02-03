/*Allow user to input a number, print out it’s an odd or even number*/
const readline = require("readline-sync");
const number = Number(readline.question("Your number: "));
let msg = number % 2 == 0 ? "evennumber" : "oddnumber";
console.log(msg);


