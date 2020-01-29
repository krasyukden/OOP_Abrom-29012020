// !!! не ок - sum.setSecondNumber(3); не  устанавливается
"use strict"
var arr = [4, 1, 2, 5, 10];//5
var n = arr.length;

function SumSliceArray(){
//function SumSliceArray(arr, first, second){// не раб
	
	this.first = 0; 
	this.second = 0;
	

 
try {
	SumSliceArray (arr, first, second);
	//console.log(sumSliceArray(arr, 2, 78));
} catch (error){
	//console.dir(error); //
	console.log(error.name); 
	console.log(error.message); 
	
} finally{
		console.log("finally");
}

SumSliceArray.prototype.isCorrectData = function(value){
	if(typeof value == "number" && !isNaN(value) && 0 >= value &&  value >= n - 1){
		return true;
	}
	else{
		return false;
	}
};

SumSliceArray.prototype.setFirstNumber = function (value){
	if(this.isCorrectData(value)){
		this.first = value;
	}
};	
SumSliceArray.prototype.setSecondNumber = function(value){
	if(this.isCorrectData(value)){
		this.second = value;
	}
};
SumSliceArray.prototype.sumRes = function(){
	
	return arr[this.first] + arr[this.second];
}	
}

var sum = new SumSliceArray()// NaN
//var sum = new SumSliceArray(arr, 1, 0); // не Ok - берет оба [0]
	
sum.setFirstNumber(2);// не устанавливается
sum.setSecondNumber(3);// не устанавливается
console.log(sum.sumRes());


