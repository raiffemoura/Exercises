let tela = document.getElementById("tela");


let ctx = tela.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineTo(500, 500);
ctx.lineTo(0, 500);
ctx.lineTo(0, 0);
ctx.moveTo(20, 40)
ctx.lineTo(250, 270);
ctx.lineTo(480, 40);
ctx.lineTo(480, 40);
ctx.lineTo(480, 500);
ctx.moveTo(20, 40)
ctx.lineTo(20, 500)
ctx.lineTo(20, 480);
ctx.lineTo(480, 480);
ctx.lineWidth = 5;
ctx.stroke();

// <---------------------------------------------------------------->
// <---------------------------------------------------------------->


let tela2 = document.getElementById("tela2")
let ctx2 = tela2.getContext("2d")

ctx2.fillStyle = "blue";
ctx2.fillRect(10, 10, 100, 210);

ctx2.strokeStyle = "red";
ctx2.strokeRect(120, 10, 100, 210);

ctx2.rect(230, 10, 100, 210);
ctx2.lineWidth = 5
ctx2.fillStyle = "blue";
ctx2.fill();
ctx2.strokeStyle = "red";
ctx2.stroke();
ctx2.clearRect(240, 20, 30, 30);

ctx2.beginPath();
ctx2.lineWidth = 3
ctx2.strokeStyle = "red";
ctx2.moveTo(10, 230);
ctx2.lineTo(10, 330);
ctx2.lineTo(110, 330);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(120, 230);
ctx2.lineTo(120, 330);
ctx2.lineTo(220, 330);
ctx2.closePath();
ctx2.stroke();
ctx2.lineWidth = 3;

ctx2.beginPath();
ctx2.moveTo(230, 230);
ctx2.lineTo(230, 330);
ctx2.lineTo(330, 330);
ctx2.fillStyle = "blue"
ctx2.closePath();
ctx2.fill();
ctx2.stroke();



// <---------------------------------------------------------------->
// <---------------------------------------------------------------->


let tela3 = document.getElementById("tela3")
let ctx3 = tela3.getContext("2d")

ctx3.beginPath();


ctx3.strokeStyle = "red";
//ctx3.arc(x,y, raio, inicio, fim);
let x = 120; // O inicio do arco começa na extrema direita seintdo para baixo
let y = 120;
let raio = 100; // raio do arco
let inicio = 0; // inicio do arco em radianos (radianos e uma unidade de medida de angulos)
let fim = 2 * Math.PI; //  Um arco completo tem 2 PI radiano


ctx3.arc(x, y, raio, inicio, fim);
ctx3.stroke();

ctx3.beginPath()
x = 340;
y = 120;
raio = 100;
inicio = 0;
fim = 2 * Math.PI;
ctx3.arc(x, y, raio, inicio, fim)
ctx3.fillStyle = "blue";
ctx3.fill();
ctx3.lineWidth = 2;
ctx3.stroke();



// <---------------------------------------------------------------->
// <---------------------------------------------------------------->


let tela4 = document.getElementById("tela4")
let ctx4 = tela4.getContext("2d")


let circle = {
    x:120,
    y:120,
    raio:100,
    inicio:0,
    fim: 0,
    antiHor: true,
}




function drawCircle(c) {
    ctx4.beginPath();
    ctx4.rect(0,0,500,500)
    ctx4.fillStyle = "beige"
    ctx4.fill()

    ctx4.beginPath();
    ctx4.strokeStyle = "red";
    ctx4.lineWidth = 1;
    ctx4.fillStyle = "blue";
    ctx4.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx4.fill();
    ctx4.stroke();

}


setInterval (function(){

    if(circle.fim < 2* Math.PI){
        circle.fim += 0.012;
        circle.x += 0.5;
    }

    drawCircle(circle);
},0.5)



// <---------------------------------------------------------------->
// <---------------------------------------------------------------->


let tela5 = document.getElementById("tela5")
let ctx5 = tela5.getContext("2d")


let circle2 = {
    x:120,
    y:120,
    raio:100,
    inicio:0,
    fim: 0,
    antiHor: true,
}



function drawCircle2(c) {
    ctx5.beginPath();
    ctx5.rect(0,0,500,500)
    ctx5.fillStyle = "beige"
    ctx5.fill()

    ctx5.beginPath();
    ctx5.strokeStyle = "red";
    ctx5.lineWidth = 1;
    ctx5.fillStyle = "blue";
    ctx5.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);

    ctx5.fill();
    ctx5.stroke();

}


setInterval (function(){

    if(circle2.fim <= 2* Math.PI){
        circle2.fim += 0.012;
        circle2.x += 0.5;
    }

    drawCircle2(circle2);
},0.5)





