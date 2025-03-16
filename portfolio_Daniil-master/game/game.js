let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d")

function resizeCanvas() {
    canvas.width = Math.min(800, window.innerWidth * 0.9);
    canvas.height = Math.min(500, window.innerHeight * 0.7);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const paddleHeight = 10, ballRadius = 8;
let paddleWidth = canvas.width * 0.2;

let paddleX = (canvas.width - paddleWidth)/2;
let ballX = canvas.width/2;
let ballY = canvas.height/2;

let ballSpeedX = 10;
let ballSpeedY = -10;

let rightPressed = false, leftPressed = false;

function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,Math.PI*2);
    ctx.fillstyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.fillstyle = "black";
    ctx.fillRect(paddleX,
        canvas.height-paddleHeight-10,
        paddleWidth,
         paddleHeight);
}

canvas.addEventListener("touchmove", (e)=>{
    let touchX = e.touches[0].clientX;
    paddleX = touchX -paddleWidth/2;
})

document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

function keyDownHandler(e){
    if (e.key === "ArrowRight") rightPressed = true;
    else if (e.key === "ArrowLeft") leftPressed = true;
}

function keyUpHandler(e){
    if (e.key === "ArrowRight") rightPressed = false;
    else if (e.key === "ArrowLeft") leftPressed = false;
}



function draw(){
    ctx.clearRect(0, 0,canvas.width,canvas.height);

    drawPaddle();
    drawBall();

    if (rightPressed && paddleX < canvas.width-paddleWidth) paddleX += 10;

    if (leftPressed && paddleX>0) paddleX -= 10;

    ballX+=ballSpeedX;
    ballY+=ballSpeedY;

    if (ballX+ballRadius > canvas.width || ballX-ballRadius<0 )  ballSpeedX = -ballSpeedX

    if (ballY-ballRadius<0) ballSpeedY = -ballSpeedY

    if (ballY+ballRadius>canvas.height-paddleHeight-10 && ballX>paddleX && ballX<paddleX+paddleWidth) ballSpeedY = -ballSpeedY

    if (ballY - ballRadius > canvas.height){
        setTimeout(()=>{
            alert("Вы проиграли, Начните заново")
            location.reload();

        }, 100)

        return;
    }

    //alert("Вы проиграли, Начните заново")
    //document.location.reload();


    animation = requestAnimationFrame(draw);
}
function RestartGame(){
let paddleX = (canvas.width - paddleWidth)/2;
let ballX = canvas.width/2;
let ballY = canvas.height/2;
let ballSpeedX = 4;
let ballSpeedY = -4;
draw();
}

draw();