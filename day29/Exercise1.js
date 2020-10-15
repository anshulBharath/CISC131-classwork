"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/03/20

	This lecture exercise demonstrates the use setTimeout and setInterval

	*/

window.onload =  function()
{
	var element;

	element = document.getElementById("box");
	element.onclick = function(){changeColor(element, 5000);};

	
	
};

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

function changeColor(element, timeDelay){
	var color;

	color = getRandomRGB();
	
	timeDelay = timeDelay - (timeDelay * .10);
	if(timeDelay <= 100){
		timeDelay = 100;
	}

	element.style.backgroundColor = color;
	window.setTimeout(function() {changeColor(element, timeDelay);}, timeDelay);
	element.onclick = null;
}