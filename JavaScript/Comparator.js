const ps = require("prompt-sync");
const prompt = ps();

let firstNumber = Number(prompt("Enter first number"));

let secondNumber = Number(prompt("Enter second number"));

   if(firstNumber === secondNumber)
	console.log("0");

   if(firstNumber > secondNumber)
	console.log("1");

   if(firstNumber < secondNumber)
	console.log("-1");


