function setup(){
  createCanvas(400,400)
  var box = createSprite(200,200,10,10)

}

function draw(){

if (keyIsDown(RIGHT_ARROW)){
  background("red");
}

if (keyIsDown(LEFT_ARROW)){
  background("green")
}

if (keyIsDown(UP_ARROW)){
  background("yellow")
}

if (keyIsDown(DOWN_ARROW)){
  background("blue")
}

drawSprites()
}

