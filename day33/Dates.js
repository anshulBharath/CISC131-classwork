"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/15/20

	This file contains multiple date processing functions.

	*/

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

function isLeapYear(year){
	
	
	return (year % 4) === 0 && (year % 100 !== 0 || year % 400 ===0);

}

function isValidYear(year){
	
	return year !== 0;
}

function getDaysInYear(year){
	var days;

	days = 0;
	if(!isValidYear(year)){
		return days;
	}

	if(isLeapYear(year)){
		days = 366;
	}
	else{
		days = 365;
	}

	return days;
}

function getEarlierDate(yyyymmdd1, yyyymmdd2){ //Given two dates, this function returns the one that is ealier. If both the dates are the same, either one is returned.
	return Math.min(yyyymmdd1, yyyymmdd2);	
}

function getLaterDate(yyyymmdd1, yyyymmdd2){ //Given two dates, this function returns the one that is later. If both the dates are the same, either one is returned.
	return Math.max(yyyymmdd1, yyyymmdd2);	
}

function sameDate(yyyymmdd1, yyyymmdd2){ //Given two dates, this function returns true if the two dates are the same and false if they are different.
	return yyyymmdd1 === yyyymmdd2;
}

function sameYear(yyyymmdd1, yyyymmdd2){ //Given two dates, this function returns true if the two years are the same and false if they are different.
	return getYear(yyyymmdd1) === getYear(yyyymmdd2);
}

function sameMonth(yyyymmdd1, yyyymmdd2){ //Given two dates, this function returns true if the two month are the same and false if they are different.
	return getMonth(yyyymmdd1) === getMonth(yyyymmdd2);
}

function sameDay(yyyymmdd1, yyyymmdd2){ //Given two days, this function returns true if the two days are the same and false if they are different.
	return getDay(yyyymmdd1) === getDay(yyyymmdd2);
}

function getDayName(dayNumber){ //Given an integer between 1 and 7, this function returns a string of the day name corresponding to that number. If the integer does not fall inbetween the margin, an empty string is returned.
	var days; //Array variable for days strings

	days = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	if(dayNumber >= 1 && dayNumber <= 7)
		return days[dayNumber];
	else
		return days[0];
}

function getMonthName(monthNumber){ ////Given an integer between 1 and 12, this function returns a string of the dmonth name corresponding to that number. If the integer does not fall inbetween the margin, an empty string is returned.
	var months; //Array variable for months strings

	months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	if(monthNumber >= 1 && monthNumber <= 12)
		return months[monthNumber];
	else 
		return months[0];
}