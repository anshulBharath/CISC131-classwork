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

	element = document.getElementById("page");
	element.innerHTML = "before call to setTimeout";
	//window.setTimeout("timeoutTest()", 2000) using function call
	//window.setTimeout(timeoutTest...) using function ref
	window.setTimeout(function() {timeoutTest(element);}, 2000);
	element.innerHTML = element.innerHTML + "<br/> after call to setTimeout";
	
	
};

function timeoutTest(element){

	element.innerHTML = element.innerHTML + "<br/> inside setTimeout function";
}