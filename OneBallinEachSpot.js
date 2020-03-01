function start(){
	checkBall();
	move();
	checkBall();
	move();
	checkBall();
	move();
	checkBall();
}

function checkBall(){
	if(noBallsPresent()){
		putBall();
	}
}