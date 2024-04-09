let xRaquete = 10;
let xalturaRaquete = 150;
let xGrossura = 10;
let xLargura = 100;
let yRaquete = 580;
let yalturaRaquete = 150;
let yGrossura = 10;
let yLargura = 100;

let xBolinha = 300;
let yBolinha = 200;

let vxBolinha = 5;
let vyBolinha = 5;

let diametro = 30;
let raio = diametro / 2;

function setup() {
    createCanvas(600, 400);
}

function draw() {
background(0);
circle(xBolinha, yBolinha, diametro);
moveRaquete();

rect (xRaquete, xalturaRaquete, xGrossura, xLargura)
rect (yRaquete, yalturaRaquete, yGrossura, yLargura)

xBolinha += vxBolinha;
yBolinha += vyBolinha;

if (xBolinha + raio > width || xBolinha - raio < 0) {
vxBolinha *= -1;

}

if (yBolinha + raio > height || yBolinha - raio < 0) {
    vyBolinha *= -1;

}
function moveRaquete() {

  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }

}

}

