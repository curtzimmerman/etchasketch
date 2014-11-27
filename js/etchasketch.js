
// Returns the length of a div's side to fit inside the wrapper
function squareSize(numPerRow) {
	var height = $("#wrapper").height();
	return height / numPerRow; 
}

//creates all etchasketch squares that fit inside the wrapper
function initializeDivs(numPerSide) {	
	var wrapper = $("#wrapper");
	wrapper.empty();
	var size = squareSize(numPerSide);
	var count = 0;
	for (var i=0; i < numPerSide; i++) {
		for (var j=0; j < numPerSide; j++) {
		wrapper.append("<div id=\""+i+"\" class=\"canvasSquare\"></div>");
		count++;
		}
	}
	$(".canvasSquare").width(size);
	$(".canvasSquare").height(size);
	$(".canvasSquare").css({"float": "left", "border":"none", "margin": "0px auto"})
	selectMode();
}

//changes background color of divs to white
function defaultEtch() {
	$("#wrapper").children().off("mouseover");
	$("#wrapper").children().on("mouseover", function() {
		var color = "#FFFFFF";
		if (!$(this).hasClass("highlighted")){
			$(this).css({"background-color": color});
			$(this).addClass("highlighted");
		}
	});
}

//changes background color of divs to random colors
function randomColors() {
	$("#wrapper").children().off("mouseover");
	$("#wrapper").children().on("mouseover", function() {
		var color = 0;
		color = '#'+Math.random().toString(16).substr(-6);
		if (!$(this).hasClass("highlighted")){
			$(this).css({"background-color": color});
			$(this).addClass("highlighted");
		}
	});
}

//user entered number of divs per side of wrapper
function getSides() {
	do {
		var num = prompt("How many squares per side? (Between 8 and 100", 8);
		return num;
	}
	while (num <= 8 && num >= 100)
}

function selectMode() {
	if($("input[name=color]:checked").val() == "normal") {
		defaultEtch();
	}
	else if ($("input[name=color]:checked").val() == "random") {
		randomColors();
	}
}

$(document).ready(function() {
	$("#options").after("<div id=\"wrapper\"></div>");
	$("#wrapper").css({"height":"750px","width":"750px","background-color":"#000000", "display": "inline-block"})
	initializeDivs(8);
	$("#clearButton").on("click", function (){
		$(".canvasSquare").css({"background-color":"#000000"});
		$(".canvasSquare").removeClass("highlighted");
		selectMode();
	});
	$(".mode").change(function() {
		selectMode();
	});
	$("#resize").on("click", function() {
		initializeDivs(+getSides());
	})
});