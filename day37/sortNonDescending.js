"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/24/20

	This file demonstrates the use of finding max and mins.
    Also demonstrates basic sorting algorithim.

	*/

window.onload =  function()
{
    var array;

    array = [10,5,4,2,5,7,5,4,3,2,6,4];

    //window.alert(findMinimum(array));
    //window.alert(findMaximum(array));
    window.alert(array);
    sortNonDescending(array);
    window.alert(array);

};

function findMinimum(array){
// return the element number of the minimum value in the // array or -1 if the array contains no elements
    var i;
    var result;

    result = array.length-1;
    for ( i=array.length-1; i>=0; i-- ) {
        if ( array[i] < array[result] ){
            result = i;
        }
    }
    return result;
}

function findMaximum(array){
// return the element number of the minimum value in the // array or -1 if the array contains no elements
    var i;
    var result;

    result = array.length-1;
    for ( i=array.length-1; i>=0; i-- ) {
        if ( array[i] > array[result] ){
            result = i;
        }
    }
    return result;
}

function findMinimum2(array, startHere)
{
    var i;
    var result;

    if ( startHere >= array.length )
        result = -1;
        else
        result = startHere;

    for ( i=startHere; i<array.length; i++ ) {
        if ( array[i] < array[result] ){
            result = i;
        }
    }
    return result;
}

function sortNonDescending(array){
    var i;
    var temp;
    var minLoc;

    for(i = 0; i < array.length; i++){
        minLoc = findMinimum2(array, i);
        temp = array[i];
        array[i] = array[minLoc];
        array[minLoc] = temp;
    }

}
