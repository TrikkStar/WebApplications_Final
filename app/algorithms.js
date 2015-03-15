var algorithms = {
	selection: function(arr, type) {
	    var len, cpy;
	    len = arr.length;
	    cpy = arr.slice();
	    for(var i=0; i<len-1; i++){
	        var min, temp;
	        min = i;
	        for(var j=i+1; j<len; j++){
	            if (cpy[j].localeCompare(cpy[min]) < 0){ //need to add logic for chosing type of data in cpy
	                min = j;
	            }
	        }
	        temp = cpy[i];
	        cpy[i] = cpy[min];
	        cpy[min] = temp;
	    }
	    return cpy;
	}
}