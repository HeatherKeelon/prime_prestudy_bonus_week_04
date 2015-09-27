function testingJs (x){
	if (x>10) {

		console.log("Hey, this works!");
	}

		else {
			console.log("Oops");
		}

};

testingJs(12);

var splinter = function(number1, number2){
	var z=number1*number2;
	var array = [number1, number2, z];

	return array;

};

console.log(splinter(2,4));


