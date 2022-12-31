const canvas= document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20,40,50,50);
// ctx.fillStyle ="#ff0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();
// ctx.closePath();

let ballX = 0;
let ballY = 0;

let dx = 2;
let dy = 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ballX += dx;
    ballY += dy;
    if(ballX<0||ballX>canvas.width){
        dx= -dx;
    }
    if(ballY<0 || ballY>=barY+10 && (ballX>=barX &&ballX <=barX+barWidth)){
        dy= -dy;
    }
    if(ballY > canvas.height) {
        // alert("GAME OVER!")
        // document.location.reload();
        ballY=0;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    drawBall();
    drawBar();
}

const barHeight = 10;
const barWidth =75;
let barX = 0;
let barY = canvas.height-barHeight;

function drawBar() {
    if(rightPressed && barX+barWidth < canvas.width) {
        barX += 2;
    }
    if(leftPressed && barX > 0) {
        barX -= 2;
    }
    ctx.beginPath();
    ctx.rect(barX,barY,barWidth, barHeight);
    ctx.fillStyle="#000000";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);
let leftPressed = false;
let rightPressed = false;
function keydownHandler(e) {
    console.log(e);
    if(e.keyCode == 39){
        rightPressed = true;
    } else if(e.keyCode == 37){
        leftPressed = true;
    }
}
function keyupHandler(e){
    if(e.keyCode==39){
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);