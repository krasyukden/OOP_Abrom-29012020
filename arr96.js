//  перенос уникальных числел  -ок, но с null !!! 
"use strict"
var a = [1, -3, -3, -3, 5, 6, 5, 8, 9, 8];
var n = a.length;//10
var arr = [];

for (var i = 0; i <= n; i++){
	
	for(var j = i + 1; j <= n; j++){
		if(a[i] == a[j] && a[i] != a[j + 1]){
			arr[i] = a[i];
			a[i]= null;
			//continue;
		}
		else if(a[i] == a[j] && a[i] == a[j + 1]){
			arr[i] = a[i];
			a[i]= null;
		}
		if(a[i] != a[j]){
			arr[i] = a[i];
			// k++
	}	
	}
}
for (var k = 0; k < n; k++){
	// для проверки
	if(typeof a[k]  !== null){
		//console.log(arr[k]);
		arr.slice(a[k], a[k + 1]);
	}
	console.log(arr[k]);
}


/*Array96. Дан целочисленный массив размера N. Удалить из массива все одинаковые элементы, оставив их первые вхождения. */