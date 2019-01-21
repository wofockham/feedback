let img;
function preload() {
  img = loadImage("img/immersives.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

const frame = [];

const scaleFrame = function (width, height, scale) {
  return {
    x: (width - width * scale) / 2,
    y: (height - height * scale) / 2,
    width: width * scale,
    height: height * scale,
    srcX: 0,
    srcY: 0,
    srcWidth: width,
    srcHeight: height
  }
}

function draw () {
  // ellipse(mouseX, mouseY, 100, 100);

  if (mouseIsPressed) {
    frames.length = 0;
    image(img, 0, 0);
  }

  if (frame.length > 9) {
    rotate(-0.07);
    const fp = scaleFrame(windowWidth, windowHeight, 0.8);
    // image(frame.shift(), fp.x, fp.y, fp.width, fp.height, 0, 0, windowWidth, windowHeight);
    image(frame.shift(), mouseX, mouseY, fp.width, fp.height, 0, 0, windowWidth, windowHeight);
  }
  frame.push(get());
}
