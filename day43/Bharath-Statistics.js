"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/05/20

	This program demonstrates the use of statistical methods and processing Arrays

	*/

window.onload =  function()
{
    var array;
    var userData;

    userData = window.prompt('Enter the whitespace or comma separated values: ','');
    array = split(userData,'\t\r\n\f,');
    array = trimArray(array);

    userData = convertToNumber(array);

    if(userData.length > 0) {
        window.alert("Errors were found. These values are not numeric: " + userData);
    }
    else{
        window.alert(calculateStatistics(array));
    }

};

function trimArray(array){ /*This function make sure that all elements of the array are not null
                             and makes sures that all string elements are trimmed*/
    var count;
    var i;
    var j;
    var result;

    count = 0;
    i = 0;
    while(i < array.length){
        if(array[i] !== null){
            array[i] = array[i].trim();
            if(array[i].length !== 0){
                count = count + 1;
            }
        }
        i = i + 1;
    }

    result = new Array(count);
    i = 0;
    j = 0;
    while(j < result.length){
        if(array[i] !== null){
            if(array[i].length !== 0){
                result[j] = array[i];
                j = j + 1;
                i = i + 1;
            }
            else{
                i = i + 1;
            }
        }
        else{
            i = i + 1;
        }
    }
    return result;
}

function convertToNumber(array){ //This function converts all elements of the array to numeric values
    var i;
    var result;

    result = ""

    i = 0;
    while(i < array.length){
        if(!isNumeric(array[i])){
            result = result + array[i] + ",";
        }
        else{
            array[i] = toNumber(array[i]);
        }
        i = i + 1;
    }

    result = result.substring(0,result.length -1);
    return result;
}

function toNumber(data){ //This function converts data to a numeric value
    var result;
    result = NaN;
    data = ( data + "" ).trim(); // force data to be a String

    if (data.length > 0)
        result = Number(data);
    return result;
}

function isNumeric(data){ //This function returns a boolean checking if data is numeric
    return !isNaN(toNumber(data));
}

function arrayDisplay(someArray){ //This function displays the array in an organized manner
	var i;
	var result;

	result = "Array contains " + someArray.length + " elements.";
	i = 0;
	while(i < someArray.length){
		result = result + "\n[" + i + "]: " + someArray[i];
		i = i + 1;
	}
	window.alert(result);
}

function getDelimiterLocations(line, delimiter){ //This function returns an array of the locations of the given delimiter
    var result;
    var i;
    var j;
    var dCount; //delimiter count
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

function split(line, delimiter){ //This function returns an array split using the given delimiter
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



function getMaximum(array){ //Returns the maximum value in the array. Returns -1 if no values are in the array
    var i;
    var result;

    result = -1000000000;
    if(array.length < 1){
        result = -1;
    }

    i = 0;
    while(i < array.length){
        if(array[i] > result){
            result = i;
        }
        i = i + 1;
    }
    return result;
}

function getMinimum(array){ //Returns the minimum value in the array. Returns -1 if no values are in the array
    var i;
    var result;

    result = 1000000000;
    if(array.length < 1){
        result = -1;
    }

    i = 0;
    while(i < array.length){
        if(array[i] < result){
            result = i;
        }
        i = i + 1;
    }
    return result;
}

function getMean(array){ //Returns the mean of the array. Returns NaN if no values are in the array
    var i;
    var sum;

    sum = 0;

    if(array.length < 1){
        return NaN;
    }

    i = 0;
    while(i < array.length){
        sum = sum + array[i]
        i = i + 1;
    }

    return sum / array.length;
}

function getSampleStandardDeviation(array){ /*Returns the sample standard deviation.
                                            Returns NaN if not enough values are in the array*/
    var i;
    var result;
    var hold;
    var mean;

    if(array.length < 2){
        return NaN;
    }

    mean = getMean(array);
    result = 0;

    i = 0;
    while(i < array.length){
        hold = Math.pow(array[i] - mean,2);
        result = result + hold;
        i = i + 1;
    }
    result = result / (array.length - 1);
    result = Math.pow(result, 0.5);

    return result;
}

function calculateStatistics(array){ /*This function calls each of the statistical methods and returns a string
                                       with a summary of all the statistical methods calculated on the array*/
    var numValues;
    var minimum;
    var maximum;
    var mean;
    var stdDev;

    numValues = array.length;
    minimum = array[getMinimum(array)];
    maximum = array[getMaximum(array)];
    mean = getMean(array);
    stdDev = getSampleStandardDeviation(array);

    return "n:\t" + numValues +  "\nminimum:\t" + minimum + "\nmaximum:\t"
    + maximum + "\nmean:\t" + mean + "\nsample std dev:\t" + stdDev;
}
