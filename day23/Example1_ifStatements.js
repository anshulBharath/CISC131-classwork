"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/16/20

	The introduction of if statements

	*/

window.onload =  function()
{
	var number;

	number = window.prompt("What is your number?");
	window.alert(number);
	/*window.alert("Without if: " + collatzNoIf(number));
	window.alert("With if: " + collatzUsingIf(number));
	*/

	//window.alert(fibonacciNoIf(number));
	//window.alert(fibonacciUsingIf(number));

	//window.alert(getDaysInMonthA(number));
	window.alert(getDaysInMonthB(12));



};

function collatzNoIf (theNumber){
	var count;
    var oddOrEven;

	count = 0;
	while ( theNumber > 1 ) {
		count = count + 1; 
		oddOrEven = theNumber % 2;
		theNumber = ( ((theNumber * 3) + 1) * oddOrEven ) + (theNumber/2) * ((oddOrEven+1)%2);
	} // while
    return count;
}

function collatzUsingIf(theNumber){
	var count;
	var oddOrEven;

	count = 0;
	while(theNumber > 1){
		count = count + 1;
		oddOrEven = theNumber % 2;

		if(oddOrEven === 1){
			theNumber = (theNumber * 3) + 1;
		}
		else{
			theNumber = theNumber / 2;
		}
	}
	return count;
}

function fibonacciNoIf(theNumber){
	var i;
	var p;
	var q;
	var result;

	p = 1;
	q = -1;

	i = 0;
	while(i <= theNumber){
		result = p + q;
		q = p;
		p = result;
		i = i + 1;
	}

	return result;
}

function fibonacciUsingIf(theNumber){
	var i;
	var p;
	var q;
	var result;

	if(theNumber === 0) {result = 0;}
	if(theNumber === 1) {result = 1;}

	if(theNumber > 1){
		p = 0;
		q = 1;

		i = 2;
		while(i <= theNumber){
			result = p + q;
			p = q;
			q = result;
			i = i + 1;
		}
	}

	return result;
}

//Exercise A
function getDaysInMonthA(month){
	var result;

	if(month === 1){
		result = 31; 
	}
	else{
		if(month === 2){
			result = 28;
		}
		else{
			if(month === 3){
				result = 31;
			}
			else{
				if(month === 4){
					result = 30;
				}
				else{
					if(month === 5){
						result = 31;
					}
					else{
						if(month === 6){
							result = 30;
						}
						else{
							if(month === 7){
								result = 31;
							}
							else{
								if(month === 8){
									result = 30;
								}
								else{
									if(month === 9){
										result = 31;
									}
									else{
										if(month === 10){
											result = 30;
										}
										else{
											if(month === 11){
												result = 31;
											}
											else{
												if(month === 12){
													result = 30;
												}
					
											}
					
										}
					
									}
					
								}
					
							}
					
						}	
					
					}

				}
			}
		}
	}
	return result;
}

//Exercise B
function getDaysInMonthB(month){
	var result;

	if(month === 1){
		result = 31;
	}
	if(month === 2)
		result = 28;
	if(month === 3)
		result = 31;
	if(month === 4)
		result = 30;
	if(month === 5)
		result = 31;
	if(month === 6)
		result = 30;
	if(month === 7)
		result = 31;
	if(month === 8)
		result = 30;
	if(month === 9)
		result = 31;
	if(month === 10)
		result = 30;
	if(month === 11)
		result = 31;
	if(month === 12)
		result = 30;
	

	return result;
}
	








