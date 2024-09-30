const ps = require("prompt-sync");
const prompt = ps();

let userInput =32123;

let reverse = 0;

while(userInput !== 0){
	
	reverse = (reverse * 10) + (userInput % 10);

	userInput = userInput / 10;
}

if(userInput === reverse){
	cosole.log("It is a palindrome");
}

else{
	console.log("It is not a palidrome");
}