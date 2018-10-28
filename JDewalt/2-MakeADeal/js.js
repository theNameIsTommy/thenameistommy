//console.log("helloka")
var rnd = Math.floor((Math.random() * 3) + 1);
console.log("Random generated: "+ rnd);

document.getElementsByClassName('cookie').onclick=function() {
	var link=document.getElementById("href");
	link=setAttribute("href","choice"+rnd+".html");
	return false;
}
