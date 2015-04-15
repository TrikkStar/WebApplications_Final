var expect, Algorithms;

expect = require("./chai.js").expect;

Algorithms = require("./algorithms.js");

function randomString(len) {
	var arr = [], caseRange, i;
	if (len == null) {
		len = 5;
	}
	for (i = 0; i < len; i += 1) {
		caseRange = [97, 129][Math.floor(Math.random())];
		arr.push(Math.floor(Math.random() * 26) + caseRange);
	}
	return String.fromCharCode.apply(String, arr);
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("Your Algorithms object", function(){
	it("is an object", function(){
		expect(Algorithms).to.be.a("object");
	});
	it("has the correct keys", function(){
		expect(Algorithms).to.have.ownProperty("selection", "insertion", "mergesort", "quicksort", "algArray", "arr");
	});
	it("correctly runs for numbers", function(){
		var rawArr, sArr, iArr, mArr, qArr, i, j;
		for (i = 0; i < 15; i += 1){
			rawArr = [];
			for (j = 0; j < 20; j += 1){
				rawArr.push(randomInt(0,10000));
			}
			sArr = Algorithms.selection(rawArr, "int");
			iArr = Algorithms.insertion(rawArr, "int");
			mArr = Algorithms.mergesort(rawArr, "int");
			qArr = Algorithms.quicksort(rawArr, "int");
			// test to see if all results are equal to one another
			expect(sArr).to.equal(iArr);
			expect(sArr).to.equal(mArr);
			expect(sArr).to.equal(qArr);
			expect(iArr).to.equal(mArr);
			expect(iArr).to.equal(qArr);
			expect(mArr).to.equal(qArr);
		}
	});
	it("correctly runs for strings", function(){
		var rawArr, sArr, iArr, mArr, qArr, i, j;
		for (i = 0; i < 15; i += 1){
			rawArr = [];
			for (j = 0; j < 20; j += 1){
				rawArr.push(randomString(randomInt(3,7)));
			}
			sArr = Algorithms.selection(rawArr, "string");
			iArr = Algorithms.insertion(rawArr, "string");
			mArr = Algorithms.mergesort(rawArr, "string");
			qArr = Algorithms.quicksort(rawArr, "string");
			// test to see if all results are equal to one another
			expect(sArr).to.equal(iArr);
			expect(sArr).to.equal(mArr);
			expect(sArr).to.equal(qArr);
			expect(iArr).to.equal(mArr);
			expect(iArr).to.equal(qArr);
			expect(mArr).to.equal(qArr);
		}
	});
	it("correctly runs for varied input", function(){
		var rawArr, sArr, iArr, mArr, qArr, i, j;
		for (i = 0; i < 15; i += 1){
			rawArr = [];
			if(Math.random() < .5){
				for (j = 0; j < 20; j += 1){
					rawArr.push(randomString(randomInt(3,7)));
				}
			} else {
				for (j = 0; j < 20; j += 1){
					rawArr.push(randomInt(0,10000));
				}
			}
			sArr = Algorithms.selection(rawArr);
			iArr = Algorithms.insertion(rawArr);
			mArr = Algorithms.mergesort(rawArr);
			qArr = Algorithms.quicksort(rawArr);
			// test to see if all results are equal to one another
			expect(sArr).to.equal(iArr);
			expect(sArr).to.equal(mArr);
			expect(sArr).to.equal(qArr);
			expect(iArr).to.equal(mArr);
			expect(iArr).to.equal(qArr);
			expect(mArr).to.equal(qArr);
		}
	});
});