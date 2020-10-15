"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/04/20

	This homework excercise demonstrates multiple event handling

	*/

window.onload =  function()
{
	var element;
	var font;

	element = document.getElementById("container");
	element.style.fontSize = "5em";
	font = element.style.fontSize;

	//window.alert(getFontSize(font));
	//window.alert(getFontUnits(font));
	//window.alert(multiplyFontSize(element, 10));

	element.onclick = biggerFont;
	element.oncontextmenu = smallerFont;


};

function getFontUnits(fontInfo){
	var result;
	var i;
	var letters;

	i = fontInfo.length-1;
	letters = "abcdefghijklmnopqrstuvwxyz";

	while(fontInfo.length - 1 >= 0 && letters.indexOf(fontInfo.charAt(i)) >= 0){
		i = i -1;
	}

	return fontInfo.substring(i+1);

}

function getFontSize(fontInfo){

	var digits;
	var i;
	var result;


	result = "";
	digits = ".0123456789"
	i = 0;


	while (i < fontInfo.length  && digits.indexOf(fontInfo.charAt(i)) >= 0 ){
			result = result + fontInfo.charAt(i);
			i = i + 1;
		}

	return Number(result); 
	
}

function multiplyFontSize(elementReference, multiplier){
	var element;
	var fontInt;
	var fontString;

	element = document.getElementById(elementReference.id);

	fontInt = multiplier * getFontSize(element.style.fontSize);
	fontString = getFontUnits(element.style.fontSize);

	element.style.fontSize = "" + fontInt + fontString;
}

function biggerFont(){

	multiplyFontSize(this, 1.1);
	return false;

}

function smallerFont(){

	multiplyFontSize(this, 0.9);
	return false;
}

