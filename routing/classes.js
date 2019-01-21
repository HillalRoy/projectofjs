function convertHex(hex,opacity){
    // hex = hex.replace('#','');
    // r = parseInt(hex.substring(0,2), 16);
    // g = parseInt(hex.substring(2,4), 16);
    // b = parseInt(hex.substring(4,6), 16);
   
   
    // let hexv = hex.value;
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    // console.log()
    if(isNaN(r)|| isNaN(g) || isNaN(b)){
        result = console.log('some not ok');
    }
    else
        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';

    // result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

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
    ctx.fillStyle = convertHex(this.c,this.t/4);

    ctx.shadowBlur=20;
    ctx.shadowColor=this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fill();
    // console.log(this.val);    
}
cdots.prototype.update = function(){
    if(this.y+this.r >= canvas.height){
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
    this.r -= this.r*0.003;
    this.draw();
    this.t--;
}