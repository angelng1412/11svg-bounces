var svg = document.getElementById("s");
var anim;
var id = 0;
var list = [];
var xvelocity = [];
var yvelocity = [];
var rad = 15;

var circle = function(e){
    
    clearInterval(id);
    id = setInterval(animate, 10);  
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", rad);
    c.setAttribute("fill", "black");
    svg.appendChild(c);
    list.push(c);

    var xchange = Math.abs(Math.floor(Math.random()*10 - 5));
    var ychange = Math.abs(Math.floor(Math.random()*10 - 5));

    xvelocity.push(xchange);
    yvelocity.push(ychange);
}




var animate = function(e){
    for (i=0; i < list.length; i++){
	var circ = list[i];
	var x = parseInt(circ.getAttribute("cx"));
	var y = parseInt(circ.getAttribute("cy"));
	var xchange = xvelocity[i];
	var ychange = yvelocity[i];

	if (x <= rad || x >= svg.width.baseVal.value - rad){
	    xchange = -1 * xchange;
	}
	if (y <= rad || y >= svg.height.baseVal.value - rad){
	    ychange = -1 * ychange;
	}

	x = x + xchange;
	y = y + ychange;

	circ.setAttribute("cx", x);
	circ.setAttribute("cy", y);
	xvelocity[i] = xchange;
	yvelocity[i] = ychange;
	
    }
}



svg.addEventListener("click", circle);

var erase = function(){
    svg.innerHTML = "";
}

var stop = function(){
    clearInterval(anim);
    anim = null;
    list = [];
    erase();
}

clear.addEventListener("click", stop);
