
define(["algorithms", "handlebars", "jquery", "template"], function(algorithms, handlebars, jquery, template){
	var testArr, testArr2, controller;
	// testArr = [5, 7, 8, 3, 6, 2, 4, 9, 0, 1];
	// testArr2 = ["x", "q", "p", "w", "a", "c", "n"];
	// console.log(Algorithms.selection(testArr, "int"));
	// console.log(Algorithms.selection(testArr2, "string"));
	// console.log(Algorithms.insertion(testArr, "int"));
	// console.log(Algorithms.insertion(testArr2, "string"));
	// console.log(Algorithms.mergesort(testArr, "int"));
	// console.log(Algorithms.mergesort(testArr2, "string"));
	// console.log(Algorithms.quicksort(testArr, "int"));
	// console.log(Algorithms.quicksort(testArr2, "string"));
	
	function randomString(len) { 	
	 var arr = [], caseRange, i; 	
	 if (len == null) { len = 5; } 	
	 for (i = 0; i < len; i += 1) { 	
		 caseRange = [65, 97][Math.floor(Math.random() * 2)]; 	
		 arr.push(Math.floor(Math.random() * 26) + caseRange); 	
	 } 	
	 return String.fromCharCode.apply(String, arr); 	
	}

	function randomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function processInput(str){
		// process inputed array and converts it into an actual array
	}

	controller = function(element){
		var el, dataArr, datArrType;
		el = $(element);

		function construct(){
			// creates HTML that will be shown when the page is loaded by using the template, calls numAlgs
			var content = template(algArray);
			$(el).after(content);
			numAlgs();
		}

		function numAlgs(){
			// changes displayed content based on the number of algorithms the user wishes to compare
			var value, content;
			value = $("#quantity").val();
			el = $("#x");
		}

		function algContent(){
			// handles selection of an algorithm and display of that algorithms output, may have display handeled by a seperate function

		}

		function inputArray(){
			// function to handle the processing of a given array, or generation of a random array if none is given
			var rand, i;
			dataArr = [];
			if ($("#input").val() === ""){
				if (Math.random() < 0.5){
					datArrType = "string";
					for (i = 0; i < 10; i += 1){
						rand = randomString(randomInt(1,7));
						dataArr.push(rand);
					}
				} else {
					datArrType = "int";
					for (i = 0; i < 10; i += 1){
						rand = randomInt(1,100);
						dataArr.push(rand);
					}
				}
			} else {
				dataArr = processInput($("#input").val());
			}
		}

		function execute(){
			// actually runs the sorting algorithms after the submit button has been pressed
			inputArray();
			console.log(datArrType, dataArr);
			$("#output").after(dataArr);

		}

		// more functions to be added as necessary

		function bindEvents(){
			// responsible for calling functions when their requisit events happen
			$("#quantity").on("change", numAlgs);
			$("#submit").on("click", execute);

		}

		construct();
		bindEvents();
	};
	controller($("#main"));
});
