var imgIn;

function preload() {
    imgIn = loadImage("sea.jpeg");
}

function setup() {
    createCanvas(imgIn.width * 2, imgIn.height);
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

function draw() {
    background(255, 0, 255);

    // Original image
    image(imgIn, 0, 0);

    // Threshold filter
    var imgThreshold = thresholdFilter(imgIn, 128); // Example threshold value (adjust as needed)
    image(imgThreshold, imgIn.width, 0);

    // Gaussian blur filter
    var imgBlur = createImage(imgIn.width, imgIn.height);
    imgBlur.copy(imgIn, 0, 0, imgIn.width, imgIn.height, 0, 0, imgIn.width, imgIn.height); // Make a copy of the original image
    applyGaussianBlur(imgBlur);
    image(imgBlur, imgIn.width * 2, 0);

    noLoop();
}

// Gaussian blur filter
function gaussianBlurFilter(x, y, matrix, matrixSize, img) {
  var totalRed = 0;
  var totalGreen = 0;
  var totalBlue = 0;
  var offset = Math.floor(matrixSize / 2);

  for (var i = 0; i < matrixSize; i++) {
    for (var j = 0; j < matrixSize; j++) {
      var xloc = x + i - offset;
      var yloc = y + j - offset;

      // Ensure the pixel is within the image boundaries
      if (
        xloc >= 0 &&
        xloc < img.width &&
        yloc >= 0 &&
        yloc < img.height
      ) {
        var index = img.width * yloc + xloc;
        var weight = matrix[i][j];

        totalRed += img.pixels[index + 0] * weight;
        totalGreen += img.pixels[index + 1] * weight;
        totalBlue += img.pixels[index + 2] * weight;
      }
    }
  }

  return [totalRed, totalGreen, totalBlue];
}

// Apply Gaussian blur to the image
function applyGaussianBlur(img) {
  var matrix = [
    [1, 2, 1],
    [2, 4, 2],
    [1, 2, 1],
  ];

  var matrixSize = 3;

  loadPixels();

  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var result = gaussianBlurFilter(x, y, matrix, matrixSize, img);

      var index = (y * img.width + x) * 4;
      pixels[index + 0] = result[0] / 16; // Normalize by dividing by 16
      pixels[index + 1] = result[1] / 16;
      pixels[index + 2] = result[2] / 16;
      pixels[index + 3] = 255; // Alpha channel
    }
  }

  updatePixels();
}

