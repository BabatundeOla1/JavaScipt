let user = {
	age: 30,
	city: "Wonderland",
	name: "Alice",
}

let occur = 0;
for(count in user){
	occur++;
}
console.log(occur);



console.log(" ");
console.log("question 2");

const ps = require("prompt-sync");
const prompt = ps();

let userInput = Number(prompt("Enter year: "));

function isLeapYear(year){

	if(year % 4 == 0 || year % 400 == 0)
		return true;
	

	else
		return false;
	

}

console.log(isLeapYear(userInput));

console.log(" ");
console.log("question 3");


let score = {
	math: 90,
	english: 85,
	science: 88,
}

for(index in score){
	console.log(index + ":" + score[index]);

}
