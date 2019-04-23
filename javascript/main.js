var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var clearCanvas = document.getElementById("clearCanvas");

var radius = 2;

var createLine = document.getElementById('create-line'),
    createRectangle = document.getElementById('create-rectangle'),
    colorFill = document.getElementById('color-fill');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//connects the points on the string to create a smooth line
context.lineWidth = radius * 2;


//putpoint - puts down a circle where user clicks the mouse
//path is made up of points and lines
var putPoint = function (e) {
    if (dragging) {
        context.lineTo(e.clientX, e.clientY)
        context.stroke();
        context.beginPath(); //clears current path and starts a new one
        //e.client will work in firefox.  returns X and Y coordinates
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }
};

// Erase current Canvas
function eraseCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Create Line: Should create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character.
let drawLine = () => {

};

// Create Rectangle: Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the 'x' character.
let drawRectangle = () => {

};

// Bucket Fill: Should fill the entire area connected to (x,y) with "colour" c. The behaviour of this is the same as that of the "bucket fill" tool in paint programs.
let fillColor = () => {

};


// Add Event Listeners to Buttons
clearCanvas.addEventListener("click", eraseCanvas);

createLine.addEventListener('click', function () {
    drawLine();
});

createRectangle.addEventListener('click', function () {
    drawRectangle();
});

colorFill.addEventListener('click', function () {
    fillColor();
});