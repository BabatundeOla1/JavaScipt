/*let result = 0; 

let number = 1;

while(result < 20){

	result = number * 2;

	console.log(result);

	number++;

}*/

let result = 0;

let accountBalance = 500;

let dailyWithdraw = 50;

do{

\
    result = accountBalance - dailyWithdraw;
	
	console.log(result);
		dailyWithdraw += 50;
    
}while( accountBalance > result)