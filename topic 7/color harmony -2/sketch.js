function setup() {
    createCanvas(720, 400);
    colorMode(HSB);
    noStroke();
    var brickWidth=72;
    var brickHeight=40;
    for(var x=0;x<=width;x+=brickWidth){
        for(var y=0;y<=height;y+=brickHeight){
            fill(random(360),random(100),random(100));
            rect(x,y,brickWidth,brickHeight)
        }
    }
    noLoop();
}

function draw() {

}
