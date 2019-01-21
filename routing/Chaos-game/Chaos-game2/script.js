let canvas = $('#canvas');
let ctx = canvas.getContext('2d');
let points = [];

let persent = 50 / 100;
let n =3;
canvas.css({
    position: "absolute",
    top: 0,
    left: 0
});
canvas.width = innerWidth;
canvas.height = innerHeight;

function point(x, y, r, colour) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colour = colour;
}
point.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
}

function dist(one, two) {
    return {
        x: one.x - two.x,
        y: one.y - two.y
    };
}

function newa() {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let r = 300;

    let angel = Math.PI * 2 / n;
    let angelM = angel;
    for (i = 0; i < n; i++) {
        let dx = x + r * Math.cos(angel);
        let dy = y - r * Math.sin(angel);
        let m = new point(dx, dy, 5, '#000');
        points.push({
            x: dx,
            y: dy
        })
        m.draw();
        angel += angelM;
    }
};

let bb = new point(canvas.width / 2, canvas.height / 2, 1, '#0ff');
bb.draw();
let current;
let pervious;
let preprevious;


function play() {
    for (i = 0; i < 50; i++) {
        let pont = random(points);
        // if (current === pont) {
        //     continue;
        // }
        // let pont = points[i%4];

        // if (/*current === pont ||*/ pervious === pont || preprevious === pont) {
        //     continue;
        // }
        preprevious = pervious;
        pervious = current;
        current = pont;
        let dis = dist(bb, pont);
        let midil = {
            x: dis.x * persent,
            y: dis.y * persent
        }
        ll = new point(pont.x + midil.x, pont.y + midil.y, 1, '#fff');
        ll.draw();
        bb = ll;
    }
}

newa();
let fc = 0;

function draw() {
    fc++;
    if (fc < 1500) {
        requestAnimationFrame(draw);
    }
    play();
    // console.log('play');
}
draw();