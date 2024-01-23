var imgIn;

function preload() {
    imgIn = loadImage("sea.jpeg");
}

function setup() {
    createCanvas(imgIn.width*2, imgIn.height);
    pixelDensity(1);
}

function draw() {
    background(255, 0, 255);
    image(imgIn, 0, 0);
    noLoop();
}

function invertFilter(img) {
    var imgOut = createImage(img.width, img.height);
    imgOut.loadPixels();
    img.loadPixels();
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = (y * img.width + x) * 4;
            var r = 255 - img.pixels[index + 0];
            var g = 255 - img.pixels[index + 1];
            var b = 255 - img.pixels[index + 2];

            imgOut.pixels[index + 0] = r;
            imgOut.pixels[index + 1] = g;
            imgOut.pixels[index + 2] = b;
            imgOut.pixels[index + 3] = img.pixels[index + 3]; // Preserve alpha channel
        }
    }
    imgOut.updatePixels();
    return imgOut;
}

