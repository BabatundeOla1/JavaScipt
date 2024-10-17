console.log("question 4");

const prompt = require("prompt-sync")();

let temparature = Number(prompt("Enter Temparature: "));

function convertToFahrenheit(celsius){

	fahrenheit = celsius * (9/5)  + 32;

	console.log(fahrenheit + " " + "fahrenheit");
}

convertToFahrenheit(temparature)


console.log(" ");
console.log("question 5");


let expenses = {
	
	groceries: 150,
	dining: 100,
	transportation: 50,
	entertainment: 80
	
}

let sum = 0;
for(count in expenses){
	sum += expenses[count];
}
console.log("Total amount spent: " + "#" + sum);
