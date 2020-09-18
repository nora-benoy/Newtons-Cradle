
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof(width/2,height/3,width/2,20);

  bob1 = new Bob(270,450,5);
  bob2 = new Bob(320,450,5);
  bob3 = new Bob(370,450,5);
  bob4 = new Bob(420,450,5);
  bob5 = new Bob(470,450,5);
  
  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{width:1200, height:700, wireframes:false}	
    })

  rope1 = new Rope(bob1.body,roof.body,-100,8);
  rope2 = new Rope(bob2.body,roof.body,-50,8);
  rope3 = new Rope(bob3.body,roof.body,0,8);
  rope4 = new Rope(bob4.body,roof.body,50,8);
  rope5 = new Rope(bob5.body,roof.body,100,8);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  
  background(75);
  
  roof.display();
    
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  keyPressed();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});   
  }
}

function drawLine(constraint){
bob1.body.position=constraint.bodyA.position;
roof.position=constraint.bodyB.position;

roof.offset=constraint.pointB;
	
roof.x=roof.position.x+roof.offset.x;
roof.y=roof.position.y+roof.offset.y;

line(bob1.body.position.x, bob1.body.position.y, roof.x,roof.y);
}