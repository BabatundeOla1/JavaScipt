function getSquare(nums){

	let square = 1;

	for(let count = 0; count < 2; count++){

		square[count] = nums[count] * nums[count];

	}
		return square;
}


function sortedSquare(arrays){

	let lengthOfArrays = nums.length;

	for(let index = 0; index < lengthOfArrays; index++){
		
		for(let counter = 1; counter < lengthOfArrays; counter++){

 			if(arrays[counter - 1] > arrays[counter]){

				let temp =  arrays[counter - 1];

				arrays[counter - 1] = arrays[counter];

				arrays[counter] = temp;
			}
		}
	}
	
   }


let numbers = [2, 1, 4, 3,  5, 9];

sortedSquare(nums);

console.log(getSquare(numbers));
