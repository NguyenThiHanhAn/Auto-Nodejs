/*Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3*/
const readLine = require("readline-sync");
let intArr = [];
// Khi bạn cần xử lý nhiều kiểu định dạng dữ liệu phức tạp hơn (ví dụ: chuỗi có thể chứa số, kiểm tra regex, định dạng ngày...).
// Khi muốn kiểm soát chi tiết cách hiển thị lỗi.
// let lengthArray=Number(readLine.question('Please enter the length of array: '))
// if (isNaN(lengthArray)||lengthArray<=0||!Number.isInteger(lengthAraay)) {
//     console.log('Please enter a positive the integer number ');
// }
let lengthArray;
let oddNumberCount = 0;
let evenNumberCount = 0;
let oddNumber = [];
let evenNumber = [];
do {
  lengthArray = Number(
    readLine.questionInt("Please enter the length of array: ")
  );
} while (lengthArray <= 0);
for (let index = 0; index < lengthArray; index++) {
  let element = readLine.question(`Please enter the element ${index + 1}:`);
  if (isNaN(element)) {
    console.log("Please enter the valid element!");
    index--;
  } else {
    intArr.push(Number(element));
  }
}
console.log("The imported array is: ", intArr);
for (let index = 0; index < lengthArray; index++) {
  const value = intArr[index];
  if (isOddNumber(value)) {
    oddNumberCount++;
    oddNumber.push(value);
  } else {
    evenNumberCount++;
    evenNumber.push(value);
  }
}
console.log(`Odd numbers: ${oddNumberCount} number(s) ${printArray(oddNumber)}`);
console.log(`Even numbers: ${evenNumberCount} number(s) ${printArray(evenNumber)}`);
function isOddNumber(number) {
  return number % 2 === 1;
}

//Function print the empty array
function printArray(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return `---> ${array}`;
  }
}
