/**
 * get input from user about height(m) and weight(kg) then calculate BMI
 * underweight: <18.5
 * normal weight: 18.5-24.9
 * overweight: 25-29.9
 * obesity: BMI of 30 or greater
 */

const readline = require("readline-sync");

const height = Number(readline.question("Enter your height in meters: "));
const weight = Number(readline.question("Enter your weight in kilograms: "));

if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    console.log("Please enter valid positive numbers");
} else {
    const bmi = weight / (height * height);
    console.log(`Your BMI: ${bmi.toFixed(3)}`);

    let msg =
        bmi < 18.5 ? "Underweight" :
        bmi <= 24.9 ? "Normal weight" :
        bmi <= 29.9 ? "Overweight" :
        "Obesity";

    console.log(`BMI category: ${msg}`);
}
