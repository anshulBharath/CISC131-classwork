"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/04/20

	This program demonstrates some the use of array searches.

	*/

window.onload =  function()
{
    var array;

    array = [1,2,2,3,5,8,9,11];

    //window.alert(searchArray(array, 3));
    //window.alert(searchArray2(array, 4));
    //window.alert(searchArray3(array, 2));
    //window.alert(searchSortedArray1(array, 2));
    window.alert(binarySearch(array, 11));




};

function searchArray(array, forWhat) {// find occurrence nearest the beginning of the array
    var i;
    var result;
    result = -1;

    if ( array != null ) {
        for ( i=0; i < array.length && array [i] !== forWhat; i++ ){}
            if ( i < array.length )
                result = i;

    }
       return result;
}

function searchArray2(array, forWhat){// find the occurrence nearest the end of the array
    var i;
    var result;
    result = -1;
    if ( array != null && array.length > 0 ) {
        for ( i=0; i < array.length; i++ ) {
            if ( array [i] === forWhat ) result = i;
        } //for
    } //if
    return result;
}

function searchArray3(array, forWhat){
    var i;
    i = -1;
    if ( array != null ) {
        for ( i =array.length-1; i>=0 && array [i] !== forWhat; i-- ) {}
    }

    return i;
}

function searchSortedArray1(array, forWhat){
    var i;
    var result;

    result = -1;
    if ( array !== null ) {
        for ( i=0; i< array.length && array [ i ] < forWhat; i++) {}
        if ( i < array.length && forWhat === array [ i ] ) result = i;
    }

    return result;
}

function searchSortedArray1 ( array, forWhat ){
    var hold;
    var i;
    var result;

    result = -1;
    if ( array !== null && array.length > 0 && forWhat >= array[0] ) {
        hold = array[array.length-1];
        array [array.length-1] = forWhat;

        for ( i=0; array [ i ] < forWhat; i++ ){}

        // restore the original array
        array[array.length-1] = hold;

        // check to see if forWhat was found
        if ( forWhat === array [ i ] ) result = i;
    }
    return result;
}

function searchPartOfArray(array, forWhat, start, end){
    var i;
    var middle;
    var result;

    // this does one iteration of a binary search
    if ( end < start ){
        result = [];
    }
         // a zero length array
        else
        {
            middle = Math.floor ( (start + end) / 2 );
            if ( forWhat === array [ middle ] ) result = [middle];
            if ( forWhat < array [ middle ] ) result = [start, middle-1];
            if ( forWhat > array [ middle ] ) result = [middle + 1, end];
        }
    return result;
}

function binarySearch ( array, forWhat ){
    var hold;
    var result;

    result = -1;

    if ( array !== null && array.length > 0 ) {
        hold = searchPartOfArray ( array, forWhat, 0, array.length-1 );
        while ( hold.length === 2 ){
            hold = searchPartOfArray ( array, forWhat, hold[0], hold[1] );
        }
    } //if
    if ( hold.length === 1 ) result = hold [ 0 ];
       return result;

}
