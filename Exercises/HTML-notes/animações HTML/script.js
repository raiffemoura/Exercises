var jogador = document.getElementById("jogador");

jogador.style.top = "30px";
jogador.style.left = "60px";

let xInicial =0;
let yIninical =0;

function moverJogadorPara(x, y){

    let posX = x + "px"
    let posY = y + "px"

    jogador.style.top = posX;
    jogador.style.left = posY;
}

setInterval(function(){

    moverJogadorPara(xInicial++, yIninical++)

}, 20)