window.onload = setup;
let canvas;
let ctx;
let b;
let num = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B]//, 0x77, 0x1F, 0x4E, 0x3D,0x4F,0x47];

function opacity(val, shift){
    let op = 0.2 +((val >> shift ) & 1)*(0.8);
    return op;
}
function setup() {
    canvas = $('#canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx = canvas.getContext('2d');
    b = new sevenSegment(100, 100, 200, 100);
    ctx.fillRect(3000, 100, 300, 50)


    draw();
}
let kk = 0;
function draw() {
    // requestAnimationFrame(draw);
    b.display(num[kk % num.length]);
    kk++
    setTimeout(draw, 1000/1);
}