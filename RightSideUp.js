function start()
{
	south();
	west();
}

function south()
{
    if(facingSouth())
    {
        turnRight();
    }
}

function west()
{
    if(facingWest())
    {
        turnLeft();
        turnLeft();
    }
}