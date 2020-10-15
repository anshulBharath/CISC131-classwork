"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/28/20

	This program demenosrates the use of fields.

	*/

window.onload =  function()
{
    var test;
    var test2;
    var test3;

    test = "hello, my, name, is, anshul, bob";

    test2 = "";
    test3 = " ab, e, wf "
    test3 = ",,,,"

    //arrayDisplay(getDelimiterLocations(test3, "\t\r\n\f,"));
    arrayDisplay(split(test, "\t\r\n\f,"));
};

function getDelimiterLocations(line, delimiter){
    var result;
    var i;
    var j;
    var dCount;
    var loc;

    i = 0;
    dCount = 0;
    //loc = line.indexOf(delimiter);

    while(i < line.length){
        loc = delimiter.indexOf(line.charAt(i));
        if(loc >= 0){
            dCount = dCount + 1;
        }
        //loc = line.indexOf(delimiter, loc + delimiter.length);
        i = i + 1;
    }

    result = new Array(dCount + 1);

    j = 0;
    i = 0;
    while(i < line.length){
        loc = delimiter.indexOf(line.charAt(i));
        if(loc >= 0){
            result[j] = i;
            j = j + 1;
        }
        i = i + 1;
    }
    result[result.length - 1] = line.length;

    return result;
}

function split(line, delimiter){
    var dLocations;
    var dLength;
    var i;
    var result;
    var start;

    dLocations = getDelimiterLocations(line, delimiter);
    result = new Array(dLocations.length);
    start = 0;

    i = 0;
    while(i < dLocations.length){
        result[i] = line.substring(start, dLocations[i]);
        start = dLocations[i] + 1;
        i = i + 1;
    }
    return result;
}

function arrayDisplay (someArray){
    var i;
    var result;
    result = "Array contains " + someArray.length + " elements."; i = 0;
    while ( i < someArray.length ){
        result = result + "\n[" + i + "]: " + someArray[i];
        i = i + 1;
    }
    window.alert ( result );
} // arrayDisplay

/*
function getDelimiterLocations(line, delimiter){
    var result;
    var i;
    var dCount;
    var loc;

    i = 0;
    dCount = 0;
    loc = line.indexOf(delimiter);

    while(loc >= 0){
        dCount = dCount + 1;
        loc = line.indexOf(delimiter, loc + delimiter.length);
    }

    result = new Array(dCount + 1);

    loc = line.indexOf(delimiter);
    while(loc >= 0){
        result[i] = line.indexOf(delimiter, loc);
        loc = line.indexOf(delimiter, loc + delimiter.length);
        i = i + 1;
    }
    result[result.length - 1] = line.length;

    return result;
}

function split(line, delimiter){
    var dLocations;
    var i;
    var result;
    var start;

    dLocations = getDelimiterLocations(line, delimiter);
    result = new Array(dLocations.length);
    start = 0;

    i = 0;
    while(i < dLocations.length){
        result[i] = line.substring(start, dLocations[i]);
        start = dLocations[i] + delimiter.length;
        i = i + 1;
    }
    return result;
}
*/
