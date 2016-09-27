var first = new Promise(function(resolve, reject) {
	resolve("a");
});


first.then(function(resp) {
	console.log(resp);
},function() {})
	.then(function(resp) {

		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve('with 2000 delay');
			}, 2000);
		})
		
		console.log('second chain');
	})
	.then(function(resp) {
		console.log(resp + ' third chain');
	});




	console.log("***** end of script *******");