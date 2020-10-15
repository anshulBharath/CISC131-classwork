"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/29/20

	This program demenosrates the use of bit shifting

	*/

window.onload =  function()
{
    var leftShiftElement;
    var rightShiftElement;
    var valueElement;

    leftShiftElement = document.getElementById("leftShift");
    rightShiftElement = document.getElementById("rightShift");
    valueElement = document.getElementById("value");

    value.innerHTML = window.prompt("What is your value?")
    leftShiftElement.onclick = function(){leftShift(valueElement, 5000);};
    rightShiftElement.onclick = function(){rightShift(valueElement, 5000);};

};

function leftShift(element){
    var result;

    result = element.innerHTML;
    result = result << 1;
    element.innerHTML = result;
}

function rightShift(element){
    var result;

    result = element.innerHTML;
    result = result >> 1;
    element.innerHTML = result;
}
