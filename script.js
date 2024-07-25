var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 20;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth(value) {
  if (isNumeric(value)) {
    paintcanvas.width = value;
  }
}

function setHeight(value) {
  if (isNumeric(value)) {
    paintcanvas.height = value;
  }
}

function startPaint() {
  isPainting = true;
}

function endPaint() {
  isPainting = false;
}
// makes the pen rectangle for painting, X & Y are starting Coordinates
function doPaint(x, y) {
  if (isPainting == true) {
    context.fillStyle = color;
    context.fillRect(x, y, parseInt(radius), parseInt(radius));
  }
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
  //context.cleararc(0,0, paintcanvas.redius);
}
// makes the pen circle for painting, X & Y are starting Coordinates
function paintCircle(x, y) {
  // make sure to start a new circle each time
  if (isPainting == true) {
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
  }
}
// verify the given value is actually a number
function isNumeric(value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function changeColor(newColor) {
  color = newColor;
}

//
function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}
