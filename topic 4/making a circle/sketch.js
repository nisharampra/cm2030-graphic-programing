function setup() {
    createCanvas(900, 600);
    background(0);
    angleMode(DEGREES)
}

function draw() {
    background(0);
    translate(width/2,height/2);
    fill(255);
//    var radius=200;
    var theta=frameCount;
    var radius=frameCount;
    
    var x=cos(theta)*radius;
    var y=sin(theta)*radius;
    ellipse(x,y,25,25);

}
