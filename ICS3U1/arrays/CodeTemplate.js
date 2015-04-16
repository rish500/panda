$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	var box = new Image();

	////////////////////////////////
	// What is an Array?	     //
	//////////////////////////////
	/*
	An ARRAY is a variable that can hold more than 1 value

	It is like a list of regular variables, where all the value are of the same type.

	Example: Storing 36 grade marks, or storing a list of Facebook contacts

	The name of the list is the array variable's name, ex friendList



	Each individual value (in this case contact name) is refered to using the:

	- Array name (like variables you can have more than 1 array)

	AND

	- An index number to get a single value from the list.


	Using the array and an index lets you work with each value on the list the same
	way we always did with regular single value variables.

	*/



	////////////////////////////////
	// Array Variable Declaration //
	///////////////////////////////

	var myArray = [];

	
	

	//	OR

	var myOtherArray = new Array();

	//Both declarations do the same thing

	////////////
	//  NOTE  //
	////////////
	/*
		You can access each individual value using the [] brackets.
			Example:
		
			myArray[3] = "Cookie Monster";
			ctx.fillText(myArray[3], 100, 100);

		It works just like any other variable (pic1, pic2, etc)
		It is just very good at handling lists of information.

		Javascript has a small quirk that other languages don't have.

		You don't have to specify how many elements you want in your array
		You can just keep adding values and it will be alright
			Example: 
		
			myArray = new Array();
			myArray[9] = "Stevie";  <-- thats the 10th value, but what 
							about the first 9?

			How does it know to have room for 10 values?
			-> When you put in [9] it went ahead and made room for the 
				previous values.  Room in memory it didn't have 
				before.

		Arrays in Javascript can rebuild themselves on the go, this lets us
		manipulate data on a more general level.  We let Javascript do the
		detail work.

	*/


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
	
	for(i


	//////////////////////////////////
	///	To use Array Code	///
	/////////////////////////////////

	//Example #1
	myArray[0] = 16;		//The first value in the list
	//myArray[1] = 25;		//The 
	//myArray.push(31);		//What did this do?


	//Example #2
/*
	myArray[0] = 12;	//The first value in the array.
	myArray[1] = -6;	//The second value in the array.
	myArray[4] = 5;		//You can even skip a row, its value would just be 
						//undefined.
*/
	

	//////////////////////////////////
	///	To add Elements	///
	/////////////////////////////////

//Example # 3
/*
	myArray.push(12);

	myArray.push(5);

	myArray.push(3);

	myArray.push(-8);
*/
	//////////////////////////////////
	///	To use different Types	///
	/////////////////////////////////
	//Example # 4
/*
	myArray.push("Steve");

	myArray.push("Guzy");

	myArray.push("Bilbo");

	myArray.push("Zombie Face");

*/



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
		ctx.fillStyle='white';
		ctx.fillRect(0,0,w,h);



		
		ctx.fillStyle='black';

		
		ctx.font = "15pt Stencil";
		ctx.fillText("myArray", 110, 40);

		if(myArray.length == 1){
			ctx.fillText("index", 10, 70);
			ctx.fillText("value", 180, 70);
		}
		

		//////////////////////////////////////////////////////////////////////////
		//Using a FOR loop to go through the entire array in one piece of code
		/////////////////////////////////////////////////////////////////////////
		//Example # 5


		for (var i = 0; i < myArray.length; i++){

			ctx.drawImage(box, 70, 50 + 75 * i, 30, 30);
			ctx.font = "12pt Stencil";
			ctx.fillText(i, 80,70 + 75 * i);
			ctx.drawImage(box, 100,50 + 75 * i, 75, 75);

			ctx.font = "18pt Stencil";
			ctx.fillText(myArray[i], 110,80 + 75 * i);

		}

			

		
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
