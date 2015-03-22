
define(function(algorithms, handlebars, jquery){
	var testArr, testArr2, controller;
	// testArr = [5, 7, 8, 3, 6, 2, 4, 9, 0, 1];
	// testArr2 = ["x", "q", "p", "w", "a", "c", "n"];
	// console.log(Algorithms.selection(testArr));
	// console.log(Algorithms.selection(testArr2));
	// console.log(Algorithms.insertion(testArr));
	// console.log(Algorithms.insertion(testArr2));
	// console.log(Algorithms.mergesort(testArr)); mergesort is not functioning properly, it crashes the browser
	// console.log(Algorithms.mergesort(testArr2));
	// console.log(Algorithms.quicksort(testArr));
	// console.log(Algorithms.quicksort(testArr2));
	
	controller = function(element){
		var el = $(element);

		function construct(){
			// creates HTML that will be shown when the page is loaded, calls numAlgs
			var content;
			content = "<h1>Algorithmic Analysis!</h1>";


			$(el).after(content);
		}

		function numAlgs(){
			// changes displayed content based on the number of algorithms the user wishes to compare, defaults to 1

		}

		function algContent(){
			// handles selection of an algorithm and display of that algorithms output

		}


		// more functions to be added as necessary


		construct();
	};
	controller($("#main"));
});
