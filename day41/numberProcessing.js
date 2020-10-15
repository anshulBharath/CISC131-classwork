"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/01/20

	This program demonstrates some number processing

	*/

window.onload =  function()
{


};

function toNumber ( data ){
    var result;
    result = NaN;
    data = ( data + "" ).trim(); // force data to be a String
    if ( data.length > 0 ) result = Number( data );
    return result;
}

function isNumeric ( data ) { return ! isNaN ( toNumber( data ) ); }

function isInteger ( data ){
    return isNumeric ( data ) && Math.ceil(toNumber(data)) === Math.floor(toNumber(data));
}
