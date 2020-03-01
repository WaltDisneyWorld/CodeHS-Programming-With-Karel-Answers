/* Karel needs to move the stack of balls
 * at (2,1) over one spot to the right. We
 * need to make it work for any number of
 * balls in the stack. */
function start(){
	move();
	while(ballsPresent()){
		moveOneBall();
	}
}

/* This function takes one ball from the
 * pile and moves it one spot to the right,
 * and then returns Karel to his previous
 * position. */
function moveOneBall(){
	takeBall();
	move();
	putBall();
	turnAround();
	move();
	turnAround();
}