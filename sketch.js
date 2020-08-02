//variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var right, left, bottom;
//Matter.js Nicknames
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
// creates package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
// creates helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
// creates ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 // create red box
	 right = new Box(300, 600, 20, 100);
	 bottom = new Box(390, 650, 200, 20);
	 left = new Box(480, 600, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  right.display();
  bottom.display();
  left.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
 }else if (keyCode === LEFT_ARROW){
	 helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20, y:0};
	 Matter.Body.translate(packageBody, translation);
 } else if (keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	 translation={x:20, y:0};
	 Matter.Body.translate(packageBody, translation);
 }
}