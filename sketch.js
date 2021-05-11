var cat, catImg1, catImg2, catImg3 ;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var bg, bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    bg = createSprite(500,400,10,10);
    bg.scale = 1.2;
    bg.addImage(bgImg);
    
    mouse = createSprite(200,650,10,10);
    mouse.scale = 0.175;
    mouse.addAnimation("mouse1",mouseImg1);
    mouse.addAnimation("mouse2",mouseImg2);
    mouse.addAnimation("mouse3",mouseImg3);
    
    cat = createSprite(800,650,10,10);
    cat.scale = 0.175;
    cat.addAnimation("cat1",catImg1);
    cat.addAnimation("cat2",catImg2);
    cat.addAnimation("cat3",catImg3);
    

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
    if((cat.x - mouse.x) < (cat.width/2 + mouse.width/2)){
        cat.velocityX = 0;
        cat.changeAnimation("cat3",catImg3);
        mouse.changeAnimation("mouse3",mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left_arrow")){
      mouse.changeAnimation("mouse2",mouseImg2);
      mouse.frameDelay = 20;
      cat.velocityX = -2;
      cat.changeAnimation("cat2",catImg2); 
  }
}
