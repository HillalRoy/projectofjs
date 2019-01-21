//veriabls
let lineLength = 50;
let dotsAmount = 500;
let dotsAcc = 1;
let dotSize = {
    min: 2,
    max: 8
};

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

addEventListener('resize', resized);

let dotsArr = [];
let lineArr = [];
let colorArr = [
    '#233D4D',
    '#FE7F2D',
    '#FCCA46',
    '#A1C181',
    '#579C87'
];
// mouse move
let mouseX, mouseY;
addEventListener('mousemove', mouseg);
function mouseg(ev){
    mouseX = ev.x;
    mouseY = ev.y;
}

function circle(x, y, dx, dy, r, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.ro = r;
    this.r = r;
    this.color = color;

    this.drow = ()=> {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }

    this.update = ()=> {
        
        if(this.x > canvas.width -this.r -this.dx || this.x < this.r -this.dx){
            this.dx = -this.dx;
        }
        if(this.y > canvas.height -this.r -this.dy || this.y < this.r -this.dy){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(-50 < this.x -mouseX && this.x -mouseX < 50 && -50 < this.y -mouseY && this.y -mouseY < 50 && this.r < this.ro *5){            
            this.r += 1;
        }
        else if(this.r > this.ro){
            this.r -= 1;
        }
        this.drow();
    } 
}

// drawLines betwin dots
function conectDots(){
    lineArr = [];
    for(let j = 0; j < dotsArr.length; j++){
        this.x = dotsArr[j].x;
        this.y = dotsArr[j].y;
        for(let k = 0; k < dotsArr.length; k++){
            if(-lineLength < this.x - dotsArr[k].x && this.x - dotsArr[k].x < lineLength && -lineLength < this.y - dotsArr[k].y && this.y - dotsArr[k].y < lineLength){
                lineArr.push(new drowLine(this.x, this.y, dotsArr[k].x, dotsArr[k].y));
            }
        }
         
    } 
    lineArr.forEach(line => line.draw());
}

//creat dots
function cdots(){
    dotsArr = [];
    for(let i = 0; i < dotsAmount; i++){
        let r = Math.random() * (dotSize.max - dotSize.min) + dotSize.min;
        let x = Math.random() * (canvas.width - r) + r;
        let y = Math.random() * (canvas.height - r) + r;
        let dx = (Math.random() - 0.5) * dotsAcc;
        let dy = (Math.random() - 0.5) * dotsAcc;
        let color = colorArr[Math.floor(Math.random() * colorArr.length)];
        dotsArr.push(new circle(x, y, dx, dy, r, color));
    }
}

//line drow criation
function drowLine(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.draw = ()=> {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
        ctx.moveTo(this.x1, this.y1);
        // ctx.lineWidth = 40;
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    conectDots();
    for(let j = 0; j < dotsArr.length; j++){
    dotsArr[j].update();
    }

}

function resized() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cdots();
    animate();  
}
resized();




