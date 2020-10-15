"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/21/20

	This file contains additonal functions that will be added to the dates function.

	*/

window.onload =  function()
{
    //window.alert(getDaysInMonth(14,2000));
    //window.alert(getDayNumberInYear(19910229));
    var x;
    var date;
    var j;
    var i;

    j = 1000001;
    x = 12000101;
    date = x;
    for(i=0;i<j;i=i+1) date = tomorrow(date);
    for(i=0;i<j;i=i+1) date = yesterday(date);
    window.alert(x+" "+date);





};

function getDaysInMonth(month, year){
    var daysInMonth;
    var result;

    daysInMonth = [0,31,28,31,30,31,31,30,31,30,31,30,31,29];


    if(month === 2 && isLeapYear(year)){
        result = daysInMonth[13];
    }
    else{
        if(month <= 12 && month >= 1){
            result = daysInMonth[month];
        }
        else
            result = daysInMonth[0];
    }

    return result;
}

function getDayNumberInYear(yyyymmdd){
    var day;
    var i;
    var year;
    var result;
    var month;


    year = getYear(yyyymmdd);
    day = getDay(yyyymmdd);
    month = getMonth(yyyymmdd);
    result = 0;

    for(i = 1; i < month; i = i + 1){
        result = result + getDaysInMonth(i,year);
    }

    return result + day;
}

function tomorrow(yyyymmdd){
    var result;
    var dayTomorrow;
    var month;
    var year;

    dayTomorrow = getDay(yyyymmdd) + 1;
    month = getMonth(yyyymmdd);
    year = getYear(yyyymmdd);

    if(dayTomorrow > getDaysInMonth(getMonth(yyyymmdd),getYear(yyyymmdd))){
        dayTomorrow = 1;
        month = month + 1;
    }
    if(month > 12){
        month = 1;
        year = year + 1;
    }

    result = setYear(yyyymmdd, year);
    result = setMonth(result, month);
    result = setDay(result, dayTomorrow);

    return result;
}

function yesterday(yyyymmdd){
    var result;
    var dayYesterday
    var month;
    var year;

    dayYesterday = getDay(yyyymmdd) - 1;
    month = getMonth(yyyymmdd);
    year = getYear(yyyymmdd);

    if(dayYesterday === 0){
        month = month - 1;
        if(month ===0){
            month = 12;
            year = year - 1;
            dayYesterday = getDaysInMonth(month, year);
        }
        else{
            dayYesterday = getDaysInMonth(month, year);
        }
    }

    result = setYear(yyyymmdd, year);
    result = setMonth(result, month);
    result = setDay(result, dayYesterday);

    return result;
}
