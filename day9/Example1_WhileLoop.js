"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	2/18/20

	Examples with loops

	*/

window.onload =  function()
{
	var prefix;

	prefix = window.prompt("What is the prefix of you div?:");
	window.alert(getBoxNumber(prefix));
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







