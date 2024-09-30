const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

let acountNumber, beginningBalance, charges, creditAllowed, creditLimit;

readline.question("Enter your account number: ",input=>{
let accountNumber = parseInt(input); 

readline.question("Enter your beginning Balance: ",input=>{
let beginningBalance = parseInt(input);

   readline.question("Enter total charged by customer: ",input=>{
   let charges = parseInt(input); 

      readline.question("Entere allowed credit to customer: ",input=>{
      let creditAllowed = parseInt(input);

         readline.question("Enter allowed credit limit: ",input=>{
         let creditLimit = parseInt(input);


let newBalance = beginningBalance + charges - creditAllowed;
console.log(`New balance: $${newBalance}`);

if (newBalance > creditLimit)
console.log("Credit limit exceeded");

readline.close();

         });
      });
    });
  });
});








 