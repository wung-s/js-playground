function valFn(a) {
   var tmp = a;  
  //  return function() {
  //  console.log('returned', tmp);	
  // }

  return {
  	one: function() {
  		console.log('from one', tmp);
  	}, 
  	two: function() {
  		console.log('from two', tmp);
  	}
  }
}


var fnCall = valFn(22);

fnCall.one();
fnCall.two();



