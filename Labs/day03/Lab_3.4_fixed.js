const readLine = require("readline-sync");
let array1 = [];
let array2 = [];
let lengthArray1;
let lengthArray2;
//Input Array1
do {
    lengthArray1 = readLine.question("Please enter the length of array1: ");
} while (lengthArray1 <= 0);
for (let index = 0; index < lengthArray1; index++) {
    let element = readLine.questionInt(
    `Enter the element numbers ${index + 1}: `
  );
  array1.push(element);
}
//Input Array2
do {
  lengthArray2 = readLine.question("Please enter the length of array2: ");
} while (lengthArray2 <= 0);
for (let index = 0; index < lengthArray2; index++) {
    let element = readLine.questionInt(
        `Enter the element numbers ${index + 1}: `
    );
    array2.push(element);
}
//Print 2 sorted array
console.log("Array1: ", sortedArray(array1, lengthArray1));
console.log("Array2: ", sortedArray(array2, lengthArray2));
let expectedArray = mergerArray(array1, array2);
//Print merger array
console.log("Array final: ", expectedArray);
//function sort
function sortedArray(array, lengthArray) {
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
//function merger
function mergerArray(array1, array2) {
  let outArray = [];
  let i = 0;
  let j = 0;
  while (i < lengthArray1 && j < lengthArray2) {
    if (array1[i] < array2[j]) {
      outArray.push(array1[i]);
      i++;
    } else {
      outArray.push(array2[j]);
      j++;
    }
  }
  for (; i < lengthArray1; i++) {
    outArray.push(array1[i]);
  }
  for (; j < lengthArray2; j++) {
    outArray.push(array2[j]);
  }
  return outArray;
}
