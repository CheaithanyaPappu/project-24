
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground ()
boxPosition=width-300
	 boxY=610;
	 
paper = new Paper (50,50,20);	 


boxleftsprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftsprite.shapeColor=color(255,0,0);

 	boxleftbody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxleftbody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightsprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightsprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);
	 
	 	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  boxleftsprite.x = boxleftbody.position.x;
  boxleftsprite.y = boxleftbody.position.y;
  
  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
	
}

}
