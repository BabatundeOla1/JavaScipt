const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let userNames, earningsInAYear;

for(let count = 0; count < 3; count++)

readline.question("Enter name: ", input=>{
let userNames = parseInt(input);

readline.question("Enter earning in a year: ", input=>{
let earningsInAYear = parseFloat(input);


if(earningsInAYear < 1){
   console.log("Invalid amount.");
}


if(earningsInAYear <= 30000){
   let monthlyTaxRate = 15 / 100;

   let citizenTax = monthlyTaxRate * earningsInAYear;
   console.log(citizenTax);
}

if(earningsInAYear > 30000){
   let monthlyTaxRate = 20 / 100;

   let citizenTax = monthlyTaxRate * earningsInAYear;
   console.log(citizenTax);
}

      readline.close();
  });
});
