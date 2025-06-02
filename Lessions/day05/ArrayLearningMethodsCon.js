let myArray = [1, 7,3,4];

//DELETE| splice
//let startIndex = 2;
//let deleteCount = 1;
//let insertValue = 10;
//let returnedValue = myArray.splice(startIndex, deleteCount, insertValue);
//console.log(myArray);
//console.log(returnedValue);
for (let index = 0; index < myArray.length; index++) {
  if (isOddNumber(myArray[index])) {
    removeElementFromArray(myArray, index);
    index--;
  }
  //if (myArray[index] % 2 !== 0) {
  //myArray.splice(index, 1);
  //}
}
console.log(myArray);

function isOddNumber(number) {
  return number % 2 !== 0;
}
function removeElementFromArray(array, startIndex) {
  const defaultDelteCount = 1;
  array.splice(startIndex, defaultDelteCount);
}
