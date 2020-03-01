/* This program creates a staircase from the first spot all the
 * way across the world for any sized world.
 *
 * This program works, but its indentation is completely wrong.
 * 
 * Run the program first, so you know what it does and don't break it.
 */
function start(){
    putBall();
    while(frontIsClear()){
        turnLeft();
        while (ballsPresent()) {
            move();
        }
    
        turnRight();
        move();
        createStep();
    }
}

function createStep() {
    turnRight();
    putBall();
    while (frontIsClear()) {
        move();
        putBall();
    }
    turnLeft();
}