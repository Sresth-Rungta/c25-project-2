
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper = new Paper(100,40)
 ground = new Ground(800,680,1600,40)
 dustbin1 = new Dustbin(1205,615,20,120)
 dustbin2 = new Dustbin(1300,665,170,20)
 dustbin3 = new Dustbin(1390,615,20,120)
 /*var render = Render.create({
    element: document.body,
  engine: engine,
options: { width: 1600,
height: 700, 
 wireframes: false } });
 //Engine.run(engine); Render.run(render)*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:-105})

  }
  if(keyCode==DOWN_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:105})

  }
  if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:-105})

  }
  if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-100, y:-105})

  }
  if(keyCode===32){
    Matter.Body.setPosition(paper.body,{x:100,y:600})
  }
  textSize(30)
  text("ok",120,100)
}


