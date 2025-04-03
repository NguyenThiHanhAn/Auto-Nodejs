
/**
 * get input form user about height(m) and weight(kg) then calculate BMI
 * underweight: <18.5
 * normal weight: 18.5-24.9
 * overweight: 25-29.9
 * obesity: BMI of 30 or greater
 */
const readLine = require('readline-sync');

let height = readLine.questionFloat("User's height (m): ");
let weight = readLine.questionFloat("User's weight (kg): ");

if (isNaN(height) || height <= 0 ||isNaN(weight) || weight <= 0) {
    console.log('Please enter valid positive numbers');
} else {
    const bmi = weight / (height ** 2);
    console.log(`Your BMI: ${bmi.toFixed(3)}`);

    let message = 
        bmi < 18.5 ? "Underweight" : 
        bmi <= 24.9 ? "Normal weight" : 
        bmi <= 29.9 ? "Overweight" : 
        "Obesity";
    
    console.log(message);
}