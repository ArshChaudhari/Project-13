var garden,rabbit;
var gardenImg,rabbitImg;

var apple, appleImg;
var orangeleaves, orangeleavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  orangeleavesImg = loadImage("orangeleaf.png");
}

function setup(){
  createCanvas(400,400);
  
//Background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating Rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  var Select = Math.round(random(10,11))

if(Select == 10){
  spawnApples();
}

if(Select == 11){
  spawnLeaves();
}

drawSprites();
}

function spawnApples(){

 if(frameCount % 80 == 0) {
  apple = createSprite(random(50,350),30,10,10);
  apple.scale=0.07;

  apple.addImage("Apples",appleImg);
  apple.velocityY=3;
 }
}

function spawnLeaves(){

 if(frameCount % 80 == 0) {
  orangeleaves = createSprite(random(50,350),30,10,10);
  orangeleaves.scale=0.07;

  orangeleaves.addImage("Leaves",orangeleavesImg);
  orangeleaves.velocityY=2.5;
 }
}
