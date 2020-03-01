function start() 
{
    goUp();
    goDown();
}

function goUp() //Going up
{
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    turnRight();
    move();
    takeBall(); 
}

function goDown() //Going down
{
    turnLeft();
    turnLeft();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    turnLeft();
    putBall();    
}