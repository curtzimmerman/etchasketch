function squareSize(numPerRow) {
	var height = $("#wrapper").height();
	return +height / +numPerRow; 
}

function createDivs() {
	//ask user for number of squares, make width of divs according to what will fit in the wrapper
	var numDivs = 64;
	var numPerRow = parseInt(Math.sqrt(+numDivs));
	numDivs = Math.pow(numPerRow, 2); //gets largest perfect square less than numDivs	
	
	var wrapper = $("#wrapper");
	var size = squareSize(numPerRow);
	for (var i=0; i < numDivs; i++) {
		wrapper.append("<div id=\""+i+"\"></div>");
		$("#"+i).css({"height":size+"px","width":size+"px", "float":"left", "vertical-align": "middle"});
	}
	wrapper.children().on("mouseover", function() {
		var color = 0;
		color = '#'+Math.random().toString(16).substr(-6);
		if (!$(this).hasClass("highlighted")){
			$(this).css({"background-color": color});
			$(this).addClass("highlighted");
		}
	});
}




$(document).ready(function() {
	$("#header").after("<div id=\"wrapper\"></div>");
	$("#wrapper").css({"height":"960px","width":"960px","background-color":"#000000"})
	createDivs();	
	$("#clearButton").on("click", function (){
		$("#wrapper").empty();
		createDivs();
	});
});