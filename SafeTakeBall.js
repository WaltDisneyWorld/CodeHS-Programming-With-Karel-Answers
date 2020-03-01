function start(){
	safeTakeBall();
	move();
	safeTakeBall();
}

function safeTakeBall(){
	if(ballsPresent()){
		takeBall();
	}
}