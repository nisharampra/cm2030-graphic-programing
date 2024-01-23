var imgIn;

function preload() {
    imgIn = loadImage("sea.jpeg");
}

function setup() {
    createCanvas(imgIn.width * 2, imgIn.height);
    pixelDensity(1);
}

function draw() {
    background(255, 0, 255);
    image(imgIn, 0, 0);
    var imgGray = invertFilter(imgIn);
    image(imgGray, imgIn.width, 0);
    noLoop();
}

function invertFilter(img) {
    var imgOut = createImage(img.width, img.height);
    imgOut.loadPixels();
    img.loadPixels();
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = (y * img.width + x) * 4;
            var avg = (img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2]) / 3;

            imgOut.pixels[index + 0] = avg;
            imgOut.pixels[index + 1] = avg;
            imgOut.pixels[index + 2] = avg;
            imgOut.pixels[index + 3] = img.pixels[index + 3]; // Preserve alpha channel
        }
    }
    imgOut.updatePixels();
    return imgOut;
}
