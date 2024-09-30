const ps = require("prompt-sync");
const prompt = ps();

let largest = 0;

for(let count = 0; count < 10; count++){
	
let number = Number(prompt("Enter an Integer: "));
	
	if(number > largest){
		largest = number;
	}

}
console.log("Largest number: ",largest);