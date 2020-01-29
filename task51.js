//  ок

"use strict"
var arr = [0, 1, 2, 5, 10];//5
var n = arr.length;
var first; 
var second;

function sumSliceArray(arr, first, second){
	if(typeof first != "number" || isNaN(first) || 0 >= first ||  first >= n - 1){
		throw new Error("Извини, ошибочка вышла!")
	}
	if(typeof second != "number" || isNaN(second) || 0 >= second || second >= n - 1){
		throw new Error("Извини, ошибочка вышла!")
	}
	return arr[first] + arr[second];
	
} 
try {
	//sumSliceArray (arr, first, second);
	console.log(sumSliceArray(arr, 2, 78));
} catch (error){
	//console.dir(error); // ПОКАЗЫВАЕТ
	console.log(error.name); 
	console.log(error.message); 
	
} finally{
		console.log("finally");
}

//console.log(sumSliceArray(arr, 2, 78));//если менее размера массива - считает

