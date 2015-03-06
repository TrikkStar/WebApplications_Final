//All search functions take an array of strings as an argument
function selection(arr) {
    var len = arr.length;
    for(var i=0; i<len-1; i++){
        var min, temp;
        min = i;
        for(var j=i+1; j<len; j++){
            if (arr[j].localeCompare(arr[min]) < 0){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}