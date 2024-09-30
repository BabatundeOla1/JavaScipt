const ps = require("prompt-sync");
const prompt = ps();

console.log("N\tN^2\tN^3\tN^4\n");

for(let count = 1; count <= 5; count++){

   let squareOfNumbers = count * count;
   let cubeOfNumbers = count * count * count;
   let quartOfNumbers = count * count * count * count;

   console.log(count + "\t" + squareOfNumbers + "\t" + cubeOfNumbers + "\t" + quartOfNumbers);

}