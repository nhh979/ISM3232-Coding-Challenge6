
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
        if (this.x <= 0 || this.x > width){
            this.dx *= -1
        }
        if (this.y <= 0 || this.y > height){
            this.dy *= -1
        }
        // Update the x, y coordinates
        this.x += this.dx;
        this.y += this.dy;
    }
}


