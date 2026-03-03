const { log } = require("console");
const readline = require("readline");

/*
Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
const readLine = require('readline-sync');
let intArr = [];
let lengthArray;
do {
  lengthArray = readLine.question("Please enter the length of array: ");
} while (lengthArray <= 0);
for (let i = 0; i < lengthArray; i++) {
  let element = readLine.questionInt(`Enter the element numbers ${i + 1}: `);
  intArr.push(element);
}
console.log("Mang sau khi sap xep: ", sortedArray(intArr));
function sortedArray(intArr) {
  intArr.sort((a, b) => a - b);
  return intArr;
}
module.exports = { sortedArray };

