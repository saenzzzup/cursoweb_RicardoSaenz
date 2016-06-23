var a, b;
var x = 0;

document.getElementById('+').onclick=function() {
	document.getElementById("operador").innerHTML="<h2>  +  </h2>";
	x = 1; 

}

document.getElementById('-').onclick=function() {
	document.getElementById("operador").innerHTML="<h2>  -  </h2>";
	x = 2; 

}
document.getElementById('*').onclick=function() {
	document.getElementById("operador").innerHTML="<h2>  x  </h2>";
	x = 3; 

}
document.getElementById('/').onclick=function() {
	document.getElementById("operador").innerHTML="<h2>  /  </h2>";
	x = 4; 

}

document.getElementById('=').onclick=function() {
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;

	if(x == 1){
		c = parseFloat(a) + parseFloat(b);
	}else if (x == 2){
		c = parseFloat(a) - parseFloat(b);
	}else if (x == 3){
		c = parseFloat(a) * parseFloat(b);
	}else if (x == 4){
		c = parseFloat(a) / parseFloat(b);
	}
	if (x != 0){
		document.getElementById("resutado").innerHTML="<h2> = " + c + "</h2>";
	}else{
		document.getElementById("resutado").innerHTML="<h2> = ERROR</h2>";
	}

}