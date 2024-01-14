function setup() {
    createCanvas(900, 600,WEBGL);
}

function draw() {
 background(125);
    ambientMaterial(255);
    pointLight(255,0,0,mouseX-width/2,mouseY-height/2,100);
    pointLight(0,255,0,0,-200,100);

 sphere(100,50,50);
}
