/*Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3*/
let intArr = [1, 2, 3, 4, 5];
function isevenNumber(value, index, originArray) {
  return value % 2 === 0;
}
function isoddNumber(value, index, originArray) {
  return value % 2 !== 0;
}
let evenNumber = intArr.filter(isevenNumber);
let oddNumber = intArr.filter(isoddNumber);
console.log(`Even Number : ${evenNumber.length}`);
console.log(`Odd Number : ${oddNumber.length}`);


