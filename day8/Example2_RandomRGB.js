"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	2/17/20

	Random background change

	*/

window.onload =  function()
{
	document.onclick = colorBody;
	window.alert(getRandomInteger(5));

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

function colorBody(){
	document.body.style.backgroundColor = getRandomRGB();
}

function ColorBoxes(){
	var i;
	var element;


	i = getRandomInteger(5);
	element = s
}

