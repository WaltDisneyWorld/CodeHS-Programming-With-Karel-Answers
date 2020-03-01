function start() 
{
    if(ballsPresent())	
    {
        takeBall();
    }
    
    if(noBallsPresent())
    {
        putBall();
    }
    move();
}