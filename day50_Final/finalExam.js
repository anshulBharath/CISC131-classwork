"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/19/20

	This is test space for the final exam

	*/

window.onload =  function()
{
    var data;
    var result;
    var test1;
    var test2;
    var test3;

    data = [
         [3],
         [],
         [5,7,2,1],
         [4,6]
        ];
    result = copy2Dto1D(data);

    test1 = [2];
    test2 = [23,9,-4,99,1];
    test3 = [88,2,3,3,2,88];
    //window.alert(result);

    window.alert(sameInBothDirections(test1));

    //window.alert(countOneBits(0));
    //window.alert(countOccurrences("Really, there are and were more", 're'));
    //window.alert(sum("Bob is 22 and lives at 34 East 90th Street, apt5"));

}

function sameInBothDirections(array){
    var result;
    var front;
    var back;
    var middle;

    result = false;
    front = 0;
    back = array.length - 1;
    middle = Math.floor(array.length / 2);

    if(array.length < 3){
        if(array.length < 1){result = false;}
        else{
            if(array.length === 1){
                result = true;
            }
            else{result = array[0] === array[1];}
        }
    }

    while(front < middle && back > middle){
        if(array[front] === array[back]){
            result = true;
        }
        else{result = false;}
        front = front + 1;
        back = back - 1;
    }

    return result;
}

function copy2Dto1D(array2D){
    var i;
    var j;
    var x;
    var count;
    var result;

    count = 0;
    for(i = 0; i < array2D.length; i++){
        for(j = 0; j < array2D[i].length; j++){
            //if(array2D[i][j] !== ""){
                count = count + 1;

        }
    }

    result = new Array(count);
    x = 0;

    for(i = 0; i<array2D.length; i++){
        for(j = 0; j<array2D[i].length; j++){
            if(array2D[i][j] !== "" && array2D[i][j] !== null){
                result[x] = array2D[i][j];
                x = x + 1;
            }
        }
    }
    return result;
}

function countOneBits(x){
    var result;
    var binaryNum;
    var i;
    var symbol;
    var digit;

    symbol = "01";
    binaryNum = "";
    result = 0;

    if(x < 0){
        return NaN
    }

    while(x > 0){
        digit = x % 2;
        x = Math.floor(x/2);
        binaryNum = symbol.charAt(digit) + binaryNum;
        if(symbol.charAt(digit) === "1"){result = result + 1;}
    }

    return result;
}

function countOccurrences(source, findMe){
    var result;
    var cur;

    result = 0;
    cur = source.indexOf(findMe);

    while(cur >= 0){
        result = result + 1;
        cur = source.indexOf(findMe, cur + findMe.length);
    }
    return result;
}

function sum(source){
    var i;
    var curChar;
    var result;

    result = 0;

    for(i = 0; i<source.length; i++){
        curChar = source.charAt(i);
        curChar = Number(curChar);

        if(!isNaN(curChar)){
            result = result + curChar;
        }
    }
    return result;
}
