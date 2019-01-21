
function cdots(x,y,r,c,val, xv,acc){
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.val = val;
    this.acc = acc;
    this.t = 400;
    this.xv = xv;
    
}
cdots.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.shadowBlur=20;
    ctx.shadowColor=this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fill();  
}
cdots.prototype.update = function(){

    if(this.y+this.r >= canvas.height){
        if( this.r > 6){
            this.r -= this.r*0.3;
            newspark(this.x, this.y);
        }
        if(this.y+this.r+this.val > canvas.height){
            this.y = canvas.height-this.r;
        }
        if(this.val<10){
            this.acc = 0;
            this.val = 0;
            this.xv = this.xv*0.1;
        }
        this.val = -this.val*0.8;

    }
    this.val += this.acc;    
    this.y   += this.val; 
    this.x += this.xv;

    this.draw();
    this.t--;
}
function sparks(x,y,r,val, xv,acc){
    this.x = x;
    this.y = y;
    this.r = r;
    this.val = val;
    this.acc = acc;
    this.t = 50;
    this.xv = xv;
}
sparks.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = '#ccc';
    ctx.shadowBlur=40;
    ctx.shadowColor='#fff';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fill();  
}
sparks.prototype.update = function(){

    if(this.y+this.r >= canvas.height){
        if(this.y+this.r+this.val > canvas.height){
            this.y = canvas.height-this.r;
        }
        this.val = -this.val*0.8;

    }
    this.val += this.acc/2;    
    this.y   += this.val*4; 
    this.x += this.xv;
    this.draw();
    this.t--;
}