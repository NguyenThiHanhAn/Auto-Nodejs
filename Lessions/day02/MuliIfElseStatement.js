/**
 * <18: Khong ban!
 * 18->55: Unlimited!
 * 55->:2 chai.
 */
const readLine = require('readline-sync');
let clientAge = readLine.questionInt("Your Age: ");
if (clientAge < 18) {
    console.log("Khong ban!");
} else if (clientAge <= 55) {
    console.log("Unlimited!");
} else {
    console.log("2 chai!");
}