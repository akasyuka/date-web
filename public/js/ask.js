let needle;
let pts3;

function preload() {
  needle = loadFont("/fonts/Arial.ttf");
}

function setup() {
  createCanvas(1080, 70);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  pts3 = needle.textToPoints("Пойдешь на свидание?", 0, 0, 70, {
    sampleFactor: 0.1984,
  });
}

function draw() {
  background(255);
  const d = sin(frameCount / 50) * 2;
  const angle = frameCount / 100;
  push();
  stroke(0, 0, 255);
  translate(60, height - 10);
  for (let i = 0; i < pts3.length; i++) {
    push();
    translate(pts3[i].x, pts3[i].y);
    rotate(angle);
    line(-d, -d, +d, +d);
    line(+d, -d, -d, +d);
    pop();
  }
  pop();
}

function ns(x, y, z, scale_, min_, max_) {
  return map(noise(x * scale_, y * scale_, z * scale_), 0, 1, min_, max_);
}
