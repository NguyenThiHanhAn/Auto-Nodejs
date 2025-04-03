const readLine=require("readline-sync");
const height =readLine.questionFloat("Your Height: ");
const weight=readLine.questionFloat("Your weight: ");
const bmi=weight/(height**2);
console.log(`Your BMI: ${bmi.toFixed(3)}`);
let category="";
let suggestion="";
if (bmi < 18.5) {
    category = "Underweight";
    suggestion = "You should consider increasing your weight to reach a healthy range.";
} else if (bmi <= 24.9) {
    category = "Normal weight";
    suggestion = "Your weight is in the healthy range. Keep up the good work!";
} else if (bmi <= 29.9) {
    category = "Overweight";
    suggestion = "You should consider decreasing your weight to reach a healthy range.";
} else {
    category = "Obesity";
    suggestion = "You should consider decreasing your weight significantly for health reasons.";
}

console.log(`Category: ${category}`);
console.log(`Suggestion: ${suggestion}`);