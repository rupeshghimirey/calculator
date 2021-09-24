

var displayDiv = document.querySelector("#display");
var equals = document.querySelector("#equals");


var a = "";
var b = '';
var num = [];
var ans;
function press(element) {
    num.push(element);

	if(num.length != 1){
		a = '';
		displayDiv.innerText= a;
	}


	for(i=0; i<num.length ; i++){

		a = a + num[i];			
		
	}

displayDiv.innerText = a;
}

function setOP(element) {
    num.push(element);

	if(num.length != 1){
		a = '';
		displayDiv.innerText= a;
	}


	for(i=0; i<num.length ; i++){

		a = a + num[i];			
		
	}
    displayDiv.innerText = a;

}
function clr() {
    displayDiv.innerText = 0;

    while (num.length > 0) {
        num.pop();
    }

    a = '';
    b = '';
}

function calculate() {
    displayDiv.innerText = '';

    for(i=0; i<num.length ; i++){

		b += num[i];						// concatenating the array "num" into a single string
	}
    ans = eval(b);

    displayDiv.innerText = ans;

    while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	num.push(ans.toString());


}


