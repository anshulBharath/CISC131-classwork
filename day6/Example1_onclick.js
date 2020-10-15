"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	Example of variables and linking.
	Example of onclick and onkeypress

	*/

window.onload =  function()
{
	window.alert("Hello");
	var element;

	element = document.getElementById("box0");
	//element.innerHTML = "Hello";
	element.onclick = sayHi; //function reference
	//window.onkeypress = sayHello;

	element = document.getElementById("box1");
	element.onclick = sayHello;
	//sayHI() is is a funtion call


};

function sayHi(){
	window.alert("Hi");
}

function sayHello(){
	window.alert("Hello");
}



