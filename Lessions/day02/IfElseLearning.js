const readLine = require('readline-sync');
let arriavalTime = readLine.questionInt("Arrival time: ");
let isHeOntime = (arriavalTime == 7);
//let isHeOntime = (number(arriavalTime) === 7));
//>,<,>=,<=,=,==,===,!=,!==
//!True, !False: to revert a boolean value

if (isHeOntime) {
    console.log("Let's talk");
} else {
    console.log("Write a letter...");
}
//Boolean 
if (!isHeOntime) {
    console.log("Write a letter...");
} else {
    console.log("Let's talk");
}
//Termanary operator: Toan tu 3 ngoi
let message = isHeOntime ? 'Let`s talk' : 'Write a letter ...';
console.log(message);
