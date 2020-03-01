/* This program draws a big tower from Karel's starting spot */
function start()
{
    faceNorth();
	placeBalls();
}

function placeBalls()
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

function faceNorth()
{
    while(notFacingNorth())
	{
	    turnLeft();
	}
}