# WebApplications_Final

This project is a joint collaberation between Shelby Babcock and myself to build a web based method of compairing sorting algorithms. A link to a usable version of the project can be found [here](http://rawgit.com/TrikkStar/WebApplications_Final/master/index.html). 

##Description

Our application will give users a visual representation of various sorting algorithms with the ability to compare their efficencies side by side.

Users will be able to select from a variety of pre-made arrays to sort, or supply their own array of intigers for sorting. 

To do this, we will use the following helper functions:

1) arrayCopy (src,srcPos,dest,destPos,len): copies the array given the source, the source position, the destination, the destination position, and the length.

2) merge (arrB,arrA,type): merges two arrays together given the two arrays and the type.

3) partition (arr,left,right,type): splits the array into two sections, left and right, given the array, left, right, and the type.

4) quick (arr,left,right,type): utilizes partition, but reduces run time.

The user will be able to use the following algorithms:

1) selection(arr,type): this algorithm takes an array and a type and returns the minimum value in the array (for strings, a comparison method is used to determine value).  This works by iterating through the array over and over using slicing.  When a value is found, it is compared to the current minimum (at the beginning, the minimum is the first number in the array), and the stored minimum will either change to the examined value or remain the same as it goes through the array.  

2) insertion(arr,type): this algorithm takes an array and a type and returns a new array sorted by value from minimum to maximum.  Insertion works by inserting each element into the new array one at a time and then moving them around based on value as it iterates through the source array.  Each value in the array is analyzed one at a time and then compared to the new array one by one.

3) mergeSort(arrA,type): this algorithm takes an array (here termed ArrA) and a type and returns a copy of the original array with the values sorted numerically, from lowest to highest.  mergeSort works similar to a tree but in reverse.  The arrA is split into individual elements and the elements are then placed into pairs for comparison.  Then, once those pairs are in the correct numerical order, they are combined and compared with the next pair and then sorted again, then compared, then sorted, all the way until the array is back to its original length and sorted numerically.

4) quickSort(arr,type): this algorithm takes an array and a type and returns a copy of the array sorted numerically.  This sorting method involves partitioning the array at the last element and moving that element to its correct numerical position, with each higher number moving the right of the "pivot" element and all smaller numbers moving to a position right behind the first element (in other words, arr[1]).  Then, the elements to the left and right of that correctly placed pivot are examined and ordered numerically.  Finally, the ordered sections are put back together to create the full sorted array.  Despite the seemingly complicated execution, quickSort has a relatively short run time.
