"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/06/20

	This homework excercise demonstrates nested divs.
	This program allows a new div to be created inside the existing div
	evertime the user clicks on the div.

	*/

window.onload =  function()
{
	var element;

	element = document.getElementById("box0");
	element.style.backgroundColor = "red";

	element.onclick = changeColor;
};

function changeColor(){
	var color;
	var element;

	element = this;
	color = "";

	if(this.style.backgroundColor.length % 2 === 0){
		color = color + "red";
	}
	else{
		color = color + "blue";
	}


	element.style.backgroundColor = color;
	return true;
}

