function start() 
{
    if(frontIsClear())
    {
        while(frontIsClear())
        {
            buildTower();
            move();
            if(frontIsClear())
            {
                move();
                if(frontIsBlocked())
                {
                    buildTower();
                }
            }
        }
    }
    else
    {
        buildTower();
    }
    
}


function buildTower() //Totally not building a tower
{
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