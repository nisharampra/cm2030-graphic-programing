function setup() {
    createCanvas(900, 600);
    background(0);
    angleMode(DEGREES)
}

function draw() {
    background(0);
    translate(width/2,height/2);
    fill(255);
    
    
    var amp=width/2;
    var period=360;
    var phase=0;
    var freq=2;
    
    var locx=sin(frameCount*6*freq+phase)*amp;
    ellipse(locx,0,30,30)
}