//CRUD
//CREATE
let myArray = [5, 7, 2, 9, 1];
//first elnment's index= 0
//last element's index array's lenght -1

//Get the array's lenght
console.log(`Array lenght: ${myArray.length}`);

//READ
for (let index = myArray.length - 1; index >= 0; index--) {
    //console.log(myArray[index]); 
    myArray[index] = myArray[index] * 2;
}

//Undefine holes
//myArray[5]=6;
/**myArray.push(6);
myArray.push(3);
myArray.push([6,3,4,6]);
myArray[20]=1000
console.log(myArray);*/
//console.log((myArray[9]));
let removeValue = myArray.pop();
console.log(`removeValue: ${removeValue}`);
console.log(`After array: ${myArray}`);

