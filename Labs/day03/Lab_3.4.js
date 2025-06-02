/*Merge 2 SORTED integer array into one SORTED array

Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

*/
const { log } = require("console");
const { parse } = require("path");
const { stdout } = require("process");
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr1 = [];
let arr2 = [];
let n1 = 0,
  n2 = 0;
let count = 0;
function main() {
  rl.question("Nhap so luong phan tu cua mang 1: ", (answer1) => {
    n1 = parseInt(answer1);
    if (isNaN(n1) || n1 <= 0) {
      console.log("Vui long nhap so nguyen duong.");
      rl.close();
      return;
    }
    console.log(`Nhap ${n1} so nguyen cho mang 1: `);
    inputArray(arr1, n1, () => {
      rl.question("Nhap so luong phan tu cua mang 2: ", (answer2) => {
        n2 = parseInt(answer2);
        if (isNaN(n2) || n2 <= 0) {
          console.log("Vui long nhap so nguyen duong.");
          rl.close();
          return;
        }
        console.log(`Nhap ${n2} so nguyen cho mang 2: `);
        inputArray(arr2, n2, () => {
          const merged = arr1.concat(arr2).sort((a, b) => a - b);
          console.log("Mang sau khi gop va sap xep: ", merged);
          rl.close();
        });
      });
    });
  });
}
function inputArray(targetArray, total, callback) {
  count = 0;
  function ask() {
    rl.question(`So thu ${count + 1}: `, (val) => {
      const num = parseInt(val);
      if (isNaN(num)) {
        console.log("Gia tri khong hop le. Nhap lai so nguyen");
        ask();
      } else {
        targetArray.push(num);
        count++;
        if (count < total) ask();
        else callback();
      }
    });
  }
  ask();
}
main();
