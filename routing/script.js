const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots=[];
let colorArr = [
    '#233D4D',
    '#FE7F2D',
    '#FCCA46',
    '#A1C181',
    '#579C87'
];

let fremCount = 0;
function newdots(){
    for(i=0;i <5+(Math.random()*5); i++){
        let x = Math.random()*canvas.width;
        let r = 2+(Math.random()*10);
        let y = -1*(Math.random()*200);
        let acc = 1+(Math.random()*2);
        let c = colorArr[Math.floor(Math.random() * colorArr.length)];
        let xv = (Math.random()*2)-1;
        dots.push(new cdots(x, y, r, c, 0, xv, acc));
    }
}


function setup(){
    newdots();
    animate();


}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((i,j,a)=>{
        i.update();
        if(i.t === 0){
            a.splice(j,1);
        }
    })
    fremCount++;
    if(fremCount % (40 + Math.round(Math.random()*20)) == 0 ){
        newdots();
    }
}
setup();


