"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/11/20

	This program demonstrates the  continuation of two dimensional arrays

	*/

window.onload =  function()
{
    var array1;
    var array2;

    array1 = [
        ["hello", "my"],
        ["name"],
        ["is"]
    ];

    array2 = [
        ["hello"],
        [],
        [],
        []
    ];

    window.alert(findLastElement(array2));
}

function findLastElement(array2D){ // return row number containing last element or NaN
    var i;
    for(i=array2D.length-1; i>=0 && array2D[i].length<1; i--) {}

    if ( i < 0 ) i = NaN;
    return i;
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
