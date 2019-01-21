class sevenSegment {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.hl = this.h * (5 / 16);
        this.wl = this.w / 2;
        this.sh = this.h * (2 / 16);
        this.sw = this.w * (1 / 4);
    }
    display(val) {
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // A
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 6)})`;
            ctx.fillRect(this.x + this.sw, this.y, this.wl, this.sh);

        // B
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 5)})`;
            ctx.fillRect(this.x + this.sw + this.wl, this.y + this.sh, this.sw, this.hl);

        // C
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 4)})`;
            ctx.fillRect(this.x + this.sw + this.wl, this.y + (this.sh * 2) + this.hl, this.sw, this.hl);

        // D
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 3)})`;
            ctx.fillRect(this.x + this.sw, this.y + (this.sh * 2) + (this.hl * 2), this.wl, this.sh);

        // E
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 2)})`;
            ctx.fillRect(this.x, this.y + (this.sh * 2) + this.hl, this.sw, this.hl);

        // F
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 1)})`;
            ctx.fillRect(this.x, this.y + this.sh, this.sw, this.hl);

        // G
        ctx.fillStyle = `rgba(200,50,50,${opacity(val, 0)})`;
            ctx.fillRect(this.x + this.sw, this.y + this.sh + this.hl, this.wl, this.sh);

    }
    // update(val) {



    //     this.display(val);
    // }
}