function setup() {
    createCanvas(500, 500);
    colorMode(RGB);

    // Loop for RGB color mode
    for (var i = 0; i < 255; i++) {
        for (var j = 0; j < 255; j++) {
            stroke(i, 0, j);
            point(i, j);
        }
    }

    noLoop(); // This is placed here to stop the draw loop after setting up RGB

    colorMode(HSB);

    // Loop for HSB color mode
    for (var i = 0; i < 360; i++) {
        for (var j = 0; j < 100; j++) { // Adjusted the range for brightness (0 to 100)
            stroke(i, j, 100); // Set saturation to maximum (100)
            point(i, j);
        }
    }

    noLoop(); // This is placed here to stop the draw loop after setting up HSB
}

function draw() {
    // The draw function can be left empty if you don't need it for your specific use case
}
