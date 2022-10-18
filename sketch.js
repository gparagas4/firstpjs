let w = 500;
let h = 600;


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(125);
  translate(50, 50);
  fill(red)
stroke(355, 0, 0);
beginShape();
// Exterior part of shape, clockwise winding
vertex(-40, -40);
vertex(40, -40);
vertex(40, 40);
vertex(-40, 40);
// Interior part of shape, counter-clockwise winding
beginContour();
vertex(-20, -20);
vertex(-20, 20);
vertex(20, 20);
vertex(20, -20);
endContour();
endShape(CLOSE);
}
