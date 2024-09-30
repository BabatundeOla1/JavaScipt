const ps = require("prompt-sync");
const prompt = ps();


let  grossSales = 9 / 100;

let profitPerWeek = 200;

let sum = 0;

let weeklyPayOut = 0;

let totalProfit = 0;

for(let count = 0; count < 7; count++){
    let priceOfGoods = Number(prompt("Enter the price of goods sold: "));
	sum = sum + priceOfGoods;
}

	weeklyPayOut = sum * grossSales;

	totalProfit = weeklyPayOut + profitPerWeek;

console.log("Total Weekly Payout:", "$",totalProfit);