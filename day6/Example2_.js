"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	Example of variables and linking

	*/

window.onload =  function()
{
	window.alert("Hello");
	//var id;

	//id = "box0"; //intiailization
	//update(id);
	update("box0");
	update("box1");


};

function update(id){
	var element;
	element = document.getElementById(id);
	element.innerHTML = element.id;
	element.style.backgroundColor = color();
}

function color(){
	return "red";
}




