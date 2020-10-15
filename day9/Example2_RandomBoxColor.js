"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	2/18/20

	Examples with loops

	*/

window.onload =  function()
{
	document.onclick = changeRandomBox;
};

function getBoxNumber(idPrefix){
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

function changeRandomBox(){
	var numElements;

	numElements = getBoxNumber("box")
	box = document.getElementById("box"+getRandomInteger(numElements-1));
	box.style.backgroundColor = getRandomRGB();
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

function getRandomInteger(upperLimit){
	var result;

	result = Math.random();
	result = result * (upperLimit + 1);
	result = Math.floor(result);
	return result;
}