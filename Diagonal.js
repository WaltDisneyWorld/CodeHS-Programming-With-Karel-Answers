/* This program has karel lay a diagonal row of tennis balls. 
 * However, the indenting is all wrong. Can you properly 
 * indent this program? */
function start(){
    while(frontIsClear()){
        putBall();
        move();
        turnLeft();
        move();
        for(var i = 0; i < 3; i++){
            turnLeft();
        }
    }
    putBall();
}