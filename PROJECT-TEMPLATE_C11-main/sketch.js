var seaImg
var shipImg1
var ship
var sea



function preload(){

seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")



}

function setup(){
  createCanvas(400,400);


  sea = createSprite(50, 160, 20, 50)
  sea.addImage(seaImg)

  ship = createSprite(130,300)
  ship.addAnimation("barco", shipImg1)
  ship.scale= 0.2

}

function draw() {
  background("blue");
  sea.velocityX= 2
  
  
  
  
  drawSprites();

 
}
