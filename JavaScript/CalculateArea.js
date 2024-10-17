console.log(" ")
console.log("question 4");

let numbers = [1, 2, 3, 4, 5];

function getSum(array){

	let sum = 0;

	for(let digit = 0; digit < array.length; digit++){

		sum += array[digit];
	}

	return sum;
}


console.log("Sum = " + getSum(numbers));




console.log(" ")
console.log("question 5")

const ps = require("prompt-sync");
const prompt = ps();

let height = Number(prompt("Enter Height: "));
let width = Number(prompt("Enter width: "));


function calculateArea(length, base){

	let area = 0.5 * (length * base);
	
	return area;
}

console.log("Area: " + calculateArea(height, width));



