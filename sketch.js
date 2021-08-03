var ship, ship_running;
var sea, seaimg;

function preload(){
  ship_running = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite (200,190,400,20);
  sea.scale = 0.5;
  sea.velocityX = -5;
  sea.addAnimation ("MovingSea",seaimg);

  ship = createSprite (140,220,40,40);
  ship.scale = 0.2;
  ship.addAnimation("MovingShip",ship_running);
}

function draw() {
  background("blue");

  if (sea.x < 0){
    sea.x = sea.width/2
  }

  drawSprites();
}