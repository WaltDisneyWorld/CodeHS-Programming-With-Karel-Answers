// This program has karel walk down the
// row and clean up all of the tennis balls 
// on the way.
function start(){
	while(frontIsClear()){
		if(ballsPresent()){
			takeBall();
		}
		move();
	}
	if(ballsPresent()){
		takeBall();
	}
}