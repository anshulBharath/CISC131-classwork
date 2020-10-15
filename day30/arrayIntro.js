"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/03/20

	This lecture exercise demonstrates the use setTimeout and setInterval

	*/

window.onload =  function()
{
	/*var names;
	var years;

	names = ["Bob", "Sally", "Tom", "Christie"];

	arrayDisplay(names);*/
	var names;
	var num;

	names = ["B", "S", "To", "Chr"];
	num = [1,4,6,7,8,4,5,8];
	//window.alert(getOddValues(num));
	//window.alert(getDayName(6));
	//window.alert(getStringLengths(names));

	//Exercises
	//window.alert(copy(num));
	//window.alert(letterCount("Hello"));
	//window.alert(sum(num));
	//window.alert(arrayToString(num));
	window.alert(getStringOfLength(names, 1));
	//window.alert(stringToArray("hello"));
	
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

 function getDayName(dayNumber){
 	var days;

 	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 	if(dayNumber >= 7 || dayNumber < 0){
 		return "";
 	}
 	else
 		return days[dayNumber];
 }

 function getStringLengths(stringArray){
 	var i;
 	var resultArray;

 	resultArray = new Array(stringArray.length);
 	i = 0;

 	while(i < resultArray.length){
 		resultArray[i] = stringArray[i].length;
 		i = i + 1;
 	}
 	return resultArray;
 }

 function getOddValues(array){
 	var size;
 	var result;
 	var i;

 	i = 0;
 	size = 0;
 	while(i < array.length){
 		if(array[i] % 2 === 1){
 			size = size + 1;
 		}
 		i = i + 1;
 	}
 	result = new Array(size);

 	i = 0;
 	size = 0;
 	while(i < array.length){
 		if(array[i] % 2 === 1){
 			result[size] = array[i];
 			size = size + 1;
 		}
 		i = i + 1;
 	}
 	return result;
 }

 function copy(array){
 	var result;
 	var i;

 	result = new Array(array.length);

 	i = 0;
 	while(i < array.length){
 		result[i] = array[i];
 		i = i + 1;
 	}

 	return result;
 }

 function letterCount(someString){
 	var i;
 	var j;
 	var numVowels;
 	var numNonVowels;
 	var result;
 	var vowels;

 	numVowels = 0;
 	numNonVowels = 0;
 	vovels = ['a', 'e', 'i', 'o', 'u'];

 	i = 0;
 	while(i<someString.length){
 		if(someString.charAt(i) === vovels[0] || someString.charAt(i) === vovels[1] || someString.charAt(i) === vovels[2] || someString.charAt(i) === vovels[3] || someString.charAt(i) === vovels[4]){
 			numVowels = numVowels + 1;
 		}
 		else 
 			numNonVowels = numNonVowels + 1;
 		i = i + 1;
 	}

 	result = new Array(2);
 	result[0] = numVowels;
 	result[1] = numNonVowels;

 	return result;
 }

 function sum(array){
 	var i;
 	var result;

 	result = 0;
 	i = 0;

 	while(i<array.length){
 		result = result + array[i];
 		i = i + 1;
 	}

 	return result;
 }

 function arrayToString(array){
 	var i;
 	var result;

 	result = "";
 	i = 0;

 	while(i<array.length){
 		result = result + array[i];
 		i = i + 1;
 	}

 	return result;
 }

 function getStringOfLength(anArray, numChars){
 	var count;
 	var i;
 	var result;

 	count = 0;
 	i = 0;
 	while(i < anArray.length){
 		if(anArray[i].length === numChars){
 			count = count + 1;
 		}
 		i = i + 1;
 	}

 	result = new Array(count);

 	count = 0;
 	i = 0;
 	while(i < anArray.length){
 		if(anArray[i].length === numChars){
 			result[count] = anArray[i];
 			count = count + 1;
 		}
 		i = i + 1;
 	}
 	return result;
 }

 function stringToArray(data){
 	var i;
 	var result;

 	result = new Array(data.length);

 	i = 0;
 	while(i < data.length){
 		result[i] = data.charAt(i);
 		i = i + 1;
 	}

 	return result;
 }






























 