var img
function preload(){
    img=loadImage('rock.jpeg');
    angleMode(DEGREES);
}
function setup() {
    createCanvas(900, 600,WEBGL);
}

function draw() {
background(0);
    texture(img);
    noStroke();
    rotateY(frameCount);
//    box(300);
    plane(500,500);
    
}
