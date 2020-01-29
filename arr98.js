
"use strict"
var a = [6, -3, -3, 4, 5, 6, 7, 7, 9, 8, 10, -3, 10, 8, 6];//6,-3,-3,6,-3,6
var n = a.length;//15
var arr = [];
var k = 0;
var m;

for (var i = 0; i <= n; i++){
	for(var j = i + 1; j <= n; j++){
		//console.log(j);// до 15
		
		if(a[i] == a[j]){
			k++;
			//console.log(k);
			//console.log(j);//
			//arr[i] = a[i];
			if(k >= 2){

				arr[i] = a[j];
				//continue;
			}
			else if(j == n){
				k = 0;
				//arr[i] = a[i];
				//console.log(k);
				//console.log(j);
			}
			//console.log(k);
			
		}
	}	
}
for (m = 0; m <= n; m++){
	// для проверки
	
	console.log(arr[m]);
}

/*Array98. Дан целочисленный массив размера N. Удалить из массива все элементы, встречающиеся менее трех раз, и вывести размер полученного массива и его содержимое.*/