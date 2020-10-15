

function countInString(source, countMe){
	var i;
	var count;

	i = 0;
	count = 0;
	while(i < source.length){
		if(source.charAt(i) === countMe){
			count = count + 1;
		}
		i = i + 1;
	}
	return count;
}

function countInArray(array, countMe){
	var i;
	var count;

	i = 0;
	count = 0;
	while(i < array.length){
		if(array[i] === countMe){
			count = count + 1;
		}
		i = i + 1;
	}
	return count;
}

function changeString(source, find, replace){
	var ch;
	var i;
	var result;

	result = "";
	i = 0;
	while(i <source.length){
		ch = source.charAt(i);
		if(ch === find)
			ch = replace;
		result = result + ch;
		i = i + 1;
	}
	return result;
}

function changeArray(array, find, replace){
	var i;
	var ch;
	var result;

	result = new Array(array.length);
	i = 0;
	while(i < array.length){
		ch = array[i];
		if(ch === find)
			ch = replace;
		result[i] = ch;
		i = i + 1;
	}
	return result;
}

function swapCharacters(source, i, j){
	var hold;
	var result;

	if(i === j){
		result = source;
	}
	else{
		hold = Math.min(i,j);
		j = Math.max(i,j);
		i = hold;

		result = source.substring(0,i)
				+ source.charAt(j)
				+ source.substring(i+1,j)
				+ source.charAt(i)
				+ source.substring(j + 1);
	}
	return result;
}

function swapElements(array, i, j){
	var hold;
	var result;

	result = new Array(array.length);
	result = copy(array);

	hold = array[i];
	result[i] = array[j];
	result[j] = hold;

	return result;
}

function copy(array){
 	var result;
 	var i;

 	result = new Array(array.length);

 	i = 0;
 	while(i < array.length){
 		result[i] = array[i];
 		i = i + 1;
 	}

 	return result;
 }
