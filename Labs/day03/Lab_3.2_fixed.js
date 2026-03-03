/*Lab 3.2:
Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5*/

const readLine = require("readline-sync");
let intArr = [];
let lengthArray;
do {
    lengthArray = readLine.question("Please enter the length of array: ");
} while (lengthArray <= 0);
for (let i = 0; i < lengthArray; i++) {
    let element = readLine.questionInt(`Enter the element numbers ${i + 1}:`);
    intArr.push(element);
}
let minValue = intArr[0];
let maxValue = intArr[0];
for (let i = 0; i < lengthArray; i++) {
    if (intArr[i] < minValue) {
        minValue = intArr[i];
    }
    if (intArr[i] > maxValue) {
        maxValue = intArr[i];
    }
}
if (minValue === maxValue) {
    console.log(`There is no min/max value, all values are same: ${minValue}`);
} else {
    console.log(`Min value: ${maxValue} and Min value: ${minValue}`);
}
