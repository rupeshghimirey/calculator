

var displayDiv = document.querySelector("#display");
var equals = document.querySelector("#equals");


var x = "";
var y = '';
var arr = [];
var result;
function press(element) {
	arr.push(element);

	if (arr.length != 1) {
		x = '';
		displayDiv.innerText = x;
	}


	for (i = 0; i < arr.length; i++) {

		x = x + arr[i];

	}

	displayDiv.innerText = x;
}

function setOP(element) {
	arr.push(element);

	if (arr.length != 1) {
		x = '';
		displayDiv.innerText = x;
	}


	for (i = 0; i < arr.length; i++) {

		x = x + arr[i];

	}
	displayDiv.innerText = x;

}
function clr() {
	displayDiv.innerText = 0;

	while (arr.length > 0) {
		arr.pop();
	}

	x = '';
	y = '';
}

function calculate() {
	displayDiv.innerText = '';

	for (i = 0; i < arr.length; i++) {

		y += arr[i];
	}
	result = eval(y);

	displayDiv.innerText = result;

	while (arr.length > 0) {
		arr.pop();
	}
		arr.push(result.toString());

	}
