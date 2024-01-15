//var video;
//
//function setup() {
//    createCanvas(640, 480);
//    pixelDensity(1);
//    video=createCapture(VIDEO);
//    video.hide();
//}
//
//function draw() {
//background(255);
//imageMode(CENTER);
//translate(width/2,height/2);
//    scale(-1,1,1);
//    image(video,0,0);
//
//}
var video;
var saveButton;

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);

    // Create video capture and hide it
    video = createCapture(VIDEO);
    video.hide();

    // Create a button and define its behavior
    saveButton = createButton('Save Frame');
    saveButton.position(10, height + 10);
    saveButton.mousePressed(saveCurrentFrame);
}

function draw() {
    background(255);
    imageMode(CENTER);
    translate(width / 2, height / 2);
    scale(-1, 1, 1);
    image(video, 0, 0);
}

function saveCurrentFrame() {
    // Save the current frame as an image
    saveCanvas('myCanvas', 'png');
}
