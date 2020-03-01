/* Karel needs to find the open slot and
 * climb up 7 rows. We cannot depend on the 
 * number of columns. */
function start(){
	for(var i = 0; i < 7; i++){
		moveUp();	
	}
}

/* Karel will start at the left side of a
 * row, keep moving across the row until
 * there is an open spot, then go through
 * the slot, and return to the start of
 * the row. */
function moveUp(){
	while(leftIsBlocked()){
		move();
	}
	turnLeft();
	move();
	turnLeft();
	moveToWall();
	turnAround();
}

function moveToWall(){
	while(frontIsClear()){
		move();
	}
}