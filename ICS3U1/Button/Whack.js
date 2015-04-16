$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	
	var bHeight = (h/4) - 5;
	var bWidth = (w/4) - 5;
	
	var scren = 1
	var scren2 = 2 
	
	var bx = 350
	var by = h - 350
	var dx = 0
	var dy = h - 0
	var screenAni = 0 
	
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	//////Scren Stuf//////////
	var scren = 1
	
	var scren3 = 3 
	var scren2 = 2
	/////gAME MOde OnE///////////
	var Frute = []
	var snack = []
	//////border stuf///////////
	var bx = 350;
	var by = h - 250;
	var dx = 0;
	var dy= h - 0;
	var screenAni = 0;
	var randcol = '#' + Math.round(Math.random()*16777215).toString(16);
	///Game mode 2! ////////
	var street = [];
	var mapW = 10;
	var mapH = 10;
	
	var px = 100;
	var py = 100;
	var panda = 1
	/////////////////////////////////
	////////////////////////////////
	///////////			/////////////
	///////		GAME INIT	///////////
	//////////			/////////////
	//////////////////////////////
	/////////////////////////////
	
	function init()
	
	{
		
		/////////////////////////
		///////		1D Array
		///////	Just adds a number to the list
		Frute.push(1);

	
		
		
		
		//////////////////////////
		//////		2D Array
		//////	Create a 1D array, and make each element
		//////	in the array another array
		
	
	for(var i = 0; i < 46; i++){
			Frute[i] = [];
							
							
			for(var j = 0; j < 30; j++){//Go through each of the new lists
										
				Frute[i].push(1 + Math.floor(Math.random() * 5));//Give a random number 1 - 5 so it has a value
			}
	
		
		}
		
		//Now that we have a list of lists (or array of arrays) we have a grid
		//We can refer to individual values with [][] two brackets
		//This is essentially x and y coordinates for the grid
		
	//////////
	///STATE VARIABLES
	
		//Constants 
		
		
	
	

	//////////////////////
	///GAME ENGINE START
	

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 80);
		//Using i & j in for loops, we can now access every
		//value stored in the grid
		
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		if(scren == 1){
			ctx.fillStyle = "lightblue"
			ctx.fillRect(0,0, w, h);	
			
			ctx.fillStyle = ' Black ';
			ctx.font = '10pt Verdana'
			ctx.fillText("Main Menu Beta", 100, 50);
			ctx.fillStyle = '#' + Math.round(Math.random()*16777215).toString(16);
		
			
/////////////////////////////////////////////////////////////////////////////////////////////	
	
			var c = screenAni;
		
			while(c < w){
				ctx.fillRect(c, h - 25, 25,25);
				c += 34;
			}
		
			ctx.fillStyle = '#' + Math.round(Math.random()*16777215).toString(16);
			ctx.fillRect(dx, dy, 50,50);
	
			screenAni ++;
				if(screenAni > 20) screenAni = 0;
			screenAni ++;
				if(screenAni > 20) screenAni = 0;	
			screenAni ++;
				if(screenAni > 20) screenAni = 0;
			screenAni ++;
				if(screenAni > 20) screenAni = 0;	
			screenAni ++;
				if(screenAni > 20) screenAni = 0;
			screenAni ++;
				if(screenAni > 20) screenAni = 0;	
			screenAni ++;
				if(screenAni > 20) screenAni = 0;
			screenAni ++;
				if(screenAni > 20) screenAni = 0;	
			screenAni ++;
				if(screenAni > 20) screenAni = 0;
			screenAni ++;
				if(screenAni > 20) screenAni = 0;	

			

////////////////////////////////////////////////////////////////////////////////////			
			
			var c = screenAni;
		
			while(c < w){
				ctx.fillRect(c, 0, 25,25);
				c += 34;
			}
		
		

		
			
				ctx.fillRect(bx, by, 50,66);
			
			
				ctx.fillText("Game Mode", bx, by + 50, + 50); 
		
//////////////////////////////////////////////////////////////////////////////////////		
	
			var c = screenAni;
		
			while(c < h){
				ctx.fillRect(c, w - 36, 36,36);
				c += 34;
			}
		
		
		
		
			ctx.fillStyle = 'brown'
			ctx.fillRect(dx, dy, 50,50);	
	
	
		

		/*
		if(condition){
			//Do something
		}else if(some other condition){
			//Do something else
		}else{ 
			//Do this if no other condition worked so far
		}

		When an if statement block is running, regardless of the number of else if's 
		you use, the if statement will settle on the first condition to evaluate to
		TRUE.  You can combine multiple conditions using 
		&& (and)
		|| (or) 
		! (not)
		== (equals)
		> (greater than)
		>= (greater than or equal to)
		< (less than)
		<= (less than or equal to)

		But more on those later.


		*/

		//ctx.fillText(ctx.font, 10, 80);

		//ctx.font = '30px sans-serif';
			
		}else if(scren2 == 2) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w,h);	
		/*
		ctx.fillStyle='turquoise';
		ctx.fillRect(b1x,b1y,b1w,b1h);
		
	
		ctx.fillStyle='burgundy';
		ctx.fillRect(b2x,b2y,b2w,b2h)*/
		
		ctx.fillStyle="green";
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				ctx.fillRect(i*(w/4),j*(h/4), bWidth, bHeight);
		
			}
		}
	}	
		
}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	/////////////// s
	canvas.addEventListener('click', function (evt){
		
	if(mx > bx && mx < bx + 129 && my > by && my < by + 159) {
		if(scren == 1) scren++;	
	}
	

	if(mx> 0 && mx < (w/4) - 5 && scren == 2){
			console.log ("does something");
		}
 	     
	if(mx > w/4 && mx < (w/2) -5 && scren == 2) {
		 window.location.href = "http://duckduckgo.com"
	  	}
		
	if(mx > w/2 && mx < w*(3/4)-5 && scren == 2) {
			console.log ("does somthing else");
		}
		
	if(mx >w*(3/4) && mx < w-5 && scren == 2){
			console.log ("does nothing");
			
		}
							   
	if(mx > w/4 && mx < (w/2) -5 && scren == 2) {
			confirm  ("going to website")
		
		}
		
	
	
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
