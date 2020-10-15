"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/15/20

	Additional practice with 2D arrays in implementing the 'Game of Life'

	*/

window.onload =  function()
{
    var test;
    var gameBoardArray;
    var tempArray;

    gameBoardArray = createArray2D(100, 100, getDeadValue());
    tempArray = copy(gameBoardArray);

    window.alert(tempArray[99].length);

}

function getDeadValue(){return 0;}

function getLiveValue(){return 1;}

function isAlive(cell){ return cell === getLiveValue();}

function getLiveColor(){return "Blue";}

function getDeadColor(){return "Green";}

function isInArray(array2D, row, col){
    return array2D.length > row &&
    row >= 0 &&
    array2D[row].length > col &&
    col >= 0;
}

function createArray2D(numberOfRows, numberOfColumns, initialValue){ //Creates a 2D array
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

function copy(array2D){// return a copy of the parameter array
    var i;
    var j;
    var result;
    result= new Array(array2D.length);
    for ( i=0; i<result.length; i++ ){
        result[i] = new Array ( array2D[i].length );
        for ( j=0; j<result[i].length; j++ ){
            result[i][j] = array2D[i][j];
        } // for ( j
    } //for(i
    return result;
}
