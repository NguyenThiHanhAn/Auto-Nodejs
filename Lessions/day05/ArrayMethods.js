let array = [1, 2, 3, 4, 5];

//Map: khong thay doi truc tiep mang, chi anh xa
/*let returnValues = array.map(myRule);
console.log(returnValues);

function myRule(value, index, array) {
    return value * 2;
}*/

//forEach
let userList = [];
array.forEach(addAutomationUsername);

function addAutomationUsername(value, index, array) {
  userList.push(`AutomationUser_${value}`);
}
console.log(userList);

//Sort -String
let strings = ["B", "C", "A"];
strings.sort();
strings.reverse();
console.log(strings);

//Sort -Number
let anotherArray = [100, 19, 101];
anotherArray.sort(sortNumberASC);
anotherArray.sort(sortNumberDESC);
console.log(anotherArray);
function sortNumberASC(num1, num2) {
  return num1 - num2;
}
function sortNumberDESC(num1, num2) {
  return num2 - num1;
}

let mixedContent=['a','A','1'];
mixedContent.sort();
console.log(mixedContent);
