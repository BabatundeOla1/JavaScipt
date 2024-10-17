
let number = 10;
let factorial = 1;

while(number != 0){

	factorial *= number;
	number--;
	
	if(factorial > 1000){
		break;
	}
	console.log(factorial);
}
	

console.log(" ")
console.log("question 2");

let counter = 50;

while (counter != 0){

	console.log(counter);
	
	counter -= 5;
}


console.log(" ")
console.log("question 3");

let words = "hello world";

let count = 0;
for(let letters = 0; letters < words.length; letters++){
	if(words[letters] == "a" || words[letters] == "e"  || words[letters] == "i"  || words[letters] == "o"  || words[letters] == "u"){

		count++;
	}
}

console.log("Total vowel words: " + count);




