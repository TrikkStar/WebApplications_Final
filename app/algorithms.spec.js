var expect, Algorithms;

expect = require("./chai.js").expect;

Algorithms = require("./algorithms.js");

describe("Your Algorithms object", function(){
	it("is an object", function(){
		expect(Algorithms).to.be.a("object");
	});
	it("has the correct keys", function(){
		expect(Algorithms).to.have.ownProperty("selection", "insertion", "mergesort", "quicksort", "algArray", "arr");
	});
});