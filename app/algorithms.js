var Algorithms, algArray;

function stringCompare(a, b){
	return a.localeCompare(b);
}

function intCompare(a, b){
	if (a < b){
			return -1;
		} else if (a === b){
			return 0;
		} else {
			return 1;
		}
}

function comparitor(a, b){
	if (typeof a === "string" && typeof b === "string"){
		return stringCompare;
	} else if (typeof a === "number" && typeof b === "number"){
		return intCompare;
	} else if (typeof a !== typeof b) {
		throw new Error("Units not of same type");
	} else {
		throw new Error("Invalid unit type");
	}
}

function arrayCopy(src, srcPos, dest, destPos, len){ // Problem with mergesort is in this function
	var temp;
	while (len !== 0){
		temp = src[srcPos];
		dest[destPos] = temp;
		srcPos += 1;
		destPos += 1;
		len -= 1;
	}
}

function merge(arrB, arrC, arrA, func){
    var i = 0, j = 0, k = 0, p, q, temp;
    p = arrB.length;
    q = arrC.length;
    while (i < p && j < q){
		if (func(arrB[i], arrC[j]) <= 0){
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

function mS(arrA, func){
	// actual mergesort function, used to isolate recursion from mergesort()
	var n, arrB, arrC;
    n = arrA.length;
    if (n > 1){
        arrB = [];
        arrC = [];
        arrayCopy(arrA, 0, arrB, 0, Math.floor(n / 2));
        if (n % 2 === 0){
            arrayCopy(arrA, n / 2, arrC, 0, Math.floor(n / 2));
        } else {
            arrayCopy(arrA, n / 2, arrC, 0, Math.floor(n / 2 + 1));
        }
        // console.log("A", arrA, "B", arrB, "C", arrC);
        arrB = mS(arrB, func);
        arrC = mS(arrC, func);
        merge(arrB, arrC, arrA, func);
    }
    return arrA;
}

function partition(arr, left, right, func){
	var temp1, temp2, pivot;
	pivot = arr[Math.floor((left + right) / 2)];
	while (left <= right){
		while (func(arr[left], pivot) < 0){
			left += 1;
		}
		while (func(arr[right], pivot) > 0){
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

function quick(arr, left, right, func){
	var index = partition(arr, left, right, func);
	if (left < index - 1){
		quick(arr, left, index - 1, func);
	}
	if (index < right){
		quick(arr, index + 1, right, func);
	}
}

Algorithms = {
	selection: function(arr, type){
	    var len, cpy, i, func;
		if (arguments.length === 1){
			func = comparitor(arr[0], arr[1]);
		} else {
			if (type === "string"){
				func = stringCompare;
			} else {
				func = intCompare;
			}
		}
	    len = arr.length;
	    cpy = arr.slice();
	    for (i = 0; i < len - 1; i += 1){
	        var min, temp, j;
	        min = i;
	        for (j = i + 1; j < len; j += 1){
				if (func(cpy[j], cpy[min]) < 0){
					min = j;
				}
	        }
	        temp = cpy[i];
	        cpy[i] = cpy[min];
	        cpy[min] = temp;
	    }
	    return cpy;
	},
	insertion: function(arr, type){
		var cpy, i, func;
		if (arguments.length === 1){
			func = comparitor(arr[0], arr[1]);
		} else {
			if (type === "string"){
				func = stringCompare;
			} else {
				func = intCompare;
			}
		}
		cpy = arr.slice();
		for (i = 1; i < cpy.length; i += 1){
			var u, j;
			u = cpy[i];
			j = i - 1;
			while (j >= 0 && func(cpy[j], u) > 0){
			    cpy[j + 1] = cpy[j];
			    j -= 1;
			}
			cpy[j + 1] = u;
		}
		return cpy;
	},
	mergesort: function(arr, type){
	    var cpy, func;
		if (arguments.length === 1){
			func = comparitor(arr[0], arr[1]);
		} else {
			if (type === "string"){
				func = stringCompare;
			} else {
				func = intCompare;
			}
		}
		console.log("arr", arr);
	    cpy = arr.slice();
	    console.log("cpy", cpy);
	    cpy = mS(cpy, func);
	    return cpy;
	},
	quicksort: function(arr, type){
		var cpy, func;
		if (arguments.length === 1){
			func = comparitor(arr[0], arr[1]);
		} else {
			if (type === "string"){
				func = stringCompare;
			} else {
				func = intCompare;
			}
		}
		console.log("arr", arr);
		cpy = arr.slice();
		console.log("cpy", cpy);
		quick(cpy, 0, cpy.length - 1, func);
		return cpy;
	}
};

Object.preventExtensions(Algorithms);

algArray = [Algorithms.selection, Algorithms.insertion, Algorithms.mergesort, Algorithms.quicksort];
