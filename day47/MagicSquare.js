"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/15/20

	This homework assignment demonstrates the use of two dimensional arrays by creating magic squares.

	*/

window.onload =  function()
{
    var userData;
    var element

    element = document.getElementById("container");
    userData = window.prompt("Please enter an odd integer greater than two: ");

    if(!isInteger(userData) || !isOdd(userData) || userData <= 2){
        window.alert("You have entered an invalid value");
    }
    else{
        createMagicSquare("container", Number(userData));
    }
}

function createMagicSquare(containerElement, order){
    var curValue; //Current value being put into magicSquare
    var i;
    var j;
    var array2D;
    var element; //Reference for container
    var tableCell; //Reference for individual cells

    array2D = createArray2D(order, order, 0);

    curValue = 1;
    i = 0;
    j = Math.floor(order/2);

    for(curValue = 1; curValue <= Math.pow(order,2); curValue++){
        array2D[i][j] = curValue;
        i = i - 1;
        j = j + 1;

        if(i === -1 && j === order){
            i = 1;
            j = order - 1;
        }
        if(i === -1){i = order - 1;}
        if(j === order){j = 0;}
        if(array2D[i][j] !== 0){
            i = i + 2;
            j = j - 1;
        }
    }
    element = document.getElementById(containerElement);
    element.innerHTML = createTable("table",order, order);

    for(i = 0; i < array2D.length; i++){
        for(j = 0; j < array2D[i].length; j++){
            tableCell = document.getElementById(getCellId(i,j));
            tableCell.innerHTML = array2D[i][j];
        }
    }

}

function toNumber(data){ //Converts data into a number
    var result;
    result = NaN;
    data = ( data + "" ).trim(); // force data to be a String
    if ( data.length > 0 ) result = Number( data );
    return result;
}

function isNumeric(data){ //Checks to see if the number is numeric
    return ! isNaN (toNumber(data));
}

function isInteger ( data ){ //Checks to see of the number is an integer
    return isNumeric ( data ) && Math.ceil(toNumber(data)) === Math.floor(toNumber(data));
}

function isOdd(number){ //Checks to see if the number is odd
    return number % 2 !== 0;
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

function createTable(tableId, rows, columns){ //Creates the html for a table
	var result;
	var i;
	var j;
	var oneRow;

	result = "";
	i = 0;


	while(i<rows){
		j = 0;
		oneRow = ""
		while(j<columns){
			oneRow = oneRow + createHTMLElement("td", getCellId(i,j), null, "");
			j++;
		}
		result = result + createHTMLElement("tr", null, null, oneRow);
		i++;
	}
	result = createHTMLElement("table", tableId, null, result);

	return result;
}

function createHTMLElement(elementType, id, classInfo, content){ //Creates a html element

elementType = elementType.trim();


if(id === null || id === ""){
	id = "";
}
else{
	id = id.trim();
	id = ' id = ' + '"'+ id + '" ';
}

if(classInfo === null || classInfo === ""){
	classInfo = "";
}
else{
	classInfo = classInfo.trim();
	classInfo = ' class = ' + '"'+ classInfo + '"';
}

	return '<' + elementType + id + classInfo + '>' + content + '</' + elementType + '>';
}

function getCellId(row, column){ //Returns the Cell ID
	return getCellRowPrefix() + row + getCellColumnPrefix() + column;
}

function getCellRowPrefix(){return "R";} 

function getCellColumnPrefix(){return "C";}
