"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/29/20

	This program is some extra practice with JS

	*/

window.onload =  function()
{
    var a;
    var b;

    a = window.prompt("Please enter first value: ");
    b = window.prompt("Please enter second value: ");
    a = Number(a);
    b = Number(b);

    window.alert(mystery(a, b));

};

function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return !isEven(number);
}

function mystery(a, b){
    var result;

    if(isEven(a)){
        result = 0;
    }
    else{
        result = b;
    }

    while(a > 1){
        a = a >> 1;
        b = b << 1;
        if(isOdd(a) || isOdd(b)){
            result = result + b;
        }
    }

    return result;
}
