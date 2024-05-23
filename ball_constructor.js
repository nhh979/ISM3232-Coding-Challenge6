// Hoang Nguyen
// U12840485

// Create Ball class
class Ball {
    constructor (x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Create a method to draw the ball
    draw (ctx){
        // This method takes the context as an argument
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill()
    }

    // Create a method to update the ball's positions
    update (width, height) {
        // This method takes two arguments: canvan's width and canvas's height
        if (this.x - this.radius < 0 || this.x + this.radius > width){
            this.dx *= -1
        }
        if (this.y - this.radius < 0 || this.y + this.radius > height){
            this.dy *= -1
        }

        // Update the x, y coordinates
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Get canvas and context
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Get the wideth and the height of the canvas
const width = canvas.width
const height = canvas.height

// Create a function to draw the canvas's boundaries
function canvasBoundary (){
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, width, height)
}
// Create the ball object
let ball = new Ball(200, 160, 20, 2, 2, 'red')        

// Implement animation
setInterval(() => {
    ctx.clearRect(0, 0, width, height);     // Clear the Canvas
    canvasBoundary();                   // Draw the boundary
    ball.draw(ctx);                     // Draw the ball
    ball.update(width, height);         // Update the positions
}, 
10)    // Update the canvas every 10ms

