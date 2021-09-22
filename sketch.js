const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ground;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1,log2,log3,log4;
var bird;
var  bgImg;

function preload() {
  bgImg = loadImage("sprite/bg.png")
}



function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  ground = new Ground(600,390,1200,20);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,150,300,PI/2);

  box5 = new Box(810,120,70,70);
  log3 = new Log(755,120,150,PI/7);
  log4 = new Log(870,120,130,-PI/7);

  bird = new Bird(100,100);

}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();

}