"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	2/14/20

	Element onclicking

	*/

window.onload =  function()
{

	var randomElement;
	var box;

	randomElement = getRandomInteger(4);

	box = document.getElementById("box" + randomElement);

	box.onclick = foundIt;

};

function test(){

	var result;
	var upperLimit;

	upperLimit = 5;
	result = getRandomInteger(upperLimit);

	document.write(result + "<br>");
	window.onclick = test;
}

function display(a){
	document.write(a);
	document.write("<br>");
	window.onclick = test;
}

function foundIt(){
	window.alert("You found it");
}

function getRandomInteger(upperLimit){
	var result;
	result = Math.random();
	result = result * (upperLimit + 1);
	result = Math.floor(result);
	return result;
}

function color(){
	var i;
	var element;

	i = getRandomInteger(2);
	element = document.getElementById("box"+i);
	element.style.backgroundColor = "blue";
}