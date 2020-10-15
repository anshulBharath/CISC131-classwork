"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/10/20

	This exercise works with integer processing

	*/

window.onload =  function()
{
	var date;

	date = 20120311;

	//window.alert(getYear(date));
	//window.alert(getMonth(date));
	//window.alert(getDay(date));
	//window.alert(setDay(date, 128));
	//window.alert(setMonth(date, 547));
	//window.alert(setYear(date, 19992));
	window.alert(addMonths(date, 15));

};

function getYear(date){
	var year;

	date = "" + date;
	year = date.substring(0,4);

	return Number(year);
}

function getMonth(date){
	var month;

	date = "" + date;
	month = date.substring(4,6);

	return Number(month);
}

function getDay(date){
	var day;

	date = "" + date;
	day = date.substring(6);

	return Number(day);
}

function setDay(date, day){

	day = "" + day;
	day = day.substring(day.length-2);

	return Number("" + getYear(date) + getMonth(date) + day);
}

function setMonth(date, month){

	month = "" + month;
	month = month.substring(month.length-2);

	return Number("" + getYear(date) + month + getDay(date));
}

function setYear(date, year){

	year = "" + year;
	year = year.substring(year.length-4);

	return Number("" + year + getMonth(date) + getDay(date));
}

function addMonths(date, months){
	var years;
	var newMonths;
	var days;

	months = months % 100;

	years = Math.floor(months / 12);
	newMonths = months % 12;
	days = getDay(date);

	years = years + getYear(date);
	newMonths = newMonths + getMonth(date);

	return (years * 10000)+ (newMonths * 100) + days;
}







