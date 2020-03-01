function start()
{
    while(noBallsPresent())
    {
        putBall();
        if(frontIsClear())
        {
            move();
        }
    }
}