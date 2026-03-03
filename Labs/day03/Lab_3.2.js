/*Lab 3.2:
Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5*/

let intArr=[1,2,3,4,5];
/*c1: 
let minValue=intArr[0];
let maxValue=intArr[0];
for(let i=0;i<intArr.length;i++){
    if(intArr[i]<minValue){
        minValue=intArr[i];
    }
    if (intArr[i]>maxValue) {
        maxValue=intArr[i];
    }
}*/
//C2:
let minValue=Math.min(...intArr);
let maxValue=Math.max(...intArr);

console.log(`Minium: ${minValue}`);
console.log(`Maxium: ${maxValue}`);