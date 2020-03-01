function start()
{
    buildTower();
    buildTower2();
	// Write your code here
}

function buildTower()
{
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnLeft();
    turnLeft();
    move();
    move();
    turnLeft();
}


function buildTower2()
{
    move();
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
}
function turnRight()
{
    turnLeft();
    turnLeft();
    turnLeft();
}