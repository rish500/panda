//Property of Rishav 
$(document).ready(function() {
	

document.body.onmousedown = function() { return false; } //so page is unselectable




	//Canvas stuff

		var canvas = $("#canvas")[0];
		var ctx = canvas.getContext("2d");
		var w = $("#canvas").width();
		var h = $("#canvas").height();
		var mx, my;

	//Menu stuff
		var scren = 0; // Menu screen
		
	//Pong stuff

		var Ball = [];
		var Bally = [];
		var Ballx = [];
		var Paddle = 0;
		var Paddley = 0 ;
		var Paddlex = 0;
		var Paddle2= 0;
		var Paddle2y= 0;
		var Paddle2x = 0 ;
		var PaddleHeight = 100;
		var PaddleLength = 15;

	//Rishav's code

		var picture = new Image(); 
		var picture1 = new Image ();
		var picture2 = new Image ();
		var randcol = "#"+Math.floor(Math.random()*16777215).toString(16);
		var score = 0; 
		var bDx = []
		var bDy = [];
		var score1 = 0;
		var score2 = 0;
		var autoH;
	    var Seizure = new Boolean;
	  	var FireBall = new Boolean;
	

	//Array

		
	//////////////////////////////

	////////////////////////////////

	////////	GAME INIT
//Property of Rishav 
	///////	Runs this code right away, as soon as the page loads.

	//////	Use this code to get everything in order before your game starts 

	//////////////////////////////

	/////////////////////////////

	

	function init()

		{

		 Ballx[0] = Math.floor(w/2);

		 Bally[0] = Math.floor(h/2);

		 

		 bDx[0] = -10;

		 bDy[0] =  -10;

		 

    	 /*Ballx[1] = Math//Property of Rishav .floor(w/2);

		 Bally[1] = Math.floor(h/2);

		 

		 bDx[1] = 10;

		 bDy[1] = -10;*/

	 

		 Paddle = 100;

    	 Paddle2 = 300;
		 
		 Paddlex = 20;

		 Paddle2x = 660;




		FireBall = true;


		 autoH = Bally[0] - PaddleHeight/2;

	//////////

	///STATE VARIABLES

	

	

	

	
	//////////////////////

	///GAME ENGINE START

	//	This starts your game/program

	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here

	//	"60" sets how fast things should go

	//	Once you choose a good speed for your program, you will never need to update this file ever again.




	if(typeof game_loop != "undefined") clearInterval(game_loop);

		game_loop = setInterval(paint, 30);

	}




	init();	

	




/*if(FireBall == true){

			golbalAlpha 
		}else{globalAlpha = 0};

	*/

	///////////////////////////////////////////////////////

	////////////////////////////////////////////

	//////////

	////////	Main Game Engine

	////////////////////////////////////////////////////

	///////////////////////////////////////////////////

	function paint()

	{



/////////////

//Menu Screen	 

/////////////	

	if (scren == 0){

	

	ctx.globalAlpha = 1;




	

	ctx.fillStyle = "#FFFFFF";

	ctx.fillRect(0,0,w,h);

	

	randcol = "#"+Math.floor(Math.random()*16777215).toString(16);
//Property of Rishav //Property of Rishav //Property of Rishav 
	

	

		for(var i = 0; i < Ballx.length; i++){

			ctx.fillStyle='light green';

				ctx.fillRect(Ballx[i],Bally[i],10,10);
 
				

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "turquoise";}

		

		

		for(var j=0; j < 12;j++){w
			if(FireBall == true){

				ctx.globalAlpha = 0.5;

			}else{ctx.globalAlpha = 0;}

			ctx.fillRect(Ballx[i] - j*bDx[i] + Math.floor(Math.random()*6), Bally[i] - j*bDy[i] + Math.floor(Math.random()*6), 10-j,10-j);	

		}

		

		

		ctx.globalAlpha = 1;

		ctx.fillRect(Paddlex,autoH, PaddleLength, PaddleHeight);

		ctx.fillRect(Paddle2x,autoH,PaddleLength, PaddleHeight);

		if((Ballx[i] > Paddlex && Ballx[i] < Paddlex + PaddleLength )&& (Bally[i] > Paddley && Bally[i] < Paddley + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

		


		}

		ctx.fillStyle = "black";

		ctx.fillText( (Bally[i] > Paddle2y && Bally[i] < Paddle2y + PaddleHeight), 100,100);

		

		if((Ballx[i] > Paddle2x && Ballx[i] < Paddle2x + PaddleLength )&& (Bally[i] > Paddle2y && Bally[i] < Paddle2y + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

		}

		

		if(PaddleHeight/2 < Bally[i] && h - PaddleHeight/2 > Bally[i]){

			autoH = Bally[i] - PaddleHeight/2;  

			Paddle2y = autoH;

			Paddley = autoH;

		}

		

		

		if (Bally[i] < 0 || Bally[i] > h - 10) bDy[i] = bDy[i] * (-1);

		

		if (Ballx[i] < 0){

			Ballx[i] = w/2;

			Bally[i] = h/2;

			score2++

		}

		

		Ballx[i] += bDx[i];

		Bally[i] += bDy[i];

		

		ctx.globalAlpha = 0.4;	

		

		ctx.fillStyle= "red";

		ctx.fillRect( w/2 - 100,  h-103, 360, 35);

		

		ctx.fillStyle= "red";

		ctx.fillRect( w/2 - 320, h-450, 130, 35);

	

		ctx.fillStyle= "red";

		ctx.fillRect( w/2 - 100, h-45.5, 360, 35);

		

		ctx.globalAlpha = 1;	

		

		ctx.font="12px Comic sans MS";

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "black";}

		

		ctx.fillText ( " single person", w/2 - 80, h-88 );

		ctx.font="8px Times New Roman";

		

		ctx.fillText ( "With wall", w/2 - 78, h-76 ); 

		ctx.fillText("("+ mx+","+Math.floor(my) + ")", 280, 365);

	

	

		ctx.font="12px Comic sans MS";

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "black";}

		

		ctx.fillText ( " Dual Players", w/2 - 80, h-28 );// le 2 playera

		ctx.font="8px Comic sans MS MS";

		

		ctx.fillText ( " 2 persons", w/2 - 78, h-16 ); 

		ctx.fillText("("+ mx+","+Math.floor(my) + ")", 280, 365);




		ctx.font="27px Comic sans MS MS";

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#00FF00";}

		ctx.fillText ( "Pong 3.0!", 300 , 30 );

	

	    ctx.font="12px Comic sans MS MS";

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#FF00FF";}

		

		ctx.fillText ( "Options", w/2 - 300, h-430);

		ctx.font="8px Comic sans MS MS";

		ctx.fillText("("+ mx+","+Math.floor(my) + ")", 280, 365);

		}




  /////////////////////////////////////////////	 

 /// Options ///// Everyone needs Options ////

/////////////////////////////////////////////




}else if (scren == 3){

	 

	 




ctx.fillRect(0,0,w,h);

ctx.fillStyle = "#FFFFFF";

	ctx.fillRect(0,0,w,h);

	randcol = "#"+Math.floor(Math.random()*16777215).toString(16);

	

	

	//BACK BUTTON




 		ctx.font="12px Comic sans MS MS";

		if(Seizure == true){

		ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "black";}

		ctx.fillText ( "<-Back", w/2 - 325, h-30);

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 400, h-50, 85, 35);

	ctx.globalAlpha = 1;	




	

	

/////////////

////////////

//FIRE BALL

//\\\\\\\\\\

//\\\\\\\\\\




		ctx.font="25px Comic sans MS";

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "red";};

		ctx.fillText ( "Flaming Ball", w/2 - 80, h-390 );

	

	////

	//On

	////

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 80, h-369, 75, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 80, h-369, 75, 35);

	ctx.globalAlpha = 1;	

	

	

	////

	//Off

	////

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 11, h-369, 75, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 11, h-369, 75, 35);

	ctx.globalAlpha = 1;

	

	




	ctx.font="20px Comic sans MS";	

	if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#000000";};

		ctx.fillText ( " On", w/2 - 70, h-343 ); 




	ctx.font="20px Comic sans MS";	

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#000000";};

	ctx.fillText ( " Off", w/2 + 10, h-343 );







