//OK

"use strict"

var moduleRectangle = (function () {
	// Функционал модуля
		
	var firstSide;
	var secondSide;
	function getPerimeter(){
		return (firstSide + secondSide) * 2;
	}
		
	return {
		// Методы и свойства для доступа к функционалу
		/*this.isCorrectData: function(value){
			if(typeof value == "number" && !isNaN(value) && value > 0){
				return true;
			}
			else {
				false;
			}
		},*/
		
		setFirstSide: function(value){
			if(typeof value == "number" && !isNaN(value) && value > 0){
				firstSide = value;
			}
			
		},
		setSecondSide: function(value){
			if(typeof value == "number" && !isNaN(value) && value > 0){
				secondSide = value;
				}
					
		},		
		
		getPerimeter: function(){
			return getPerimeter();
		}
	}
			
}());//6
moduleRectangle.setFirstSide(2);
moduleRectangle.setSecondSide(1);
//console.log(getPerimeter());
//moduleRectangle.setFirstSide(2);
//moduleRectangle.setSecondSide(3);
//console.log(moduleRectangle.getPerimeter(2, 3));


/*
//var moduleRectangle = (function Rectangle() {
	// Функционал модуля
	function Rectangle() {
	
	this._firstSide = 0;
	this._secondSide = 0;
	function getPerimeter(){
		return (this._firstSide + this._secondSide) * 2;
	}
		
	return {
		// Методы и свойства для доступа к функционалу
		Rectangle.prototype.setFirstSide = function(value){
			if(this.isCorrectData(value)){
				this._firstSide = value;
			}
			
		}
		Rectangle.prototype.setSecondSide = function(value){
			if(this.isCorrectData(value)){
				this._secondSide = value;
				}
					
		}		
		Rectangle.prototype.isCorrectData = function(value){
			if(typeof value == "number" && !isNaN(value) && value > 0){
				return true;
			}
			else {
				false;
			}
		}
		getPerimeter: function(){
			return getPerimeter();
		}
	}
	}		
}());
var rect = new Rectangle();
rect.setFirstSide(2);
rect.setSecondSide(3);
//console.log(moduleRectangle.getPerimeter(2, 3));*/
