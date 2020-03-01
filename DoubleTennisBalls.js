//Have 5 functions 1 start

function start(){
    move();
    putTwoBalls();
    moveBack();
}

function putTwoBalls(){
    while(ballsPresent()){
        takeBall();
        putTwoMoreBallsNextAve();
    }
    moveBallsNextDoorBack();
}

function putTwoMoreBallsNextAve(){
    move();
    putBall();
    putBall();
    moveBack();
}

function moveBallsNextDoorBack(){
    move();
    while(ballsPresent()){
        moveOneBallBack();
    }
    moveBack();
}

function moveOneBallBack(){
    takeBall();
    moveBack();
    putBall();
    move();
}

function moveBack(){
    turnAround();
    move();
    turnAround();
}