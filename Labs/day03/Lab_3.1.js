/*Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3*/
let intArr = [1, 2, 3, 4, 5];
function isEvenNumber(value, index, originArray) {
  return value % 2 === 0;
}
function isOddNumber(value, index, originArray) {
  return value % 2 !== 0;
}
let evenNumber = intArr.filter(isEvenNumber);
let oddNumber = intArr.filter(isOddNumber);
console.log(`Even number: ${evenNumber.length}`);
console.log(`Odd number: ${oddNumber.length}`);

