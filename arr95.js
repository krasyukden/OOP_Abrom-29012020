//работает. как побороть undefined ?????

"use strict"
var a = [1, -3, -3, -3, 5, 6, 6, 8, 8, 10];
var n = a.length;//10
var arr = [];

for (var i = 0; i < n; i++){
	if(a[i] == a[i + 1] && a[i] == a[i + 2]){// если более 3х подряд одинаковых???
		arr[i] = a[i];
		//if(arr[i] == arr[i + 1]){
			continue;
			//arr[i + 1] = null;
		}
		
				
	
	else if(a[i] == a[i + 1] && a[i] != a[i + 2] && a[i] != a[i - 1]){
		arr[i] = a[i];
	}
	else if(a[i] != a[i + 1] && a[i] != a[i - 1]){
		arr[i] = a[i];
	}
}
for (var j = 0; j < n; j++){// для проверки
	console.log(arr[j]);
}

/*Array95. Дан целочисленный массив размера N. Удалить из массива все соседние одинаковые элементы, оставив их первые вхождения.*/ 