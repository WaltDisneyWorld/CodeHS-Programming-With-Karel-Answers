function start(){
	move();
	putBall();
	turnLeft();
	move();
	putBall();
	move();
	putBall();
	move();
	turnRight();
}

function turnRight(){
	turnLeft();
	turnLeft();
	turnLeft();
}