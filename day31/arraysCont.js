"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/07/20

	This lecture exercise demonstrates the use arrays

	*/

window.onload =  function()
{
	var nums;
	var strings;
	var empty;

	nums = [1,2,3,4,5];
	strings = ['hello', 'my', 'name', 'is', 'Anshul']
	empty = [];

	//window.alert(addOrConcatenate(strings));
	//arrayDisplay(deleteElementZero(nums));
	//arrayDisplay(deleteLastElement(nums));
	//window.alert(locationInArray(nums, 5));
	arrayDisplay(deleteKthElement(nums, 2));

	
	
};

function arrayDisplay(someArray){
	var i;
	var result;

	result = "Array contains " + someArray.length + " elements.";
	i = 0;
	while(i < someArray.length){
		result = result + "\n[" + i + "]: " + someArray[i];
		i = i + 1;
	}

	window.alert(result);
 }

function addOrConcatenate(array){
	var letters;
	var sum;
	var concat;
	var ch;
	var i;
	var bool;

	letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
	sum = 0;
	concat = "";
	bool = false;

	i = 0;
	while(i < array.length){
		ch = array[i].charAt(0);
		if(letters.indexOf(ch) >= 0){
			bool = true;
			concat = concat + array[i];
		}
		else
			sum = sum + array[i]
	}

	if(bool)
		return concat;
	else 
		return sum;
}

function deleteElementZero(array){
	var result;
	var i;


	if(array.length === 0){
		result = new Array(0);
		return result;
	}

	result = new Array(array.length-1);

	i = 0;

	while(i < array.length-1){
		result[i] = array[i + 1];
		i = i + 1;
	}

	return result;
}

function deleteLastElement(array){
	var result;
	var i;

	if(array.length === 0){
		result = new Array(0);
		return result;
	}

	result = new Array(array.length-1);

	i = 0;
	while(i < array.length-1){
		result[i] = array[i];
		i = i + 1;
	}

	return result;
}

function locationInArray(array, findMe){
	var i;
	
	i =0;
	while(i < array.length && array[i] !== findMe){
		i = i + 1;
	}
	return i;
}

function deleteKthElement(array,k){
	var count;
	var i;
	var result;

	if(k >=0 && k < array.length)
		result = new Array(array.length - 1);
	else 
		result = new Array(array.length);

	i = 0;
	count = 0;

	while(i < array.length){
		if(i !== k){
			result[count] = array[i];
			count = count + 1;
		}
		i = i + 1;
	}
	return result;
	
}

function deleteAllOccurrences(array, findMe){
	var loc;
	var result;

	result = copy(array);

	loc = locationInArray(result, findMe);
	while(loc >= 0){
		result = deleteKthElement(result,loc);
		loc = locationInArray(result,findMe);
	}
	return result;
}



























