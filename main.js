// Triangle Heart Asgn Solution

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", filltriangle);



function filltriangle(ax, ay, bx, by, cx, cy, color) {

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.lineTo(cx, cy);
  ctx.fill();
}
filltriangle(200, 200, 300, 200, 300, 100, "yellow")
filltriangle(100, 200, 200, 200, 200, 100, "yellow")
filltriangle(100, 100, 100, 200, 0, 100, "red")
filltriangle(400, 100, 300, 0, 300, 100, "red")
filltriangle(200, 100, 100, 0, 100, 100, "pink")
filltriangle(0, 200, 100, 200, 0, 100, "pink")
filltriangle(0, 100, 100, 0,100, 100, "gray")
filltriangle(200, 100,300, 0,300, 100, "gray")
filltriangle(100, 100,100, 200,200, 100, "gray")
filltriangle(300, 100,300, 200,400, 200, "gray")
filltriangle(200, 100,200, 200,300, 100, "red")
filltriangle(100, 200,100, 300,200, 200, "gray")
filltriangle(100, 300,200, 300,200, 200, "red")
filltriangle(200, 300,300, 300,200, 200, "yellow")
filltriangle(200, 300,200, 400,300, 300, "gray")
filltriangle(100, 300,200, 400,200, 300, "pink")
filltriangle(200, 200,300, 300,300, 200, "pink")
filltriangle(300, 200,300, 300,400, 200, "red")
filltriangle(0, 200,100, 300,100, 200, "yellow")
filltriangle(300, 100,400, 200,400, 100, "pink")
