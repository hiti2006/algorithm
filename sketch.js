var fixed,moving 




function setup() {
  createCanvas(800,400);
   fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(400,350,50,45)
  fixed.shapeColor="yellow"
  moving.shapeColor="blue" 
 

}

function draw() {
  background("white"); 
  moving.y=mouseY
  moving.x=mouseX 
  if(moving.x-fixed.x<=moving.width/2+fixed.width/2
    && fixed.x-moving.x<=fixed.width/2+moving.width/2
    &&moving.y-fixed.y<=moving.height/2+fixed.height/2
    && fixed.y-moving.y<=fixed.height/2+moving.height/2){
      moving.shapeColor="black"
      fixed.shapeColor="red"
    }
    else{
      fixed.shapeColor="yellow"
      moving.shapeColor="blue"

    }
    
  drawSprites();
}