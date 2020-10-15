"use strict";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	04/27/20

	This script demonstrates the use of associated arrays.
    This program will take a dollar amount and return the least
    amout of currency to achieve that dollar amount.

	*/

window.onload =  function()
{
    var input;
    var firstLoop;//A boolean used to evaluate first loop

    firstLoop = true;

    while(input < 0 || firstLoop ){
        input = window.prompt("Please enter a valid dollar amount to convert: ");
        firstLoop = false;
        input = Number(input);
    }

    window.alert(makeChange(input));
};

function makeChange(input){
    var currencyName;
    var currencyValue;
    var i;
    var checkCurrency; //Checks if the current currency has been checked
    var result;
    var numCurrency; //The number of bills or coins used

    currencyName = ["Hundred dollar bill", "Fifty dollar bill", "Twenty dollar bill", "Ten dollar bill", "Five dollar bill", "One dollar bill", "Half dollar", "Quarter", "Dime", "Nickel", "Penny"];
    currencyValue = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 1];
    result = "";
    input = input * 100;
    checkCurrency = false;

    for(i = 0; i <= 10; i++){
        numCurrency = 0;
        while(input >= currencyValue[i]){
            input = input - currencyValue[i];
            numCurrency = numCurrency + 1;
            checkCurrency = true;
        }
        if(checkCurrency){
            if(numCurrency > 1 && currencyName[i] === "Penny"){
                result = result +  numCurrency + " Pennies\n";
            }
            else{
                if(numCurrency > 1){
                    result = result + numCurrency + " " + currencyName[i] + "s\n";
                }
                else{
                    result = result + numCurrency + " " + currencyName[i] + "\n";
                }
            }
        }
        checkCurrency = false;
    }
    return result;
}
