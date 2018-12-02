function getNumber(num){
	var input_var = document.getElementById("input");
	input_var.value += num;	
}

function getOperand(operand) {
	var input_var = document.getElementById("input");
	if ( input_var.value[input_var.value.length-1] == '+' 
		|| input_var.value[input_var.value.length-1] == '-'
		|| input_var.value[input_var.value.length-1] == '*'
		|| input_var.value[input_var.value.length-1] == '/'
	) {
		input_var.value = input_var.value.replace(input_var.value[input_var.value.length-1], operand);
	} 
	else
		input_var.value += operand;
}

function clearScreen(){
	document.getElementById("input").value = "";
	document.getElementById("answer").value = "";
}

function backspace(){
	var input_var = document.getElementById("input");
	var x = input_var.value;
	if(x.length > 0) {
		x = x.substring(0, x.length - 1);
		input_var.value = x;
	}
}

function compute() {
	var input_var = document.getElementById("input");
	ans =+eval(input_var.value).toFixed(5);

	if(isFinite(ans)) {
		document.getElementById("answer").value = '=' + ans;
	}
}

var i = 0;
function brackets() {
	var input_var = document.getElementById("input");
	if( i == 0){
		input_var.value += '(';
		i = 1; 
	} else if( i == 1 && input_var.value[input_var.value.length-1] !== '('){
		input_var.value += ')';
		i = 0;
	}
}

/*document.addEventListener("DOMContentLoaded", function (event) {
	const draggable = document.querySelector("#draggable");
	const offset = {
		left: 0,
		top: 0
	};
	
	draggable.addEventListener("mousedown", function (event) {
		draggable.style.cursor = "-webkit-grabbing";
		offset.left = draggable.offsetLeft - event.clientX;
		offset.top = draggable.offsetTop - event.clientY;
		document.addEventListener("mousemove", moveListener);
		document.addEventListener("mouseup", dropListener);
	});

	function moveListener(event) {
		draggable.style.marginLeft = "0px";
		draggable.style.marginTop = "0px";
		draggable.style.left = `${event.clientX + offset.left}px`;
		draggable.style.top = `${event.clientY + offset.top}px`;
	}

	function dropListener(event) {
		draggable.style.cursor = "-webkit-grab";
		document.removeEventListener("mousemove", moveListener);
		document.removeEventListener("mouseup", dropListener);
	}
});*/