"use script";

/*	Anshul Bharath
	CISC 131
	Spring 2020

	03/30/20

	This lecture exercise demonstrates the use of the Caesar's cipher

	*/

window.onload =  function()
{
	//window.alert(encrypt("A"));
	window.alert(decrypt("C"));
	
	
};

function getAlphabet(){

	return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function encrypt(text){
	var result;
	var i;
	var alphabet;

	result = "";
	alphabet = getAlphabet();
	text = text.toUpperCase();

	i = 0;
	while(i < text.length){
		if(alphabet.indexOf(text.charAt(i)) <= 0){
			result = result + text.charAt(i);
		}
		else{
			result = result + alphabet.charAt((alphabet.indexOf(text.charAt(i)) + 3) % 26); 
		}

		i = i + 1;
	}
	return result;
}

function decrypt(text){
	var result;
	var i;
	var alphabet;

	result = "";
	alphabet = getAlphabet();
	text = text.toUpperCase()

	i = 0;
	while(i < text.length){
		if(alphabet.indexOf(text.charAt(i)) <= 0){
			result = result + text.charAt(i);
		}
		else{

			result = result + alphabet.charAt(Math.abs((alphabet.indexOf(text.charAt(i)) - 3)) % 26); 
		}

		i = i + 1;
	}
	return result;
}

function encryptDecrypt(text, num){

	if(num > 0 && num % 2 === 0){
		return encrypt(text);
	}
	else{
		if(num > 0 && num % 2 === 1){
			return decrypt(text);
		}
	}
}



