function start() 
{
	cleanRows();
}

function cleanRows()
{
    while(frontIsClear())
    {
        if(ballsPresent())
        {
            takeBall();
        }
        move(); //Proceed
    }
    
    if(facingEast())
    {
        turn1();
    }
    
    if(facingWest())
    {
        turn2();
    }
}

function turn1()
{
    turnLeft();
    if(ballsPresent())
    {
        takeBall();
    }
    if(frontIsClear())
    {
        move();
        if(ballsPresent())
        {
            takeBall();
        }
        turnLeft();
    }
    cleanRows();
}

function turn2()
{
    turnRight();
    if(ballsPresent())
    {
        takeBall();
    }
    if(frontIsClear())
    {
        move();
        if(ballsPresent())
        {
            takeBall();
        }
        turnLeft();
        turnLeft();
        turnLeft();
    }
    cleanRows();
}