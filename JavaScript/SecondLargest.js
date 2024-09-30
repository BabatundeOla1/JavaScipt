const ps = require("prompt-sync");
const prompt = ps();

let largest = 0;

let secondLargest = 0;

for(let count = 0; count < 5; count++){
	
let number = Number(prompt("Enter an Integer: "));
	
	if(number > largest){
		largest = number;
	}

	if(number > secondLargest && number < largest){
		secondLargest = number;
	}

}
console.log("Largest number: ",largest);
console.log("secondLargest number: ",secondLargest);