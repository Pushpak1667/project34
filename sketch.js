const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg,ground;
var hero;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

  	engine = Engine.create();
	world = engine.world;
  
ground = new Ground(windowWidth/2,windowHeight - 40,width,25);

block1 = new Block(500,100);
// block2 = new Block(500,160);
// block3 = new Block(500,220);
// block4 = new Block(500,280);
// block5 = new Block(500,340);
// block6 = new Block(500,420);

// block7 = new Block(920,200);
// block8 = new Block(980,200);
// block9 = new Block(1040,200);

// block10 = new Block(890,150);
// block11 = new Block(950,150);
// block12 = new Block(1010,150);
// block13 = new Block(920,100);
// block14 = new Block(980,100);
// block15 = new Block(950,50);

}

function draw() {
  background(bg);

  ground.display();
  block1.display();
// block2.display();
// block3.display();
// block4.display();
// block5.display();
// block6.display();

}

