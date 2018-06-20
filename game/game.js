function Rect(top, left, width, height, color){
	this.top = top;
	this.left = left;
	this.width = width;
	this.height = height;
	this.color = color;

	//this.draw = drawRect;
	this.create = createRect;

}

function createRect(){
	var r = document.createElement('div');
	r.setAttribute("id", "d1");
	r.setAttribute('style', "position: absolute; top: "+this.top+"px; left:"+this.left+"px; width:"+this.width+"px; height:"+this.height+"px; background-color:"+this.color+";");
	var body = document.body;
	body.appendChild(r);
	r.setAttribute("onmouseover", "jumpRect()")
}
//console.log(document.body.clientWidth)
/*document.body.clientHeight*/

function jumpRect(e){
	var e = e || event;
	var centerX = parseInt(d1.style.width)/2;
	var centerY = parseInt(d1.style.height)/2;

	var ox = e.offsetX;
	var oy = e.offsetY;
	var step = 100;

	if(ox<centerX){
		d1.style.left = (parseInt(d1.style.left)+step)+"px";
		if(parseInt(d1.style.left>document.documentElement.clientWidth)){
			d1.style.left = (parseInt(d1.style.left)-step*2)+"px";
		}
	}else{
		d1.style.left = (parseInt(d1.style.left)-step)+"px";
		if(parseInt(d1.style.left<0)){
			d1.style.left = (parseInt(d1.style.left)+step*2)+"px";
		}
	}
	if(oy<centerY){
		d1.style.top = (parseInt(d1.style.top)-step)+"px";
		if(parseInt(d1.style.top<0)){
			d1.style.top = (parseInt(d1.style.top)+step*2)+"px";
		}
		
	}else{
		d1.style.top = (parseInt(d1.style.top)+step)+"px";
		if(parseInt(d1.style.top>document.documentElement.clientHeight)){
			d1.style.top = (parseInt(d1.style.top)-step*2)+"px";
		}

	}

	//console.log("client:"+e.clientX+","+e.clientY+"\r\n"+"xy:"+e.offsetX+" "+e.offsetY);
	//console.log("yes")
}
/*function drawRect(){
	document.write("<div id='d1' style='position: absolute; top: "+this.top+"px; left:"+this.left+"px; width:"+this.width+"px; height:"+this.height+"px; background-color:"+this.color+";'></div>");
	
}*/
var r = new Rect(100, 150, 100, 100, '#df0');
	//r.draw();
	r.create();



