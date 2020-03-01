function start(){
	move();
	
	if(frontIsClear()){
		move();	
	}
}

/*

You can try commenting in this start function to see what happened before. If we try to move twice here, then karel will crash into a wall.

function start(){
	move();
	move();
}
*/