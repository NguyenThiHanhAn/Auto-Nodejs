let myArray = [1, 2, 3, 4, 5];

//Filter to get even numbers from array
//Higher order function: HOF
let evenNumbers = myArray.filter(isEvenNumber);

function isEvenNumber(value, index, originArray) {
    return value % 2 === 0;
}
console.log(evenNumbers);
console.log((myArray));

