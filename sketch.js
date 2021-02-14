var cat,mouse,garden;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3,gardenImg;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("mouse4.png");
    mouseImg1 = loadAnimation("cat1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(400,400);
    garden = createSprite(200,200);
    garden.addImage("garden",gardenImg);

    //create tom and jerry sprites here
    cat = createSprite(340,180,30,30);
    cat.scale = 0.07;
    cat.addAnimation("cat",catImg);

    mouse = createSprite(140,180,20,20);
    mouse.scale = 0.09;
    mouse.addAnimation("mouse",mouseImg);
 
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;    
    cat.addAnimation("catLastImage",catImg3);
    cat.changeAnimation("catLastImage");

    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2); 
    cat.addAnimation("catRunning");

  }
    text(mouseX + ',' + mouseY, 10, 45);

}
