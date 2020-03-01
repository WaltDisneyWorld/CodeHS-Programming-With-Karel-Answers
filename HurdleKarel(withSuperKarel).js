/*
 * This program has karel jump over two
 * hurdles and then move all of the way
 * to the edge of the world.
 */
function start(){
	// Karel jumps two hurdles in this
	// program.
	runToHurdle();
	jumpHurdle();
	runToHurdle();
	jumpHurdle();
	runToFinish();
}

/*
* Precondition: Karel has just jumped the
* last hurdle, and is facing east.
* Postcondition: Karel is all of the way
* at the end of the world.
*/
function runToFinish(){
	move();
	move();
	move();
	move();
}

/*
* Precondition: Karel is facing east, three
* spots away from a hurdle.
* Postcondition: Karel is standing right in * front of a hurdle.
*/
function runToHurdle(){
	move();
	move();
	move();
}

/* 
 * This function has karel jump over a 
 * hurdle that is one row high.
* Precondition: Karel is standing in front 
* of a hurdle, facing east.
* Postcondition: Karel has just jumped over 
* a hurdle, and is facing east.
*/
function jumpHurdle(){
	turnLeft();
	move();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}