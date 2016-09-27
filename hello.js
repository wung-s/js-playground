

var sayHello = function(name) {
	var txt = name; 
	return function() {
		console.log(txt);
	}
}


var first = sayHello('hello world');
var second = sayHello('in herer!!');

first();
second();

console.log(!!{one: 'ness'});