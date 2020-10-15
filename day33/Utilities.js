"use script";

/*	
Author: Anshul Bharath
		CISC 131
		Spring 2020
		04/15/20

function createHTMLElement(elementType, id, classInfo, content)
		creates an HTMLElement given the parameters of elementType, id, classInfo and content.

function getRandomInteger(upperLimit)
		returns a random integer between 0 and upperLimit.

function getRandomRGB()
		return a random color in the format of "rgb(redNum, greenNum, blueNum".

function countElementsWithIdPrefixOf(idPrefix)
		returns the number of HTML elements that have the paramter as the prefix of an HTML element
		and an integer suffix. THe suffix starts at zero and suffixes must be sequential.

	*/

function createHTMLElement(elementType, id, classInfo, content){
//All null values converted to zero length strings
//All string trimed, except content

elementType = elementType.trim();


if(id === null || id === ""){
	id = "";
}
else{
	id = id.trim();
	id = ' id = ' + '"'+ id + '" ';
}

if(classInfo === null || classInfo === ""){
	classInfo = "";
}
else{
	classInfo = classInfo.trim();
	classInfo = ' class = ' + '"'+ classInfo + '"';
}

	return '<' + elementType + id + classInfo + '>' + content + '</' + elementType + '>';
}

function getRandomInteger(upperLimit){
	var result;

	result = Math.random();
	result = result * (upperLimit + 1);
	result = Math.floor(result);
	return result;
}

function getRandomRGB(){
	var result;
	var redNum;
	var greenNum;
	var blueNum;

	redNum = getRandomInteger(255);
	greenNum = getRandomInteger(255);
	blueNum = getRandomInteger(255);

	result = "rgb("+redNum+","+greenNum+","+blueNum+")";
	return result;
}

function getElementsWithIdPrefixOf(idPrefix){
	var count;
	var element;

	count = 0;
	element = document.getElementById(idPrefix+count);

	while(element !== null){
		count++;
		element = document.getElementById(idPrefix+count);

	}
	return count;
}

