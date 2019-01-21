const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let sinb = 0;
let nowx = canvas.width / 2;
let nowy = canvas.height / 2;
let xi = canvas.width / 2;
let yi = canvas.height / 2;
//canvas drawing
let circleArr = [];
let colorArr = [
    '#233D4D',
    '#FE7F2D',
    '#FCCA46',
    '#A1C181',
    '#579C87'
];
addEventListener('resize', resized);
addEventListener('mousemove', mousemovE);

function mousemovE(ev) {
    nowx = ev.x;
    nowy = ev.y;
}

class circle {
    constructor(x, y, r, color) {
        this.lengtH = (Math.random() * 5) + 5;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.val = 1 + (Math.random() * 2);
        this.sinb = Math.random() * Math.PI * 2;
        this.draw = function () {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }

    }
    update() {
        this.x = xi + Math.sin(this.sinb) * 10 * this.lengtH;
        this.y = yi + Math.cos(this.sinb) * 10 * this.lengtH;
        this.sinb += this.val / 50;
        this.draw();
    }
}
function cdots() {
    for (let i = 0; i < 70; i++) {
        let color = colorArr[Math.floor(Math.random() * colorArr.length)];
        let r = 2 + (Math.random() * 2);
        circleArr.push(new circle(xi, yi, r, color));
    }
}
// console.log(circleArr);
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(51,51,51,0.4)';
    xi -= (xi - nowx) * 0.03;
    yi -= (yi - nowy) * 0.03;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    circleArr.forEach(c=>c.update());
}

function resized() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    circleArr = [];
    cdots();
}
resized();
animate();