
var trex,trex_running,ground,groundImg




function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

 groundImg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,30,30)
  trex.addAnimation("running",trex_running)
   trex.scale=0.5

   ground=createSprite(100,190,400,20)
ground.addImage("ground",groundImg)
ground.velocityX=-4
}

function draw(){
  background("white")
  
drawSprites()
}
