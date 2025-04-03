
/**
 * get input form user about height(m) and weight(kg) then calculate BMI
 * underweight: <18.5
 * normal weight: 18.5-24.9
 * overweight: 25-29.9
 * obesity: BMI of 30 or greater
 */
const readLine = require('readline-sync');
let height = readLine.questionFloat('User`s height: ');
let weight = readLine.questionFloat('User`s weight: ');
let bmi = weight / (height * height);
/**if (bmi <18.5){
    console.log('Underweight');
}else if(bmi <=24.9){
    console.log('Normal weight');
}else if(bmi<=29.9){
    console.log('Overweight');
}else {
    console.log('Obesity');
}*/
console.log(`Your BMI: ${bmi.toFixed(3)}`)
let message = bmi < 18.5 ? "Underweight" : bmi <= 24.9 ? "Normal weight" : bmi <= 29.9 ? "Overweight" : "Obesity";
//console.log(`Category: ${category}`);
console.log(message);