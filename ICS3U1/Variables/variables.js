$(document).ready(function(){
	
	document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	var name1, name2, name3;
	var grade1, grade2, grade3;
    
	var item1
	
	var price1
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES
	name1 = "Rishaasav";
	name2 = "Panda";
	name3 = "Bear";

	grade1 = 75;
	grade2 = 80;
	grade3 = 80;
	
	item1='pen';
	
	price1=10;
	
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'turquoise ';
		ctx.fillRect(0,0, w,h);	



		ctx.font = "10pt Verdana";
		ctx.fillStyle = 'green';
		ctx.fillText("Name & Grades", 100,100);
		ctx.fillText(name1 + grade1,  100, 110);
		ctx.fillText(name2 + grade2, 100, 120);
		ctx.fillText(name3 + grade3, 100, 130);
		
		ctx.fillText(item1+'-----'+price1+'-----'+price1*0.15+'-----'+(price1+(price1*0.15)), 120, 125);
		
		
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})
