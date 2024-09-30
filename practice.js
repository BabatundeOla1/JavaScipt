let var1 = 20;
let var2  = 4;
let var3 = 5;

let temp = var1;

var1 = var2;
var2 = var3;
var3 = temp;

console.log(var1);
console.log(var2);
console.log(var3);


let babs = 2 +(4 * 3) % 5 - (1 * 6)/ (1 + 1);
console.log(babs);




let m = 2;
let b = 2;
let sum = m + b;
let multisum = sum + sum;

console.log(multisum);



let OriginalValue = 25;
let remainder = OriginalValue % 10;
let certainValue = remainder + OriginalValue;

console.log(certainValue);





let x1 = 2;
let n1 = 3;

let resultingValue = (x1 * x1)**n1;

console.log(resultingValue);



let a = 50;
let x = a + a + 10;
let y = a - 10;
let z = a % 10;
let product = x * y * z;

let ans = a / product;

console.log(ans);





let n = 20;
let sums = 0;

for(let i = 0; i<n; i++){
	sums += i;
}
console.log("sum of all first 20 numbers:", sum);





let column = " ";

for(let i = 0; i < 4; i++){
	
	column +="*";

	console.log(column);
 }


function getPower (base, exponential){
	let result = 1;
	
	for(let count = 0; count < exponential; count++){
		result *= base;

	}	return result;

};

console.log(getPower(2, 5));


let num = 20;

if(true){
	let you = 4;
	var zee = 7;
}

console.log(num+you+zee);




