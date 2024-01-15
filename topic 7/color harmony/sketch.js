function setup() {
    createCanvas(720, 400);
colorMode(HSB);
noStroke();
    rectMode(CENTER);

}

function draw() {
    background(0);
    var startColor = 45;
    var colorDiff = 360 / 3;

    fill(startColor, 100, 100);
    rect(width / 2, height / 2, 300, 300);

    fill(startColor + colorDiff, 100, 100);
    rect(width / 2, height / 2, 200, 200); // Corrected this line

    fill(startColor + colorDiff * 2, 100, 100);
    rect(width / 2, height / 2, 100, 100); // Corrected this line
}