/////////////

////////////

//SEIZURE

//\\\\\\\\\\

//\\\\\\\\\\	

	

	ctx.font="25px Comic sans MS";

	   if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "red";};

		ctx.fillText ( "Seizure", w/2 - 80, h-285 );

	

	

	/////

	//On

	/////

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 80, h-270, 75, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 80, h-270, 75, 35);

	ctx.globalAlpha = 1;

	

	

	//////	

	//Off

	/////

	

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 11, h-270, 75, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 11, h-270, 75, 35);

	ctx.globalAlpha = 1;

	

	ctx.font="20px Comic sans MS";	

		ctx.fillStyle=randcol

		ctx.fillText ( " On", w/2 - 70, h-243 ); 

		ctx.fillStyle="black"	

	

	ctx.font="20px Comic sans MS";	

		ctx.fillStyle=randcol

		ctx.fillText ( " Off", w/2 + 10, h-243 );

	




	

/////////////////

////////////////

//PADDLE LENGHT

//\\\\\\\\\\\\\\

//\\\\\\\\\\\\\\\

	

	

		ctx.font="25px Comic sans MS";

	   if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "red";};

		ctx.fillText ( "Paddle Length", w/2 - 135, h-160 );

	

	/////

	//+

	/////

	

		

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 25, h-138, 143, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 + 25, h-138, 143, 35);

	ctx.globalAlpha = 1;

	

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 142, h-138, 143, 35);

	ctx.globalAlpha = 1;

	

	ctx.globalAlpha = 0.5;

	ctx.fillStyle = 'red';

	ctx.fillRect( w/2 - 142, h-138, 143, 35);

	ctx.globalAlpha = 1;







		ctx.globalAlpha = 1;

		ctx.font="18px Comic sans MS";	

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#000000";}

		ctx.fillText ( " Longer", w/2 - 135, h-115 ); 

		

		ctx.font="18px Comic sans MS";	

		if(Seizure == true){

			ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#000000";};

		ctx.fillText ( " Shorter", w/2 + 25, h-115 ); 




//////////

//Per 1

/////////




}else if (scren == 1) {




 		

		ctx.font="12px Comic sans MS";

		if(Seizure == true){

		ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "#66FF00";}

		ctx.fillText ( " Back", w/2 - 80, h-28 );// that sounds a bit wrong

	 //Math

	  randcol = "#"+Math.floor(Math.random()*16777215).toString(16);

	  ctx.fillText("("+ mx+","+Math.floor(my) + ")", 40, 30); 

  

	 //Decoration

	    ctx.fillStyle= '#FFFFFF';

	    

		ctx.fillRect(0,0,w,h);

		

		ctx.drawImage(picture, 0,0,w,h);

		

		if(Seizure == true){

		ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "red";}

		

	ctx.globalAlpha = 1;

	ctx.fillText(Ballx[0] + " " + Ballx[1], 100,100);

		for(var i = 0; i < Ballx.length; i++){

			

		ctx.fillRect(Ballx[i],Bally[i],10,10);

		if(FireBall == true){

			ctx.globalAlpha = 0.5;

		}else{ctx.globalAlpha = 0}







		for(var j=0; j < 6;j++){

		

			ctx.fillRect(Ballx[i] - j*bDx[i] + Math.floor(Math.random()*6), Bally[i] - j*bDy[i] + Math.floor(Math.random()*6), 10-j,10-j);	

		}

		ctx.globalAlpha=1;

		ctx.fillRect(Paddlex,Paddley, PaddleLength, PaddleHeight);

		//ctx.fillRect(Paddle2x,Paddle2y, PaddleLength, PaddleHeight);

		 

		

		ctx.font = "31px Arial";

		ctx.fillText(score1, w/4 + 5, 50);

		ctx.fillText(score2, w*3/4 - 5, 50);

		

	/////////////////////////

		////The Cool Stuff

	////////////////////////	

		ctx.drawImage(picture2, 190,130,w/2,h/2);

		

		if((Ballx[i] > Paddlex && Ballx[i] < Paddlex + PaddleLength )&& (Bally[i] > Paddley && Bally[i] < Paddley + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

		

			

		}

		

		if((Ballx < Paddle2x && Ballx > Paddle2x + PaddleLength )&& (Bally < Paddle2y && Bally > Paddle2y + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

			autoH = Bally[i] - PaddleHeight/2;  

			Paddle2y = autoH;

			Paddley = autoH;




		}

		

		

		

		if (Bally[i] < 10 || Bally[i] > h - 10) bDy[i] = bDy[i] * (-1);




		if (Ballx[i] < 10 || Ballx[i] > w - 10) bDx[i]= bDx[i] * (-1);

	

		/*if (Ballx < 0){

		Ballx = w/2;

		Bally = h/2;

		score2++

}

		if(Ballx > w) {

		Ballx = w/2;

		Bally = h/2;

		score1++;

		}

	*/

		Ballx[i] += bDx[i];

		Bally[i] += bDy[i];




	
 









		}//end for loop




//////////	 

//Per 2

//////////	 

	 

}else if(scren == 2){

	 

	 

	 //Math

	  randcol = "#"+Math.floor(Math.random()*16777215).toString(16);

	  ctx.fillText("("+ mx+","+Math.floor(my) + ")", 40, 30); 

	   

	 //Decoration

	    ctx.fillStyle= 'pink';

	    

		ctx.fillRect(0,0,w,h);

		

		ctx.drawImage(picture, 0,0,w,h);

		

		if(Seizure == true){

		ctx.fillStyle=randcol;

		}else{ctx.fillStyle= "red";}

		

		for(var i = 0; i < Ballx.length; i++){

		ctx.fillRect(Ballx[i],Bally[i],10,10);

		if(FireBall == true){

			ctx.globalAlpha = 1;

			for(var j=0; j < 6;j++){

			ctx.fillRect(Ballx[i] - j*bDx[i] + Math.floor(Math.random()*6), Bally[i] - j*bDy[i] + Math.floor(Math.random()*6), 10-j,10-j);	




		}

		

		}else{ctx.globalAlpha = 1}

		

		ctx.fillRect(Paddlex,Paddley, PaddleLength, PaddleHeight);

		ctx.fillRect(Paddle2x,Paddle2y,PaddleLength, PaddleHeight);

		 

		

		ctx.font = "31px Arial";

		ctx.fillText(score1, w/4 + 5, 50);

		ctx.fillText(score2, w*3/4 - 5, 50);

		

	

		

		

		if((Ballx[i] > Paddlex && Ballx[i] < Paddlex + PaddleLength )&& (Bally[i] > Paddley && Bally[i] < Paddley + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

		 

			

		}

		

		if((Ballx[i] > Paddle2x && Ballx[i] < Paddle2x + PaddleLength )&& (Bally[i] > Paddle2y && Bally[i] < Paddle2y + PaddleHeight)){

			bDx[i] = bDx[i] * (-1);	

			autoH = Bally[i] - PaddleHeight/2;  

			Paddle2y = autoH;

			Paddley = autoH;

		

		}

	

		

		

		if (Bally[i] < 0 || Bally[i] > h - 10) bDy[i] = bDy[i] * (-1);

		

		if (Ballx[i] < 0){

			Ballx[i] = w/2;

			Bally[i] = h/2;

			score2++

		}

		if(Ballx[i] > w) {

			Ballx[i] = w/2;

			Bally[i] = h/2;

			score1++;

		}

			

	

		Ballx[i] += bDx[i];

		Bally[i] += bDy[i];

	

	} 

	}

	}

		

		////////////////////////////////////

	/////	END PAINT GAME ENGINE  ///////////////////

		////////////////////////////////////

	

	

	

	////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////

	/////	MOUSE LISTENER 

	//////////////////////////////////////////////////////

	/////////////////////////////////////////////////////

	










//////////////////////

	   /////////////////

///	// Mouse Click

	   ///////////////

//////////////////	

	canvas.addEventListener('click', function (evt){

		

		if(mx > w/2 - 330 && mx <  w/2 - 245 && my > h-50 && my < h-15) { 		

		scren = 0;

		}

		

		if (mx > w/2-70 && mx < w/2+240 && my > h-103 && my < h-68) { 

			scren=1;

		}

		//Property of Rishav 


		if (mx > w/2 - 65 && mx < w/2 + 255 && my > h-45.5 && my < h-10.5) { 

			scren=2;

		}									   

		

		if (mx > 30 && mx < 170 && my > 30 && my < 65) { 

			scren=3;

		}				

	/////////

	//Seizure

	/////////	

		

		/*on*/if(mx > w/2 - 80 && mx < w/2 - 5 && my > h-270 && my < h-235) { 

		Seizure= true;

		//alert("clicked on");

		}

		

		/*off*/if(mx > w/2 + 11 && mx <  w/2 + 86 && my > h-270 && my < h-235) { 		

		Seizure= false;

		//alert("clicked off");

		}

 	

	// on w/2 - 80, h-270, 75, 35


	//off  w/2 + 11, h-270, 75, 35

	

	///////////

	//Fire ball

	///////////	

	

	/*on*/if(mx > w/2 - 80 && mx < w/2 - 5 && my > h-369 && my < h-334) { 

		FireBall = true;

		//alert("clicked on");

		}

		/*off*/if(mx > w/2 + 11 && mx <  w/2 + 86 && my > h-369 && my < h-334) { 		

		FireBall = false;

		//alert("clicked off" + FireBall);

		}

	

	// on w/2 - 80, h-369, 75, 35

	// of w/2 + 11, h-369, 75, 35

	

	

	//////////////

	//Paddle Lenght

	//////////////	

	

	//back w/2 - 330, h-50, 85, 35 

		

/*	if (mx >  && mx < 170 && my > 30 && my < 65) { 

			scren=3;

		}				

	

	if (mx > 30 && mx < 170 && my > 30 && my < 65) { 

			scren=3;

		}*/

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




		//right = 39

		//left = 37

		//up = 38

		//down = 40

		

		//w= 87

		//s= 83

		//a=65

		//d=68

		//Malert(key);

		

		

	//Paddle One keys: up & down keys

		if (key == 38){ Paddley -=5;}

		else if (key == 40){ Paddley +=5;}

		/*
		else if (key == 39){Paddlex +=5;}

		else if (key == 37){ Paddlex -=5;}
		*/
	

	//Paddle Two keys: w & s keys

	 	if (key == 87){Paddle2y -=5;}

		else if (key == 83){ Paddle2y +=5;}

		/*
		else if (key == 65){ Paddle2x -=5;}

		else if (key == 68){ Paddle2x +=5;}
		*/
	

	}, false);
						   })

	

