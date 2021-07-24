var image1, image2, image3, image4, issImage, bgImage;
var iss, spaceCraft, hasDocked=false;
function preload(){
image1 = loadImage("Docking-undocking/spacecraft1.png")
image2 = loadImage("Docking-undocking/spacecraft2.png")
image3 = loadImage("Docking-undocking/spacecraft3.png")
image4 = loadImage("Docking-undocking/spacecraft4.png")
bgImage = loadImage("Docking-undocking/spacebg.jpg")
issImage = loadImage("Docking-undocking/iss.png")
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(315, 115, 50, 50);
  iss.addImage ("issi" , issImage)
  iss.scale = 0.4;
  
  spaceCraft = createSprite(300, 300, 50, 50);
  spaceCraft.addImage ("sc" , image1)
  spaceCraft.scale = 0.3;
}

function draw() {
  background(bgImage);  
  drawSprites();
  if(!hasDocked){
   spaceCraft.x = spaceCraft.x + random(-1, 1);
   if(keyDown("UP_ARROW")){
   spaceCraft.y = spaceCraft.y-2  
   }
   if(keyDown("DOWN_ARROW")){
    spaceCraft.y = spaceCraft.y+2  
    }
  if(keyDown("LEFT_ARROW")){
     
    spaceCraft.addImage (image3)
      spaceCraft.x = spaceCraft.x-2
      }
      if(keyDown("RIGHT_ARROW")){
        spaceCraft.x = spaceCraft.x+2  
        }


  }
}