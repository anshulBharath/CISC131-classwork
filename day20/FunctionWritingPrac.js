"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/09/20

	This exercise works with number processing

	*/

window.onload =  function()
{
	var date;

	date = 19980123;

	//window.alert(getDay(date));
	//window.alert(getYear(date));
	//window.alert(getMonth(date));

	window.alert(setDay(date, 21));
	window.alert(setMonth(date, 12));
	window.alert(setYear(date, 1776));

};

function getYear(date){

	var result

	result = date % 10000;
	result = date - result;
	result = result / 10000;

	return result;

}

function getMonth(date){
	var month;

	var month = Math.floor(((date % 10000) - (date % 10)) / 100);

	return month;
}

function getDay(date){
	var result;

	result = date % 100;

	return result;

}

function setDay(date, day){
	var result;



	result = (getYear(date) * 10000) + (getMonth(date) * 100) + day;

	return result;
}

function setMonth(date, month){
	var result;

	result = (getYear(date) * 10000) + (month * 100) + getDay(date);

	return result;
}

function setYear(date, year){
	var result;

	result = (year * 10000) + (getMonth(date) * 100) + getDay(date);

	return result;
}



