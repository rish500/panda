$(document).ready(function() { 
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	
	//Lets save the cell width in a variable for easy control
	var cw = 15;
	var d;
	var food;
	var score;
	var mx, my;
	//Lets create the snake now
	var snake_array; //an array of cells to make up the snake
    
    //mENU
    var scren = 1;
	
	//Options4
	var Seizure;
	var randcol = "#"+Math.floor(Math.random()*16777215).toString(16);
   
	
	
    /////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
    
    
    function init()
	{
		d = "down";                   //default direction
		create_snake();
		create_food();                //Now we can see the food particle
		                              
        score = 0;                    //finally lets display the score
	}	
		
	function paint_cell(x, y)
	{
		if(Seizure == true){

			ctx.strokeStyle = randcol;
			ctx.fillRect(x*cw, y*cw, cw, cw);
			ctx.fillStyle = randcol;
			ctx.strokeRect(x*cw, y*cw, cw, cw);
		
		}else{ctx.strokeStyle = "Red"
			  ctx.fillRect(x*cw, y*cw, cw, cw);	
			  ctx.fillStyle = "Black"
			  ctx.strokeRect(x*cw, y*cw, cw, cw);					
			 }
		   //Colour of cells
		
	}
	
	function check_collision(x, y, array)
	{
		//This function will check if the provided x/y coordinates exist
		//in an array of cells or not
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	/////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.
        
        //Lets move the snake now using a timer which will trigger the paint function
		//every 60ms
		
        if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 65);
	
	
    
    init();
	
	function create_snake()
	{
		var length = 8;               //Set the length of the snake
		snake_array = [];             //Empty array to start with
		for(var i = length-1; i>=0; i--)
		{
			//This will create a horizontal snake starting from the top left
			
            snake_array.push({x: i, y:0});
		}
	}
	
	//Lets create the food now
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), //create food in random area within canvas dimensions for snake
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		
		
	}
	
	//Lets paint the snake now
	
    
    ///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
    
    
    
    function paint()
	{
	   if (scren == 0) 
		{   
        
        	ctx.fillStyle = "#234676"; 
			ctx.fillRect(0, 0, w, h);
			ctx.strokeStyle = "green";
			ctx.strokeRect(0, 0, w, h);
			ctx.fillStyle= "black";
			ctx.fillText ( "Playing", w/2 - 325, h-30);  
	
		
	
	

    /////////////            
   //Canvas Colour                      
   ////// /////// 
		} else if (scren == 1){
			
		ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 330, h-50, 85, 35);

	ctx.globalAlpha = 1;	
		
		
	////////////////////////////////
   ////Property of Rishav Lay Gaudet  /////
  ////////////////////////////////
		
		
		//Canvas1 Colour
      
		if(Seizure == true){

		ctx.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);  
		} else {
			ctx.fillStyle = "#009900";				
		}
		ctx.fillRect(0, 0, w, h);
       
    //////////    
	//Moovment, I like cows
	/////////
		var Snakex = snake_array[0].x;
		var Snakey = snake_array[0].y;
		
  
         //Directions
		
        if(d == "right") Snakex++;
		else if(d == "left") Snakex--;
		else if(d == "up") Snakey--;
		else if(d == "down") Snakey++;
		
	
	
	//////////////
	//Collision 
	/////////////
		if(Snakex == -1 || Snakex == w/cw || Snakey == -1 || Snakey == h/cw || check_collision(Snakex, Snakey, snake_array))
		{
			
            
            //restart game
			
            
            
            init();
	
			return;
		}
		
		
		//FOOOOOOD 
		
		
           if(Snakex == food.x && Snakey == food.y)
		{
			var tail = {x: Snakex, y: Snakey};
			score++;
			
        //Create new FOOOOOOD
			create_food();
		}
		else
		{
			var tail = snake_array.pop(); //pops out the last cell
			tail.x = Snakex; tail.y = Snakey;
		}
		
        //The snake can now eat the food.0,0,w,
		
		snake_array.unshift(tail); //Sets the tail as the first cell
		
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			//Lets paint 10px wide cells
			paint_cell(c.x, c.y);
		}
		
		//Lets paint the food
           
		paint_cell(food.x, food.y);
		
           
		//////
       //sCORE
      ///////
	   
	   var score_text = + (score);
	   ctx.font="69px Comic Sans MS"
        ctx.fillStyle = "white";
		ctx.fillText(score_text, w/2 - ctx.measureText(score_text).width/2, h/2 - 250);
	

	}
    
	
    	//Lets first create a generic function to paint cells

	////////////////////////////////
   ////Property of Austin Lay /////
  ////////////////////////////////

//Lets add the keyboard controls now

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
		
		if(mx > w/2 - 330 && mx <  w/2 - 245 && my > h-50 && my < h-15) { 		

		scren = 0;

		}
//	confirm ("word")
 
 if (mx > w/2 - 65 && mx < w/2 + 255 && my > h-45.5 && my < h-10.5) { 

			scren = 1;

		}									   

	//	confirm ("youur mom")

		if (mx > 30 && mx < 170 && my > 30 && my < 65) { 

			scren=3;

		}	 
	}, false);

	
	

	//canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	//canvas.addEventListener ('mouseover', function(){pause = false;}, false);

     // 	canvas.addEventListener('mousemove', function(evt) {
        	//var mousePos = getMousePos(canvas, evt);

	//	mx = mousePos.x;
	//	my = mousePos.y;

      //	}, false);


//	function getMousePos(canvas, evt) 
	//{
	    //    var rect = canvas.getBoundingClientRect();
        //	return {
          //		x: evt.clientX - rect.left,
          	//	y: evt.clientY - rect.top
        	//	};
      //	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////

	$(document).keydown(function(e){
		var key = e.which;
		//We will add another clause to prevent reverse gear
		if(key == "37" && d != "right") d = "left";
		else if(key == "38" && d != "down") d = "up";
		else if(key == "39" && d != "left") d = "right";
		else if(key == "40" && d != "up") d = "down";
		//The snake is now keyboard controllable
		
    })
	

	//window.addEventListener('keydown', function(evt){
	//	var key = evt.keyCode;
		
        
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		


 })