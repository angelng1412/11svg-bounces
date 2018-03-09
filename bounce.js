var svg = document.getElementById("s");
var anim;

var animate = function(){

    var x = 40;
    var xchange = Math.abs(Math.floor(Math.random()*10 - 5));
    var y = 100;
    var ychange = Math.abs(Math.floor(Math.random()*10 - 5));
    var rad = 20;
    
    var go = function(){
	erase();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "black");
	svg.appendChild(c);

	x = x + xchange;
	y = y + ychange;

	if (x <= rad || x >= svg.width.baseVal.value - rad){
	    xchange = -1 * xchange;
	}
	if (y <= rad || y >= svg.height.baseVal.value - rad){
	    ychange = -1 * ychange;
	}

	console.log(x);
	console.log(y);
    }

    anim = setInterval(go, 10);
}

var bounce = function(e){
    animate();
}

svg.addEventListener("click", bounce);

var stop = function(){
    clearInterval(anim);
    anim = null;
    erase();
}

clear.addEventListener("click", stop);
