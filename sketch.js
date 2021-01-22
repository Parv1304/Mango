
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy;
function preload()
{
	boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(550,400,500,500);
	ground=new Ground(400,650,800,10);
	stone=new Stone(100,350,50,50);
	mango1=new Mango(450,250,0.5,0.5);
	mango2=new Mango(550,250,0.5,0.5);
	mango3=new Mango(650,250,0.5,0.5);
	mango4=new Mango(500,300,0.5,0.5);
	mango5=new Mango(600,300,0.5,0.5);
	mango6=new Mango(700,300,0.5,0.5);
	mango7=new Mango(450,350,0.5,0.5);
	mango8=new Mango(550,350,0.5,0.5);
	mango9=new Mango(650,350,0.5,0.5);
	sling=new Slingshot(stone.body,{x:120,y:500});
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  sling.display();
  image(boy,100,425,150,300);
  if(isTouching(stone.body,mango1.body))
  {
	  Matter.Body.setStatic(mango1.body,false);
  }
  if(isTouching(stone.body,mango2.body))
  {
	  Matter.Body.setStatic(mango2.body,false);
  }
  if(isTouching(stone.body,mango3.body))
  {
	  Matter.Body.setStatic(mango3.body,false);
  }
  if(isTouching(stone.body,mango4.body))
  {
	  Matter.Body.setStatic(mango5.body,false);
  }
  if(isTouching(stone.body,mango6.body))
  {
	  Matter.Body.setStatic(mango6.body,false);
  }
  if(isTouching(stone.body,mango7.body))
  {
	  Matter.Body.setStatic(mango7.body,false);
  }
  if(isTouching(stone.body,mango8.body))
  {
	  Matter.Body.setStatic(mango8.body,false);
  }
  if(isTouching(stone.body,mango9.body))
  {
	  Matter.Body.setStatic(mango9.body,false);
  }
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    sling.fly();
}

function isTouching(obj1,obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2)
    {
       return true;
    }
   else 
   {
     return false;
   }
}

function keyPressed()
{
    if(keyCode===32)
    {
        sling.attach(stone.body);
    }
}