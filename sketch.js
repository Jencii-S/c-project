
var astronaut;
var background, backgroundImage;
var sleep, sleepImage;
var brush, brushImage;
var gym, gymImage;
var eat, eatImage;
var drink, drinkImage;
var move,  moveImage;
var edge1, edge2, edge3, edge4;
var createEdgeSprites
var bath, bathImage
function preload() {
  backgroundImage = loadImage("images/iss.png");
  sleepImage  = loadImage("images/sleep.png");
  brushImage = loadImage("images/brush.png");
  eatImage = loadAnimation("images/eat1.png", "images/eat2.png")
  gym = loadAnimation ("images/gym11.png", "images/gym12.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  moveImage = loadAnimation("images/move.png", "images/move1.png")
  bathImage = loadAnimation("images/bath1.png", "images/bath2.png")
}


function setup() { 
  createCanvas(400, 400);
  background = createSprite(200,180,400,20);
  background.addImage("running" ,backgroundImage);

  astronaut = createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping", sleepImage);
  astronaut.scale = 0.1;

 var edge1= createSprite(200,10,400,20);
 var edge2 = createSprite(202,390,400,20);
 var edge3 = createSprite(5,190,20,400);
 var edge4 = createSprite(390,190,20,400);

 edge1.visible = true;
 edge2.visible = true;
 edge3.visible = true;
 edge4.visible = true;

}

function draw() {

  if (keyDown("UP_ARROW")) {
astronaut.addAnimation ("brushing", brushImage);
astronaut.changeAnimation("brushing");
astronaut.y = 200;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 200;
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eatImage);
    astronaut.changeAnimation("eating");
    astronaut.x = 200
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bathImage);
    astronaut.changeAnimation("bathing");
    astronaut.x = 200
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = ;
  }

  
  if (keyIsDown("m")) {
    astronaut.addAnimation("moving", moveImage);
    astronaut.changeAnimation("moving");
    astronaut.x = 200
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }



  drawSprites();
}
