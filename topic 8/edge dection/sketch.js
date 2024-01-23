var imgIn;

function preload() {
    imgIn = loadImage("sea.jpeg");
}

function setup() {
    createCanvas(imgIn.width * 3, imgIn.height);
    pixelDensity(1);
}

function thresholdFilter(img, threshold) {
    var imgOut = createImage(img.width, img.height);
    imgOut.loadPixels();
    img.loadPixels();
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = (y * img.width + x) * 4;
            var avg = (img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2]) / 3;

            var outputValue = (avg > threshold) ? 255 : 0;

            imgOut.pixels[index + 0] = outputValue;
            imgOut.pixels[index + 1] = outputValue;
            imgOut.pixels[index + 2] = outputValue;
            imgOut.pixels[index + 3] = img.pixels[index + 3]; // Preserve alpha channel
        }
    }
    imgOut.updatePixels();
    return imgOut;
}

function grayscaleFilter(img) {
    var imgGray = createImage(img.width, img.height);
    imgGray.loadPixels();
    img.loadPixels();

    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = (y * img.width + x) * 4;
            var avg = (img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2]) / 3;

            imgGray.pixels[index + 0] = avg;
            imgGray.pixels[index + 1] = avg;
            imgGray.pixels[index + 2] = avg;
            imgGray.pixels[index + 3] = img.pixels[index + 3];
        }
    }

    imgGray.updatePixels();
    return imgGray;
}

function edgeDetectionFilter(img) {
    var imgEdges = createImage(img.width, img.height);
    imgEdges.loadPixels();
    img.loadPixels();

    for (var x = 1; x < img.width - 1; x++) {
        for (var y = 1; y < img.height - 1; y++) {
            var pixelX = (
                -1 * img.pixels[((y - 1) * img.width + x - 1) * 4] +
                -2 * img.pixels[(y * img.width + x - 1) * 4] +
                -1 * img.pixels[((y + 1) * img.width + x - 1) * 4] +
                1 * img.pixels[((y - 1) * img.width + x + 1) * 4] +
                2 * img.pixels[(y * img.width + x + 1) * 4] +
                1 * img.pixels[((y + 1) * img.width + x + 1) * 4]
            );

            var pixelY = (
                -1 * img.pixels[((y - 1) * img.width + x - 1) * 4] +
                -2 * img.pixels[((y - 1) * img.width + x) * 4] +
                -1 * img.pixels[((y - 1) * img.width + x + 1) * 4] +
                1 * img.pixels[((y + 1) * img.width + x - 1) * 4] +
                2 * img.pixels[((y + 1) * img.width + x) * 4] +
                1 * img.pixels[((y + 1) * img.width + x + 1) * 4]
            );

            var magnitude = sqrt(pixelX * pixelX + pixelY * pixelY);
            var index = (y * img.width + x) * 4;

            imgEdges.pixels[index + 0] = magnitude;
            imgEdges.pixels[index + 1] = magnitude;
            imgEdges.pixels[index + 2] = magnitude;
            imgEdges.pixels[index + 3] = 255;
        }
    }

    imgEdges.updatePixels();
    return imgEdges;
}

function invertColors(img) {
    var imgInverted = createImage(img.width, img.height);
    imgInverted.loadPixels();
    img.loadPixels();

    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = (y * img.width + x) * 4;

            imgInverted.pixels[index + 0] = 255 - img.pixels[index + 0];
            imgInverted.pixels[index + 1] = 255 - img.pixels[index + 1];
            imgInverted.pixels[index + 2] = 255 - img.pixels[index + 2];
            imgInverted.pixels[index + 3] = img.pixels[index + 3];
        }
    }

    imgInverted.updatePixels();
    return imgInverted;
}

function draw() {
    background(255, 0, 255);

    // Original image
    image(imgIn, 0, 0);

    // Grayscale filter
    var imgGray = grayscaleFilter(imgIn);
    image(imgGray, imgIn.width, 0);

    // Threshold filter
    var imgThreshold = thresholdFilter(imgIn, 128);
    image(imgThreshold, imgIn.width * 2, 0);

    // Edge detection filter
    var imgEdges = edgeDetectionFilter(imgIn);
    image(imgEdges, imgIn.width * 3, 0);

    // Invert colors
    var imgInverted = invertColors(imgIn);
    image(imgInverted, imgIn.width * 4, 0);

    noLoop();
}
