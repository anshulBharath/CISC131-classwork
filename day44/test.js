"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	05/05/20

	This program demonstrates the use of statistical methods used in Arrays

	*/

window.onload =  function()
{
    var array;
    var array2;
    var string;

    string = "\n\t\f\s,";

    window.alert(string.length);

    array = [1,2,3,5,6,8];
    array2 = [];
    //window.alert(inSortedOrder(array2));

};

function formatNames(firstNameArray, lastNameArray){
    var i;
    var result;

    result = new Array(lastNameArray.length);

    i = 0;
    while(i < lastNameArray.length){
        if(firstNameArray[i] === null || firstNameArray[i] === ""){
            result[i] = lastName[i];
        }
        else{
            result[i] = lastNameArray[i] + ", " + firstNameArray[i];
        }
        i = i + 1;
    }

    return result;
}

function contains(a, b){
    var i;
    var count;
    var result;

    result = false;
    count = 0;

    if(a.length === 0){
   return result;
}


    i = 0;
    while(i < a.length){
        if(b.indexOf(a.charAt(i)) >= 0){
            count = count + 1
        }
        i = i + 1;
    }
    if(count === a.length){
        result = true;
    }

    return result;
}

function countIntegers(array){
    var count;
    var i;

    count = 0;
    i = 0;
    while(i < array.length){
        if(Math.floor(array[i]) === array[i]){
            count = count + 1;
        }
        i = i + 1;
    }
    return count;
}

function inSortedOrder(array){
    var result;
    var i;

    result = false;

    if(array.length < 1){
        return result;
    }
    i = 0;

    while(i < array.length - 1 && array[i] < array[i + 1]){
        i = i + 1;
    }
    if(i === array.length - 1){
        result = true;
    }

    return result;
}

function mystery(data){
    var x;
    var y;

    data = "" + data;
    data = data.trim();

    x = Number(data);
    y = "" + x;
    y = Number(y);

    return (data.length>0) && (x == y);
}

function shifty(integer){
    var len;

    len = (integer + "").length;
    integer = integer >> len;
    integer = integer << len;

    return integer;
}
