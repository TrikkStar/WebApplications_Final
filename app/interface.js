
define(["algorithms", "handlebars", "jquery", "template"], function(algorithms, handlebars, jquery, template){
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
			// creates HTML that will be shown when the page is loaded by using the template, calls numAlgs
			var content, i;
			// content = "<h1>Algorithmic Analysis!</h1>";
			// content += "<div><h3>Number of algorithms to compare</h3><select id=\"quantity\">";
			// content += "<option value=\"1\" selected>1</option>";
			// for (i = 2; i < 5; i += 1){
			// 	content += "<option value=\"" + i + "\">" + i + "</option>";
			// }
			// content += "</select></div>";
			// need to change all above to: content = template;
			content = template(algArray);
			$(el).after(content);
			numAlgs();
		}

		function numAlgs(){
			// changes displayed content based on the number of algorithms the user wishes to compare
			var value, content;
			value = $("#quantity").val();
			console.log("made it", value);
		}

		function algContent(){
			// handles selection of an algorithm and display of that algorithms output, may have display handeled by a seperate function

		}

		function execute(){
			// actually runs the sorting algorithms after the submit button has been pressed
		}

		function inputArray(){
			// function to handle the processing of a given array, or generation of a random array if none is given
		}

		// more functions to be added as necessary

		function bindEvents(){
			// responsible for calling functions when their requisit events happen
			$("#quantity").on("change", numAlgs);

		}

		construct();
		bindEvents();
	};
	controller($("#main"));
});
