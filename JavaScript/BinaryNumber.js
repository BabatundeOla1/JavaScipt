const ps = require("prompt-sync");
const prompt = ps();


let numbers = Number(prompt("Enter Binary Numbers(only 0 and 1): "));


let fisrtNumber = numbers % 10 ;
let secondNumber = numbers / 10 % 10;
let thirdNumber = numbers / 100 % 10;
let fourthNumber = numbers / 1000;

let sum = fisrtNumber + secondNumber + thirdNumber + fourthNumber;

console.log(sum);
