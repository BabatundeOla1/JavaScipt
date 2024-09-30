const ps = require("prompt-sync");
const prompt = ps();

let accountNumber = Number(prompt("Enter your account number: "));

let beginningBalance = Number(prompt("Enter your beginning Balance: "));

let charges = Number(prompt("Enter total charged by customer: "));
   
let creditAllowed =  Number(prompt("Entere allowed credit to customer: "));

let creditLimit = Number(prompt("Enter allowed credit limit: "));

let newBalance = beginningBalance + charges - creditAllowed;
console.log(`New balance: $${newBalance}`);

if (newBalance > creditLimit)
console.log("Credit limit exceeded");







 