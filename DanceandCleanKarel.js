/* This program has karel move across first street, and 
 * if he encounters a stack of tennis balls, he picks them
 * all up, and then spins around. This is the code we
 * ended up with in the video, but if you take a close
 * look, you will see that there is a repeated section 
 * of code. Could you make that its own function? */
function start(){
	while(frontIsClear()){
		if(ballsPresent()){
			while(ballsPresent()){
				takeBall();		
			}
			dance();
		}
		
		move();
	}
	
	if(ballsPresent()){
		while(ballsPresent()){
			takeBall();		
		}
		dance();
	}
}

/* This function has karel dance, or spin around
 * by turning left four times. */
function dance(){
	for(var i = 0; i < 4; i++){
		turnLeft();
	}
}