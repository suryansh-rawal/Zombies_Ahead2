const Engine = Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;
var engine,world;
var supplies,suppliesSprite,suppliesImg;
var chopper,chopperImg;
var ground,groundImg,groundSprite;
var startpg,startpgImg;
var startg;
var scene1,scene1Img;
var backSprite,backImg;
var peopleImg;
var people;
var helisound;
var zombiSound;
var piller1,pille2,piller3;
var piller1Sprite,pille2Sprite,piller3Sprite;
var pillerImg;
var hpillerImg;
var zombie_hand,zombie;
var handImg,zombieImg;


function preload(){
startpgImg=loadImage("start.jpg");
scene1Img=loadImage("scene1.jpg");
chopperImg=loadImage("chopper.png");
backImg=loadImage("back.jpg");
groundImg=loadImage("ground.png");
suppliesImg=loadImage("supplies.png");
peopleImg=loadImage("hope.png");
helisound=loadSound("helicopter.mp3");
zombiSound=loadSound("emergancy.mp3");
pillerImg=loadImage("wall.jpg");
hpillerImg=loadImage("hwall.jpg");
zombieImg=loadImage("zombie.png");
handImg=loadImage("zombie_hand.png")



}

function setup() {
  var canvas =createCanvas(400,400);
  
  backSprite=createSprite(200,200);
  backSprite.addImage(backImg);

  startpg=createSprite(200,200);
  startpg.addImage(startpgImg);

groundSprite=createSprite(200,325);
groundSprite.addImage(groundImg);
groundSprite.visible=false;

zombie=createSprite(350,310);
zombie.addImage(zombieImg);
zombie.scale=(0.2);
zombie.visible=false;

zombie_hand=createSprite(50,330);
zombie_hand.addImage(handImg);
zombie_hand.scale=(0.1);
zombie_hand.visible=false;

piller1Sprite=createSprite(200,200,20,100);
piller1Sprite.addImage(pillerImg);
piller1Sprite.visible=false;

piller2Sprite=createSprite(200,200,20,100);
piller2Sprite.addImage(pillerImg);
piller2Sprite.visible=false;


piller3Sprite=createSprite(200,200,200,20);
piller3Sprite.addImage(hpillerImg);
piller3Sprite.visible=false;



suppliesSprite=createSprite(200,50);
suppliesSprite.addImage(suppliesImg);
suppliesSprite.scale= 0.3;
suppliesSprite.visible=false;

  chopper=createSprite(200,50);
  chopper.addImage(chopperImg);
  chopper.visible=false;
  chopper.scale=0.6;
  

startg =createGroup();

startg.add(startpg); 

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
    
  }
  ground=Bodies.rectangle(200,400,400,200,options);
  World.add(world,ground);

  var options2={
    isStatic:true
  }


   supplies = Bodies.rectangle(200,50,20,20,options2);
   World.add(world,supplies);

 
  piller1=Bodies.rectangle(100,310,20,100,options2);
  World.add(world,piller1);

  piller2=Bodies.rectangle(300,310,20,100,options2);
  World.add(world,piller2);

  piller3=Bodies.rectangle(200,350,200,20,options2);
  World.add(world,piller3);

   zombiSound.play();
  

  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);

 
if(isTouching()){
  helisound.stop();
}



 
  rect(ground.position.x,ground.position.y,400,200);
  
  chopper.display();
 
  

chopper.x=mouseX;
suppliesSprite.y=supplies.position.y;

piller1Sprite.x=piller1.position.x;
piller1Sprite.y=piller1.position.y;

piller2Sprite.x=piller2.position.x;
piller2Sprite.y=piller2.position.y;

piller3Sprite.x=piller3.position.x;
piller3Sprite.y=piller3.position.y;

  if(keyDown("space")){
    
   startg.destroyEach();
     chopper.visible=true;
     groundSprite.visible=true;
    
     piller1Sprite.visible=true;
     piller2Sprite.visible=true;
     piller3Sprite.visible=true;

     zombie.visible=true;
     zombie_hand.visible=true;

     helisound.play(); 

  }

  if(keyDown("down")){
    suppliesSprite.visible=true;
    Matter.Body.setStatic(supplies,false);
  }

 
   drawSprites();
  
}

function isTouching(){
  if(groundSprite.y+100-suppliesSprite.y<groundSprite.height/2+groundSprite.height/2 &&suppliesSprite.y-groundSprite.y<groundSprite.height/2+suppliesSprite.height/2){
    return true;
  }
  else {
    return false;
  }
}