const readLine = require('readline-sync');
let height = readLine.questionFloat("Height: ");
let weight = readLine.questionFloat("Weight: ");
if (height <= 0 || weight <= 0) {
    console.log("Sai roi nhap lai di");
} else {
    var bmi = weight / (height ** 2);
    var isUnderw = false;
    var isOverw = false;
    console.log(`BMI: ${bmi.toFixed(2)}`);
    if (bmi < 18.5) {
        console.log("Underweight");
        isUnderw = true;
    } else if (bmi <= 24.9) {
        console.log('Normal weight');
    } else if (bmi <= 29.9) {
        console.log("Overweight");
        isOverw = true;
    } else {
        console.log("Obesity");
        isOverw = true;
    }
}
if (isUnderw) {
    let increaseW = (18.5 - bmi) * (height ** 2);
    console.log('You should increase weight:', Math.ceil(increaseW * 100) / 100, 'kg');
}
if (isOverw) {
    let decreaseW = (bmi - 24.9) * (height ** 2);
    console.log('You should decrease weight:', Math.ceil(decreaseW * 100) / 100, 'kg');
}