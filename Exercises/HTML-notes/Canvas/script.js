let tela = document.getElementById("tela");


let ctx = tela.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(250,250);
ctx.lineTo(500,0);
ctx.lineTo(500,500);
ctx.lineTo(0,500);
ctx.lineTo(0,0);
ctx.moveTo(20,40)
ctx.lineTo(250, 270);
ctx.lineTo(480,40);
ctx.lineTo(480, 40);
ctx.lineTo(480, 500);
ctx.moveTo(20,40)
ctx.lineTo(20, 500)
ctx.lineTo(20,480);
ctx.lineTo(480,480);
ctx.lineWidth = 5;
ctx.stroke();




let tela2 = document.getElementById("tela2")
let ctx2 = tela2.getContext("2d")

ctx2.fillStyle ="blue";
ctx2.fillRect(10,10,100,200);

ctx2.strokeStyle = "red";
ctx2.strokeRect(120, 10, 100, 200 );

ctx2.rect(230, 10, 100, 200);
ctx2.lineWidth=5

ctx2.fillStyle = "blue";
ctx2.fill();
ctx2.strokeStyle = "red";
ctx2.stroke();
