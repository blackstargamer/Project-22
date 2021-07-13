var bg , canvas;
var astronaut , bathImg , brushingImg , eatingImg , gym2Img , gym1Img , moveImg , drinkImg , sleepImg , drinkImg;

function preload(){
  bg = loadImage("iss.png");
  brushingImg = loadAnimation ("brush.png");
  bathImg = loadAnimation("bath1.png" , "bath2.png");
  eatImg = loadAnimation("eat1.png" , "eat2.png");
  moveImg = loadAnimation("move.png" ,"move1.png");
  gym1Img = loadAnimation("gym1.png" , "gym2.png");
  gym2Img = loadAnimation("gym11.png" , "gym12.png");
  drinkImg =  loadAnimation("drink1.png" , "drink2.png");
  sleepImg = loadAnimation("sleep.png");
  drinkImg = loadAnimation("drink1.png" , "drink2.png");
  
}


 function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleepImg);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushingImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym1Img);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}