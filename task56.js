// ОК

"use strict"
function random(min, max, delay, callback) {
   // Ваш код
   var error;
   var data;
   if (min < max){
   data = Math.floor(Math.random() * 100);// Округляет аргумент до ближайшего меньшего целого.
   //return data;
   //console.log(data);
   }
   else{
	   error = new Error("Invalid parameters1");
   }
   setTimeout (function(){callback (error, data)}, delay)
   
}
/*random(1, 100, 2000, function (error, data) { // работ
   // Ваш код
   
   
   if(error) {
	   throw error;
   }
   console.log(data);
});*/
random(1000, 100, 3000, function (error, data) {
   // Ваш код
   if(error) {
	   throw error;
   }
   console.log(data);
});























/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);//Округляет аргумент  вверх
  max = Math.floor(max);// Округляет аргумент до ближайшего меньшего целого.
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(1.25, 100.45));
console.log(Math.ceil(1.97));//2
console.log(Math.floor(100.89));//100
console.log(Math.random());
/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(1, 100));*/