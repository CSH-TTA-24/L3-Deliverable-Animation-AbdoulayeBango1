
let yPos = 250;
let xPos;
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);

  fill(0, 255, 0);
  ellipse(25, yPos, 50, 50);

  yPos += 3;

  if (yPos > 520) {
    yPos = 250;
  }
}

function mouseClicked(){
  yPos = 250
  xPos = random(50, 475)
}