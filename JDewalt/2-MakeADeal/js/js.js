//console.log("helloka")
/*$(document).ready(function(){*/
/*function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();

		function randomColor(){
			return '#'+Math.random().toString(16)+slice(2,8);
		/*};

		("#rndcolor-button").on("click",function(){
			$('body').css('background',randomColor());
		})

		function timeFunction(){
			setTimeout(function(){alert("After 5 seconds!");},5000);
		}
		var rnd = Math.floor((Math.random() * 3) + 1);
		console.log("Random generated: "+ rnd);
	}}
		else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}*/

/*});*/

/*
document.getElementsByClassName('cookie').onclick=function() {
	var link=document.getElementById("href");
	link=setAttribute("href","choice"+rnd+".html");
	return false;
}
*/

$(document).ready(function(){
	function randomColor(){
		return '#'+Math.random().toString(16).slice(3,9);
	};
	$("#rndcolor-button").on("click",function(){
		$('body').css('background',randomColor());
	});
});
