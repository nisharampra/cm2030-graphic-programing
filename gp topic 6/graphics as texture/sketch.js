var buffer;
function setup() {
    createCanvas(900, 600,WEBGL);
    noStroke();
    buffer=createGraphics(300,300);
    buffer.background(255,0,0);
    angleMode(DEGREES);
    
}

function draw() {
background(125);
//    image(buffer,mouseX,mouseY);
    buffer.fill(255,0,255);
    buffer.noStroke();
    buffer.ellipse(random(0,buffer.width),random(0,buffer.height),10,10);
    rotateY(frameCount);
    texture(buffer);
    sphere(100,30,30);
}
