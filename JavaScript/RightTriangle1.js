const ps = require("prompt-sync");
const prompt = ps();

let  row = Number(prompt("Enter number of rows: "));

for(let count = 0; count < row; count++){

	for(let counter = count; counter>=0; counter--){

		 process.stdout.write("* ");

	}
	 console.log();

}
