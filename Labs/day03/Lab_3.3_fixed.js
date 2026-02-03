/*
Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
const readLine = require("readline-sync");
let array = [];
let lengthArray;
do {
  lengthArray = readLine.question("Please enter the length of array: ");
} while (lengthArray <= 0);
for (let index = 0; index < lengthArray; index++) {
  let element = readLine.questionInt(
    `Enter the element numbers ${index + 1}: `
  );
  array.push(element);
}
console.log("Mang sau khi sap xep: ", sortedArray(array));
function sortedArray(array) {
  for (let i = 0; i < lengthArray - 1; i++) {
    for (let j = 0; j < lengthArray - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Hoán đổi
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
module.exports = { sortedArray };
