var img;

function preload() {
    img = loadImage('images.jpeg');
}

function setup() {
    createCanvas(2000, 1000);
}

function draw() {
    background(255);
    image(img, 0, 0);
    img.loadPixels();
    var index = img.width * mouseY + mouseX;
    var redC = img.pixels[index + 0];
    var greenC = img.pixels[index + 1];
    var blueC = img.pixels[index + 2];
    var alphaC = img.pixels[index + 3];

    fill(redC, greenC, blueC, alphaC);
    rect(mouseX, mouseY, 50, 50);
}
