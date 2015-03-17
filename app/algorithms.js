
var Algorithms = {
	selection: function(arr, type){
	    var len, cpy, i;
	    len = arr.length;
	    cpy = arr.slice();
	    for (i = 0; i < len - 1; i += 1){
	        var min, temp, j;
	        min = i;
	        for (j = i + 1; j < len; j += 1){
	        	if (type === "string"){ // need to determine a better way to select type comparison
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
	mergesort: function(arr, type){
		// to be added later
	}
};

Object.preventExtensions(Algorithms);
// module.exports = Algorithms;