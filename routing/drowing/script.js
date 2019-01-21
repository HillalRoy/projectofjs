let canvas = $('#canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

let ctx = canvas.getContext('2d');

function go() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadJson('/data/tree', gotTree);
}
let aaa;
let strocks = [];

function gotTree(tree) {
    treedata = JSON.parse(tree);
    aaa = treedata.drawing;
    animateDraw();
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawing(tree) {
    for (let i = 0; i < tree.length; i++) {
        for (let b = 0; b < tree[i][0].length; b++) {
            line(tree[i][0][b], tree[i][1][b], tree[i][0][b + 1], tree[i][1][b + 1])
        }
    }
}
let lines = [];

function animate() {
    requestAnimationFrame(animate);
    // lines.forEach(i=>i.update());
    ctx.translate(canvas.width/2, canvas.height/2);
    // console.log(cd);
    if(-1 < cd.cp.x - cd.x2 && 1 > cd.cp.x - cd.x2){
        cd.cp = {x: cd.x2,y: cd.y2};
        next();

    }else
        cd.update();
}
let cd;
function animateDraw() {


    // for (i = 0; i < aaa.length; i++) {
    //     for (j = 0; j < aaa[i][0].length; j++){
    //         lines.push(new lineing(aaa[i][0][j],aaa[i][1][j],aaa[i][0][j+2],aaa[i][1][j+1]));
    //         // cd = drawingl(aaa[i][0][j],aaa[i][1][j],aaa[i][0][j+2],aaa[i][1][j+1]);
    //     }
    // }



    next();


    // cd = new drawingl(200,200,400,100);
    animate();
}
let n = 0;
let k = 0;
function next() {

    cd = new drawingl(aaa[n][0][k],aaa[n][1][k],aaa[n][0][k+2],aaa[n][1][k+1]);
    console.log({x1: aaa[n][0][k],y1: aaa[n][1][k],x2: aaa[n][0][k+2],y2: aaa[n][1][k+1]});
    k++;
    if(k >= aaa[n][0].length){
        i++;
        j = 0;
    }
    if(n >= aaa.length){
        return;
    }
}
go();