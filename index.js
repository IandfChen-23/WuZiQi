var chess = document.getElementById('myCanvas');
var context = chess.getContext('2d');
var chessBoard=[[]];//棋盘是一个二维矩阵
for(let i=0;i<15;i++){
    chessBoard[i]=[];
    for(let j=0;j<15;j++){
        chessBoard[i][j]=0;
    }
}
window.onload = function () {
    drawBoard();
    var me = true;
    chess.onclick = function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        let i = Math.floor(x / 30);
        let j = Math.floor(y / 30);
        if(chessBoard[i][j]==0){//避免重复落子
            oneStep(i, j, me);
            chessBoard[i][j]=1;
        }
        me = !me;
    }
}
function drawBoard() {
    for (var i = 0; i < 15; i++) {
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}
function oneStep(i, j, me) {
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 15, 0, 2 * Math.PI);
    var grd = context.createRadialGradient(15 + i * 30, 15 + j * 30, 0, 15 + i * 30, 15 + j * 30, 15);
    if (me) {
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "black");
    } else {
        grd.addColorStop(0, "#ccc");
        grd.addColorStop(1, "white");
    }
    context.fillStyle = grd;
    context.fill();
    context.closePath();
}



