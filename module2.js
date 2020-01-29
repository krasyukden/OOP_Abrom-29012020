//OK

"use strict"

var moduleRectangleArea = (function () {
	// Функционал модуля
		
	var firstSide;
	var secondSide;
	function getArea(){
		return firstSide * secondSide;
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
		
		getArea: function(){
			return getArea();
		}
	}
			
}());//2
moduleRectangleArea.setFirstSide(2);
moduleRectangleArea.setSecondSide(1);
