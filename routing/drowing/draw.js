class lineing {
    constructor(x, y, x2, y2) {
        this.x = x;
        this.y = y;
        this.y2 = y2;
        this.x2 = x2;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
    update() {
        this.draw();
    }
}
class drawingl {
    constructor(x, y, x2, y2) {
        this.x = x;
        this.y = y;
        this.y2 = y2;
        this.x2 = x2;
        this.cp = {
            x: x,
            y: y
        };
        this.np = {
            x: 0,
            y: 0
        };
        this.a = Math.atan((this.y2 - this.y) / (this.x2 - this.x));
    }
    draw() {
        ctx.beginPath();
        // ctx.strokeStyle = '#a33';
        // ctx.lineWidth = 5;
        // ctx.moveTo(this.cp.x, this.cp.y);
        // ctx.lineTo(this.np.x, this.np.y);
        // ctx.stroke();

        ctx.arc(this.cp.x, this.cp.y, 1, 0, Math.PI * 2);
        ctx.fill();

        if (-1 < this.cp.x - this.x2 && 1 > this.cp.x - this.x2) {
            this.cp = {
                x: this.x2,
                y: this.y2
            };
        } else {
            this.np = this.cp;
        }
    }
    update() {
        this.np.x = this.cp.x + Math.cos(this.a);
        this.np.y = this.cp.y + Math.sin(this.a);

        this.draw();
    }
}