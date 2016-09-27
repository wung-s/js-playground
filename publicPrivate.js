var Module = (function() {

	var pFn = function() {
		console.log("third function");
	};

	var pFn2 = function(txt) {
		console.log(txt);
	};
	
	return {
		firstFn: function() {
			console.log("first function");
		}, 
		secondFn: function() {
			console.log('second function');
		}, 
		thirdFn: function() {
			pFn();
		}, 
		fourthFn: function(txt) {
			pFn2(txt);
		}
	}
})();


Module.firstFn();
Module.secondFn();
Module.thirdFn();
Module.fourthFn('success!!!');
Module.fourthFn('better understanding !');