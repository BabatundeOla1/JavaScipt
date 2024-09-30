let numbers = [1,3,3,3,5,0];

function getMostOccuring(array){

	let mostOccuring = array[0];

	let tally = 0;


	for(let count = 0; count < array.length; count++)

	   for(let counter = 0; counter < array.length; counter++)

	   if(array[count] == array[counter]){

		tally[count] = count++;

	      mostOccuring = array[count];

	   } return mostOccuring;

}

console.log(getMostOccuring(numbers));



/*let number = [5,4,4,5,6,5];

function getMostOccuring2(most2){

	let mostOccuring2 = most2[0];

	for(let count = 0; count < most2.length; count++)

	   if(most2[count] == most2[count]){

	      mostOccuring2 = most2[count];

	   } return mostOccuring2;

}

console.log(getMostOccuring2(number));*/

