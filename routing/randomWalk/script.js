const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let a,b,c,d,walker = [];

function dots(x,y,r,c){
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
}

dots.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fill();
}

dots.prototype.update = function(){
    let l = Math.floor(Math.random()*4);
    if(l === 0 && this.x+this.r < canvas.width){
        this.x += this.r;
    }
    if(l === 1 && this.x-this.r > 0){
        this.x -= this.r;
    }
    if(l === 2 && this.y+this.r < canvas.height){
        this.y += this.r;
    }
    if(l === 3 && this.y-this.r > 0){
        this.y -= this.r;
    }
    this.draw();
}

function setup(){
    a= new dots(Math.random()*canvas.width,Math.random()*canvas.height,25,'rgb(51,51,51)');
    b= new dots(Math.random()*canvas.width,Math.random()*canvas.height,21,'#333');
    c= new dots(Math.random()*canvas.width,Math.random()*canvas.height,11,'#333');
    d= new dots(Math.random()*canvas.width,Math.random()*canvas.height,21,'#333');
    for (let i = 0 ; i < 20; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let r = 10+(Math.random()*10);
        let c = Math.floor(Math.random()*361);

        walker.push(new dots(x, y, r, `hsl(${c},100%,70%)`));
    }

}

function draw(){
    requestAnimationFrame(draw);

    // ctx.clearRect(0,0,canvas.width,canvas.height);

    a.update();
    b.update();
    c.update();
    d.update();

    walker.forEach((i)=>{
        i.update()
    });
}

setup();
draw();