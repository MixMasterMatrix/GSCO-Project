var car, wall
var speed, weight, crash

function setup() {
  createCanvas(1600,400);

    speed = random(55,90)
    weight = random(400,1500)
    
    wall = createSprite(1500,200,60,200);
    wall.shapeColor = color(80,80,80);
     
    car = createSprite(50,200,50,50);
    car.velocityX = speed;
    car.shapeColor = color(255);
    
}

function draw() {
  background("green");

  if(car.isTouching(wall)){
    car.velocityX = 0;
    crash = ((0.5*weight*speed*speed)/22500)
    
    if(crash > 180){
      car.shapeColor = color(255,0,0);
    }
    if(crash < 180 && crash > 100){
      car.shapeColor = color(230,230,0);
    }
    if(crash < 100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
