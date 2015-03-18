
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

function merge(arrB, arrC, arrA, type){
    var i = 0, j = 0, k = 0, p, q, temp;
    p = arrB.length;
    q = arrC.length;
    while (i < p && j < q){
	if (type === "string"){
		if (arrB[i].localeCompare(arrC[j]) <= 0){
			temp = arrB[i];
			arrA[k] = temp;
			i += 1;
		} else {
			temp = arrC[j];
			arrA[k] = temp;
			j += 1;
		}
	} else {
		if (arrB[i] <= arrC[j]){
			temp = arrB[i];
			arrA[k] = temp;
			i += 1;
		} else {
			temp = arrC[j];
			arrA[k] = temp;
			j += 1;
		}
	}
        k += 1;
    }
    if (i === p){
        arrayCopy(arrC, j, arrA, k, q - j);
    } else {
        arrayCopy(arrB, i, arrA, k, p - i);
    }
}

function partition(arr, left, right, type){
	var temp, pivot;
	pivot = arr[(left + right) / 2];
	while (left <= right){
		if (type === "string"){
			while (arr[left].localeCompare(pivot) < 0){
				left += 1;
			}
			while (arr[right].localeCompare(pivot) > 0){
				right += 1;
			}
		} else {
			while (arr[left] < pivot){
				left += 1;
			}
			while (arr[right] > pivot){
				right += 1;
			}
		}
		if (left <= right){
			temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left += 1;
			right -= 1;
		}
	}
	return left;
}

function quick(arr, left, right, type){
	var index = partition(arr, left, right, type);
	if (left < index - 1){
		quick(arr, left, index - 1);
	}
	if (index < right){
		quick(arr, index + 1, right);
	}
}

var Algorithms = {
	selection: function(arr, type){
	    var len, cpy, i;
	    len = arr.length;
	    cpy = arr.slice();
	    for (i = 0; i < len - 1; i += 1){
	        var min, temp, j;
	        min = i;
	        for (j = i + 1; j < len; j += 1){
				if (type === "string"){ // need to determine a better way to select type comparison, possibly determining type at runtime
					if (cpy[j].localeCompare(cpy[min]) < 0){
						min = j;
					}
				} else {
					if (cpy[j] < cpy[min]){
						min = j;
					}
				}
	        }
	        temp = cpy[i];
	        cpy[i] = cpy[min];
	        cpy[min] = temp;
	    }
	    return cpy;
	},
	insertion: function(arr, type){
		var cpy, i;
		cpy = arr.slice();
		for (i = 1; i < cpy.length; i += 1){
			var u, j;
			u = cpy[i];
			j = i - 1;
			if (type === "string"){
				while (j >= 0 && cpy[j].localeCompare(u) > 0){
				    cpy[j + 1] = cpy[j];
				    j -= 1;
				}
			} else {
				while (j >= 0 && cpy[j] > u){
				    cpy[j + 1] = cpy[j];
				    j -= 1;
				}
			}
			cpy[j + 1] = u;
		}
		return cpy;
	},
	mergesort: function(arrA, type){ // Figure out way for recursive searches to return a copy of the original array
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
	        arrB = Algorithms.mergesort(arrB, type);
	        arrC = Algorithms.mergesort(arrC, type);
	        merge(arrB, arrC, arrA, type);
	    }
	    return arrA;
	},
	quicksort: function(arr, type){
		var cpy = arr.slice();
		quick(cpy, 0, cpy.length - 1, type);
		return cpy;
	}
};

Object.preventExtensions(Algorithms);
// module.exports = Algorithms;
