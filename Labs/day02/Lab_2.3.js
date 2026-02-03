/** underweight: <18.5
* normal weight: 18.5-24.9
* overweight: 25-29.9
* obesity: BMI of 30 or greater*/
const readline = require("readline-sync");
const height = Number(readline.questionFloat("Your height: "));
const weight = Number(readline.questionFloat("Your weight: "));
if (height <= 0 || weight <= 0) {
    console.log("Please enter positive number");
} else {
    var bmi = weight / (height ** 2);
    var isoverweight = false
    var isunderweight = false;
    console.log(`Your BMI: ${bmi.toFixed(3)}`);
    if (bmi < 18.5) {
        console.log("Underweight");
        isunderweight = true;
    } else if (bmi <= 24.9) {
        console.log("Normalweight");
    } else if (bmi <= 29.9) {
        console.log("overweight");
        isoverweight = true;
    } else {
        console.log("obesity");
        isoverweight = true;
    }
}
if (isunderweight) {
    const increasew = (18.5 - bmi) * (height ** 2);
    console.log("You should increase weight: ", Math.ceil(increasew * 100) / 100, " kg");
}
if (isoverweight) {
    const decreasew = (bmi - 24.9) * (height ** 2);
    console.log("You should decrease weight: ", Math.ceil(decreasew * 100) / 100, " kg");
}
