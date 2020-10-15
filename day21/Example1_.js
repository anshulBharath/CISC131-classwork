"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/10/20

	This exercise works with integer processing

	*/

window.onload =  function()
{
	//window.alert(fibonacci(0));
	window.alert(collatx(12));
};

function fibonacci(theNumber){

	var a;
	var b;
	var temp;

	a = 1;
	b = 0;

	while(theNumber > 0){
		temp = a;
		a = a+b;
		b = temp;

		theNumber = theNumber - 1;
	}

	return b;
}

function collatx(theNumber){
	var count;
	var bool;

	theNumber = Math.floor(theNumber);



	while(theNumber !== 1 ){
		bool = theNumber % 2;
		count = count + 1;
		theNumber = ((theNumber * 3) +1) * bool +((theNumber / 2)*bool)
	}

	return count;
}


