"use script";

/*	
Author: Anshul Bharath
		CISC 131
		Spring 2020
		04/15/20

This  exercise demonstrates the use of libraries for larger programs
		
*/

window.onload =  function()
{
	
	var year1;
	var year2;

	year1 = 20000422;
	year2 = 20020421;

	//window.alert(getEarlierDate(year2, year1));
	//window.alert(getLaterDate(year2, year1));
	//window.alert(sameDate(year1, year2));
	//window.alert(sameYear(year1, year2));
	//window.alert(sameMonth(year1, year2));
	//window.alert(sameDay(year1,year2));
	//window.alert(getDayName(3));
	//window.alert(getMonthName(13));

};

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




















