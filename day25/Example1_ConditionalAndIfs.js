"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/08/20

	This homework exercise demonstrates displaying a clock and 
	the ability to change the font size of the clock with the 
	left and right click of the mouse.

	*/

window.onload =  function()
{
	//window.alert(isLeapYear(1990));
	//window.alert(isValidYear(0120));
	//window.alert(getDaysInYear(1998));
	//window.alert(getDaysInMonth(4,2021));
	//window.alert(isValidDate(19901232));
	window.alert(getDayNumberInYear(19901233));
};

function getDayNumberInYear(yyyymmdd){
	var i;
	var month;
	var result;
	var year;

	month = getMonth(yyyymmdd);
	year = getYear(yyyymmdd);

	result = 0;
	if(isValidYear(yyyymmdd)){
		i = 1
		while(i < month){
			result = result + getDaysInMonth(i,year);
			i = i + 1;
		}
		result = result + getDay(yyyymmdd);
	}
	return result;
}

//Exercise1
function isLeapYear(year){
	
	/*var leapYear;

	leapYear = false;

	if(year % 4 === 0 ){
		if(year % 100 === 0){
			if(year % 400 === 0){
				leapYear = true;
			}
		}
		else{
			leapYear = true;
		}
	}

	return leapYear;
	*/
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

function getDaysInMonth(monthNumber, yearNumber){
	var modDays;

	modDays = monthNumber % 2;

	if(!isValidYear(yearNumber))
		return 0;

	if(isLeapYear(yearNumber) && monthNumber === 2){
		return 29;
	}
	else{
		if(monthNumber === 2){
			return 28;
		}
	}

	if(modDays === 1){
		return 31;
	}
	else{
		return 30;
	}
}

function isValidDate(yyyymmdd){
	var day;
	var month;
	var year;

	day = getDay(yyyymmdd);
	month = getMonth(yyyymmdd);
	year = getYear(yyyymmdd);

	return isValidYear(year) && month >=1 && day <= getDaysInMonth(month,year);
}


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






