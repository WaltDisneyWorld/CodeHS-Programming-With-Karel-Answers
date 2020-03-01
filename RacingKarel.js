function start() //Thanks, Captain Obvious
{
    for(var i = 0; i < 8; i++)
    {
        runLap();
    }
}

function run() //Running in a single line
{
    while(frontIsClear())
    {
        move();
    }
    putBall();
    turnLeft();
}

function runLap() //Running a lap
{
    run();
    run();
    run();
    run();
}