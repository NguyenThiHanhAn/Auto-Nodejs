/*Merge 2 SORTED integer array into one SORTED array

Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

*/
//Cách này chỉ phù hợp với mảng chưa sắp xếp , còn nếu đã sắp xếp rồi dùng concat thì sẽ làm chậm quá trình chạy
const readLine = require('readline-sync');
let intArr1 = [];
let intArr2 = [];
let lengthArray1, lengthArray2;
do {
  lengthArray1 = readLine.questionInt("Please enter the length of array: ");
} while (lengthArray1 <= 0);
for (let index = 0; index < lengthArray1; index++) {
  let element = readLine.questionInt(`Enter the element numbers ${index + 1}: `);
  intArr1.push(element);
}
do {
  lengthArray2 = readLine.questionInt("Please enter the length of array: ");
} while (lengthArray2 <= 0);
for (let index = 0; index < lengthArray2; index++) {
  let element = readLine.questionInt(`Enter the element numbers ${index + 1}: `);
  intArr2.push(element);
}
console.log("Mang sau khi sap xep va hop nhat", mergesorted(intArr1,intArr2));

function mergesorted(intArr1, intArr2) {
  return intArr1.concat(intArr2).sort((a, b) => a - b);
}