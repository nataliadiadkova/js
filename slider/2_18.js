var wins = document.getElementsByClassName("win");
for (var i = 0; i < wins.length; i++) {
	wins[i].onclick = function(){
		var div_bg = document.createElement('div');
		div_bg.className = "bg";
		document.body.appendChild(div_bg);

		var div_text = document.createElement('div');
		div_text.className = "text";
		div_text.innerHTML += "Call us!";
		div_text.innerHTML += "<a  href='#'class='close'>x</a>";
		div_bg.appendChild(div_text);
		div_text.getElementsByClassName('close')[0].onclick = function(){
			document.body.removeChild(div_bg);
			return false;
		}
		return false;
	}
}; 

// gallery
var ul = document.querySelectorAll(".gallery ul")[0];
document.getElementsByClassName('next')[0].onclick = function(){
	ul.appendChild(ul.removeChild(ul.firstElementChild));
	return false;
}

 document.getElementsByClassName('prev')[0].onclick = function(){
 	ul.insertBefore((ul.removeChild(ul.lastElementChild)),ul.firstElementChild);
 	return false;
 }//ul.insertAdjacentElement

 for (var i = 0; i < ul.children.length; i++) {
 	ul.children[i].onclick = function(){
 		var div_bg = document.createElement('div');
		div_bg.className = "bg";
		document.body.appendChild(div_bg);
		var div_text = document.createElement('div');
		div_text.className = "text";
		var path = this.firstElementChild.getAttribute('src');
		div_text.innerHTML += "<img src='"+path+"' alt=''>";
		div_text.innerHTML += "<a  href='#'class='close'>x</a>";
		div_bg.appendChild(div_text);
		div_text.getElementsByClassName('close')[0].onclick = function(){
			document.body.removeChild(div_bg);
			return false;
		}
 	}
 };
 // mousemove
 var gallery = document.getElementsByClassName('gallery')
	for (var i = 0; i < gallery.length; i++) {
	if('onwheel' in document){
		//IE9+, FF17++
		//console.log();
		gallery[i].addEventListener('wheel', myScroll);
	}
	else{
		if('onmousewheel' in document){
			//	старые браузеры 
			gallery[i].addEventListener('mousewheel', myScroll)
		}
		else{
			//FF16-
			gallery[i].addEventListener('MozMousePixelScroll', myScroll)

		}
	}
};

function myScroll(e){
		e = e || event;
		var delta = e.deltaY || e.detail || e.wheelDelta;
		console.log(delta);
		if(delta<0){
			var ul = document.querySelectorAll(".gallery ul")[0];
			ul.appendChild(ul.removeChild(ul.firstElementChild));

		}
		else{
			var ul = document.querySelectorAll(".gallery ul")[0];
			ul.insertBefore((ul.removeChild(ul.lastElementChild)),ul.firstElementChild);
 
 }

		}
	