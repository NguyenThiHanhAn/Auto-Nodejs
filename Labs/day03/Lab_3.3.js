/*
Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let intArr = [];
let n;
let count = 0;
rl.question("Nhap so luong phan tu: ", (answer) => {
  n = parseInt(answer);
  if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
    rl.close();
    return;
  }
  console.log(`Nhap ${n} so nguyen: `);
  askInput();
});
function askInput() {
  rl.question(`So thu ${count + 1}: `, (number) => {
    intArr.push(parseInt(number));
    count++;
    if (count < n) {
      askInput();
    } else {
      sortArray();
    }
  });
}
function sortArray() {
  intArr.sort((a, b) => a - b);
  console.log("Mang sau khi sap xep: ", intArr);
  rl.close();
}
module.exports = { sortArray };
