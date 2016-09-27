var Promise = require("bluebird");

function second(b) {
	console.log("b has: ", b);
}

var first = function(a, cb) {
	
	console.log('a has: ', a);
	cb(a);
	
};

// var third = function(a,)

first(10, second);
