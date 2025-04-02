//Nameing Conventions
//Resvered keywords
//camelCase, snake_case, PascalCase
//let myVar=1;
//const PI_NUMBER = 3.14;
let myNum1 = 1;
let myNum2 = 2;
//1. Right operand and letf operand
let result = myNum1 + myNum2;
//console.log('Total result: ' + result);
//console.log('Total result:', result);
//console.log(`Total result: ${result}`);
//String template/literals(`${}`); backsticks
//console.log(`Total result: ${result +1}`)
//Forward slash: /
result = 5 / 2;
console.log(`5/2: ${result}`);
console.log(`4/2: ${result}`);
console.log(`10/3: ${result}`);
console.log(`5%2: ${5 % 2}`);
//Roundinggit
let roundingNeareast = Math.round(5 / 2);
console.log(`Rounding nearest: ${roundingNeareast}`);

let roundingFloor = Math.floor(10 / 3);
console.log(`Rounding floor: ${roundingFloor}`);

let roundingCeil = Math.ceil(9 / 6);
console.log(`Rounding ceil: ${roundingCeil}`);

result =10/3;
let toFixedNumber=result.toFixed(3)
console.log(`toFixedNumber: ${toFixedNumber}`)

let multi =3 **2;