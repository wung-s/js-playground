function ref(a) {
	a.push(3);
	console.log("function a has: ", a);
}

var arr = [1,2,4];
ref(arr.slice());

console.log("global arr has: ", arr);
