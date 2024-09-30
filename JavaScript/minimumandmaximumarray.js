let numbers = [3,0,-1,8,-4];

function getMaximum(max){
	let maximum = max[0];
	
	for(let count = 0; count < max.length; count++)
		if(max[count] > maximum){
			maximum = max[count];
		}

		else{
			maximum = maximum;
		}
		return maximum;
}

console.log("Maximum: " +  getMaximum(numbers));


function getMinimum(min){
	let minimum = min[0];
	
	for(let count = 0; count < min.length; count++)
		if(min[count] < minimum){
			minimum = min[count];
		}

		else{
			minimum = minimum;
		}
		return minimum;
}

console.log("Minimum: " + getMinimum(numbers));




function getMinimumAndMximum(both){

	

	let max = getMaximum(both);

	let min = getMinimum(both);

	let minMax = [min, max];

	return minMax;

}

console.log(getMinimumAndMximum(numbers));