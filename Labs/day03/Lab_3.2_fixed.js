/*Lab 3.2:
Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5*/

const readLine = require("readline-sync");
let intArr = [];
let lengthAraay;
do {
  lengthAraay = readLine.question("Please enter the length of array: ");
} while (lengthAraay <= 0);
for (let index = 0; index < lengthAraay; index++) {
  let element = readLine.questionInt(
    `Enter the element numbers ${index + 1}: `
  );
  intArr.push(element);
}
let minimum=intArr[0]
let maximum=intArr[0];
for (let index = 0; index < lengthAraay; index++) {
    const value = intArr[index];
    if (value<minimum) {
        minimum=value;
    }
    if (value>maximum) {
        maximum=value;
    }
}
if (maximum === minimum) {
    console.log(`There is no min/max value, all values are same: ${minimum}`);
} else {
    console.log(`Min value: ${maximum} and Min value: ${minimum}`);
}
