var img;
function preload(){
    img=loadImage('images.jpeg');
}
function setup() {
    createCanvas(2000, 1000);
}

function draw() {
background(255);
    image(img,mouseX,mouseY);
}
