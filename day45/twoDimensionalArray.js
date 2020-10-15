"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/08/20

	This program demonstrates the use of two dimensional arrays

	*/

window.onload =  function()
{

    var personName;
    var count;
    var testArray;
    var createArray;

    personName = [
        ["Susan", "Hall"], // Row zero
        ["George", "Cooper"], // Row one
        ["Carol", "Arkwrigth"], //Row two
        ["Leo", "Green"], //Row three
        ["Alice", "Adams"] //Row four
    ];

    count = [
        [1,2,3,4],
        [4,5,6,7],
        [8,9,10,11]
    ];

    testArray = [
        [1,2,3],
        [4,5,6],
        [8,9,10]
    ];

    createArray = create(3,3,"hi");

    //window.alert(personName[0][1]);
    //window.alert(personName.length); //Number of rows
    //window.alert(personName[1].length) //Numbers of columns
    //window.alert(isRectangular(testArray));
    window.alert(concatenate(personName));
    window.alert(createArray);


};

function isSquare(twoDimensionalArray){

        return twoDimensionalArray.length === twoDimensionalArray[0].length;
}

function isRectangular(twoDimensionArray){
    var i;
    var j;
    var result;

    result = true;

    for(i=1; i<twoDimensionArray.length;i++) {
        result = result && (twoDimensionArray[i].length === twoDimensionArray[i-1].length);
    }
    return result;
}

function concatenate(twoDimensionArray){
    var result;
    var i;
    var j;

    result = "";

    for(i = 0; i < twoDimensionArray.length; i++){
        for(j = 0; j < twoDimensionArray[i].length; j++){
            result = result + twoDimensionArray[i][j];
        }
    }

    return result;
}

function create(numberOfRows, numberOfColumns, initialValue){
    var result;
    var i;
    var j;

    result = new Array(numberOfRows);
    for(i = 0; i < result.length; i++){
        result[i] = new Array(numberOfColumns);
    }

    for(i = 0; i < result.length; i++){
        for(j = 0; j < result[i].length; j++){
            result[i][j] = initialValue;
        }
    }

    return result;
}
