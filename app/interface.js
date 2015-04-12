
define(["algorithms", "handlebars", "jquery", "template"], function(Algorithms, handlebars, jquery, template){
	var controller;

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

	function processInput(str, type){
		// process inputed array and converts it into an actual array
		var arr, i;
		arr = str.split(" ");
		if (type === "num"){
			for (i = 0; i < arr.length; i += 1){
				arr[i] = parseFloat(arr[i]);
			}
		}
		return arr;
	}

	controller = function(element){
		var el, dataArr, datArrType, selectedAlgs;
		el = $(element);

		function construct(){
			// creates HTML that will be shown when the page is loaded by using the template
			$(el).after(template(Algorithms));
			algContent();
		}

		function algContent(){
			// handles selection of algorithms to use for sorting
			selectedAlgs = $("#algorithms").val();
			console.log(selectedAlgs);
		}

		function inputArray(){
			// function to handle the processing of a given array, or generation of a random array if none is given
			var rand, i;
			dataArr = [];
			if ($("#input").val() === ""){
				datArrType = $("#type").val();
				if (datArrType === "string"){
					for (i = 0; i < 10; i += 1){
						rand = randomString(randomInt(1, 7));
						dataArr.push(rand);
					}
				} else {
					for (i = 0; i < 10; i += 1){
						rand = randomInt(1, 100);
						dataArr.push(rand);
					}
				}
			} else {
				datArrType = $("#type").val();
				dataArr = processInput($("#input").val(), datArrType);
			}
		}

		function execute(){
			// actually runs the sorting algorithms after the submit button has been pressed
			$("#output").empty();
			inputArray();
			console.log(datArrType, dataArr);
			$("#output").append("<p>Quicksort: " + Algorithms.quicksort(dataArr, datArrType) + "</p>");
			$("#output").append("<p>Mergesort: " + Algorithms.mergesort(dataArr, datArrType) + "</p>");
			$("#output").append("<p>Insertion: " + Algorithms.insertion(dataArr, datArrType) + "</p>");
			$("#output").append("<p>Selection: " + Algorithms.selection(dataArr, datArrType) + "</p>");
		}

		function bindEvents(){
			// responsible for calling functions when their requisit events happen
			$("#submit").on("click", execute);
			$("#algorithms").on("change", algContent);
		}

		construct();
		bindEvents();
	};
	controller($("#main"));
});
