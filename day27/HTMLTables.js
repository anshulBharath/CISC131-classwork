"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/31/20

	This lecture exercise demonstrates the use of HTML Tables

	*/

window.onload =  function()
{
	
	var element;

	element = document.getElementById("container");
	element.innerHTML = createTable(getTableId(), 10, 10);
	window.setInterval(updateTable, 250);
	
};

function updateTable(){
	var tableCell;
	var rows;
	var columns;

	rows = getTableRowCount()-1;
	columns = getTableRowCount()-1;

	tableCell = document.getElementById(getCellId(getRandomInteger(rows),getRandomInteger(columns)));
	tableCell.innerHTML = getRandomAlphabetCharacter();
	tableCell.style.color = getRandomRGB();
	tableCell.style.fontSize = getRandomFontSize();
	tableCell.style.fontStyle = getRandomFontStyle();
	tableCell.style.fontWeight = getRandomFontWeight();
	tableCell.style.textAlign = "center";
}

function createTable(tableId, rows, columns){
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
	result = createHTMLElement("table", getTableId(), null, result);
	
	return result;
}

function createHTMLElement(elementType, id, classInfo, content){

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

function getRandomInteger(upperLimit){
	var result;

	result = Math.random();
	result = result * (upperLimit + 1);
	result = Math.floor(result);
	return result;
}

function getRandomRGB(){
	var result;
	var redNum;
	var greenNum;
	var blueNum;

	redNum = getRandomInteger(255);
	greenNum = getRandomInteger(255);
	blueNum = getRandomInteger(255);

	result = "rgb("+redNum+","+greenNum+","+blueNum+")";
	return result;
}

function getTableId(){return "theTable";}

function getTableElement(){return document.getElementById(getTableId());}

function getCellRowPrefix(){return "R";}

function getCellColumnPrefix(){return "C";}

function getCellId(row, column){
	return getCellRowPrefix() + row + getCellColumnPrefix() + column;
}

function getTableCel(row, column){
	return document.getElementById(getCellId(row,column));
}

function getAlphabet(){return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*~";}

function getRandomAlphabetCharacter(){return getAlphabet().charAt(getRandomInteger(getAlphabet().length));}

function getTableRowCount(){return getTableElement().rows.length;}

function getTableColumnCount(){return getTableELement().rows[0].cells.length;}

function getRandomFontSize(){
	return getRandomInteger(36) + "pt";
}

function getRandomFontStyle(){
	var random;

	random = getRandomInteger(2);

	if(random === 0){
		return "normal";
	}
	else{
		if(random === 1){
			return "italic";
		}
		else{
			return "oblique";
		}
	}
}

function getRandomFontWeight(){
	var random;

	random = 1 + getRandomInteger();
	return 100 * random;
}



