var Algorithms, algArray;

function comparitor(a, b){
	if (typeof a === "string" && typeof b === "string"){
		return a.localeCompare(b);
	} else if (typeof a === "number" && typeof b === "number"){
		if (a < b){
			return -1;
		} else if (a === b){
			return 0;
		} else {
			return 1;
		}
	} else if (typeof a !== typeof b) {
		throw new Error("Units not of same type");
	} else {
		throw new Error("Invalid unit type");
	}
}

function arrayCopy(src, srcPos, dest, destPos, len){
	var temp;
	while (len !== 0){
		temp = src[srcPos];
		dest[destPos] = temp;
		srcPos += 1;
		destPos += 1;
		len -= 1;
	}
}

function merge(arrB, arrC, arrA){
    var i = 0, j = 0, k = 0, p, q, temp;
    p = arrB.length;
    q = arrC.length;
    while (i < p && j < q){
		if (comparitor(arrB[i], arrC[j]) <= 0){
			temp = arrB[i];
			arrA[k] = temp;
			i += 1;
		} else {
			temp = arrC[j];
			arrA[k] = temp;
			j += 1;
		}
        k += 1;
    }
    if (i === p){
        arrayCopy(arrC, j, arrA, k, q - j);
    } else {
        arrayCopy(arrB, i, arrA, k, p - i);
    }
}

function partition(arr, left, right){
	var temp1, temp2, pivot;
	pivot = arr[Math.floor((left + right) / 2)];
	while (left <= right){
		while (comparitor(arr[left], pivot) < 0){
			left += 1;
		}
		while (comparitor(arr[right], pivot) > 0){
			right -= 1;
		}
		if (left <= right){
			temp1 = arr[left];
			temp2 = arr[right];
			arr[left] = temp2;
			arr[right] = temp1;
			left += 1;
			right -= 1;
		}
	}
	return left;
}

function quick(arr, left, right){
	var index = partition(arr, left, right);
	if (left < index - 1){
		quick(arr, left, index - 1);
	}
	if (index < right){
		quick(arr, index + 1, right);
	}
}

Algorithms = {
	selection: function(arr){
	    var len, cpy, i;
	    len = arr.length;
	    cpy = arr.slice();
	    for (i = 0; i < len - 1; i += 1){
	        var min, temp, j;
	        min = i;
	        for (j = i + 1; j < len; j += 1){
				if (comparitor(cpy[j], cpy[min]) < 0){
					min = j;
				}
	        }
	        temp = cpy[i];
	        cpy[i] = cpy[min];
	        cpy[min] = temp;
	    }
	    return cpy;
	},
	insertion: function(arr){
		var cpy, i;
		cpy = arr.slice();
		for (i = 1; i < cpy.length; i += 1){
			var u, j;
			u = cpy[i];
			j = i - 1;
			while (j >= 0 && comparitor(cpy[j], u) > 0){
			    cpy[j + 1] = cpy[j];
			    j -= 1;
			}
			cpy[j + 1] = u;
		}
		return cpy;
	},
	mergesort: function(arrA){ // Figure out way for recursive searches to return a copy of the original array
	    var n, arrB, arrC;
	    n = arrA.length;
	    if (n > 1){
	        arrB = [];
	        arrC = [];
	        arrayCopy(arrA, 0, arrB, 0, n / 2);
	        if (n % 2 === 0){
	            arrayCopy(arrA, n / 2, arrC, 0, n / 2);
	        } else {
	            arrayCopy(arrA, n / 2, arrC, 0, n / 2 + 1);
	        }
	        arrB = Algorithms.mergesort(arrB);
	        arrC = Algorithms.mergesort(arrC);
	        merge(arrB, arrC, arrA);
	    }
	    return arrA;
	},
	quicksort: function(arr){
		var cpy = arr.slice();
		quick(cpy, 0, cpy.length - 1);
		return cpy;
	}
};

Object.preventExtensions(Algorithms);

algArray = [Algorithms.selection, Algorithms.insertion, Algorithms.mergesort, Algorithms.quicksort];
