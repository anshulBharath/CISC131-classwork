"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/13/20

	Additional practice with 2D arrays

	*/

window.onload =  function()
{

}

function canBeAdded(array2D1, array2D2){
    //Matrices can be added if they have at least one rows. rectangluar and have the same shape
    return isNan(findFirstElement(array2D1)) && isRectangular(array2D1) && sameShape(array2D1, array2D2)
}

function add(array2D1, array2D2){
    var col;
    var row;
    var result;

    result = [];

    if ( canBeAdded(array2Da, array2Db ) ) {
        result = new Array ( array2Da.length );
        for (row=0; row<array2Da.length; row++) {
            result[row] = new Array(array2Da[row].length);
            for (col=0; col<array2Da[row].length; col++){
                result[row][col] = array2Da[row][col] + array2Db[row][col];
            } // for col
        }
    return result;
}

function subtract(array2D1, array2D2){
    //Almost same implementation as add
}

function transpose(array2D){ //Transposes the array
    var i;
    var j;
    var result;
    result = [];
    if ( !isNaN(findFirstElement ( array2D) ) && isRectangular(array2D) ) {
        result = new Array ( array2D[0].length );
        for ( i=0; i<result.length; i++ )
        {
            result[i] = new Array ( array2D.length );
            for ( j=0; j<result[i].length;j++) { result[i][j] = array2D[j][i];}
        } //fori
    } //if
    return result;
}

function canBeMultiplied(multiplicand, multiplier){
    // matrices can be multiplied if they each have at least one
       // column, are rectangular and the number of columns of multiplicand
       // is equal to the number of rows of multiplier
       return isNaN(findFirstElement(multiplicand)) &&
       isNaN(findFirstElement(multiplier)) &&
       isRectangular(multiplicand) &&
       isRectangular(multiplier) &&
       multiplicand[0].length === multiplier.length;
}

function

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

function sameShape(array2Da, array2Db){ // return true if the two parameter arrays have the same shape
    var i;
    var result;
    result = (array2Da.length === array2Db.length);
    for(i=0; i<array2Da.length && result; i++){
        result = array2Da[i].length === array2Db[i].length;
    }
    return result;
}

function findFirstElement(array2D){
    var i;
    var j;

    for(i = 0; i < array2D.length && array2D[i].length > 1; i++){}
    return

}
