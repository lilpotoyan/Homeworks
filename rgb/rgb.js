var input = document.querySelectorAll("input");;
for(let i = 0; i < input.length; i++){
	input[i].addEventListener("input", function(){
		var red = document.getElementById("red").value;
		var	green = document.getElementById("green").value;
		var blue = document.getElementById("blue").value;
		var display = document.getElementById("display1");
		display.style.background = "rgb(" + red + "," + green + "," + blue + ")";
		var div1 = document.getElementById("div1");
        div1.style.background = "rgb(" + red*0.6 + "," + green*0.6 + "," + blue*0.6 + ")";
        var div2 = document.getElementById("div2");
        div2.style.background = "rgb(" + red*0.7 + "," + green*0.7 + "," + blue*0.7 + ")";
        var div3 = document.getElementById("div3");
        div3.style.background = "rgb(" + red*0.8 + "," + green*0.8 + "," + blue*0.8 + ")";
        var div4 = document.getElementById("div4");
        div4.style.background = "rgb(" + red*0.9 + "," + green*0.9 + "," + blue*0.9 + ")";
        var div5 = document.getElementById("div5");
        div5.style.background = "rgb(" + red + "," + green + "," + blue + ")";
        var div6 = document.getElementById("div6");
        div6.style.background = "rgb(" + red/0.7 + "," + green/0.7 + "," + blue/0.7 + ")";
        var div7 = document.getElementById("div7");
        div7.style.background = "rgb(" + red/0.6 + "," + green/0.6 + "," + blue/0.6 + ")";
        var div8 = document.getElementById("div8");
        div8.style.background = "rgb(" + red/0.5 + "," + green/0.5 + "," + blue/0.5 + ")";
        var div9 = document.getElementById("div9");
        div9.style.background = "rgb(" + red/0.4 + "," + green/0.4 + "," + blue/0.4 + ")";
    
	});
}