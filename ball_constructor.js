
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Get the wideth and the height of the canvas
let width = canvas.width
let height = canvas.height

// Initiate x,y-coordinates
let x = 0, y = 0;

// Define a function to draw a ball
function drawBall (x, y) {
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fill()
}

