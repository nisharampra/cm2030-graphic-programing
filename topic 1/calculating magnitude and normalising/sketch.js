function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  
  var mouse = createVector(mouseX,mouseY);
  var center = createVector(width/2,height/2);
  
mouse.sub(center);
  
  var normal=mouse.copy();
  text("normal"+ normal.normalize(),10,50);
  
  normal=normal.mult(50);
  line(10,60,10+ normal.x , 60 +normal.y);
  
  
  
  translate(width/2 , height/2);
  strokeWeight(3);
  
  line(0,0,mouseX,mouseY);
  
}