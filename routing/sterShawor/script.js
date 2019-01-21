const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots=[];
let spark = [];
let colorArr = [
    // '#233D4D',
    // '#FE7F2D',
    // '#FCCA46',
    // '#A1C181',
    // '#579C87'//,
    '#cccccc'
];

let fremCount = 0;
function newdots(){
    for(i=0;i <1+(Math.random()*2); i++){
        let x = Math.random()*canvas.width;
        let r = 10+(Math.random()*22);
        let y = -1*(Math.random()*200);
        let acc = 1+(Math.random()*2);
        let c = colorArr[Math.floor(Math.random() * colorArr.length)];
        let xv = (Math.random()*4)-2;
        dots.push(new cdots(x, y, r, c, 0, xv, acc));
    }
}
function newspark(x, y){
    for(let n = 0; n < 6; n++){
        let r = 1;
        let val = -10;
        let xv = -5+(Math.random()*10);
        let acc = 1+(Math.random()*2);
        spark.push(new sparks(x, y, r, val, xv, acc ));
    }
}


function setup(){
    newdots();
    animate();
}

function animate(){
    // setInterval(animate, 1000);
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((i,j,a)=>{
        i.update();
        if(i.r < 6){
            a.splice(j,1);
        }
    });
    spark.forEach((i,j,a)=>{
        i.update();
        if(i.t <= 0){
            a.splice(j, 1);
        }
    });
    fremCount++;
    if(fremCount % (40 + Math.round(Math.random()*40)) === 0 ){
        newdots();
    }
}
setup();


