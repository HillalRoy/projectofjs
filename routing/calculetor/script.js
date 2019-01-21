const display = document.querySelector('#display');
let y=0;
let r = 0;
math(y);
function math(x){
    if(x=='re'){
        mathdone();
    }
    else if(r==0)
        r=x;
    else
        r+=x;
    display.innerHTML = r;
}
function clr(){
    
//    console.log(n);
    r = r.toString();
    let n = r.length;
    console.log(r);
    r =  r.substring(0,n-1);
    display.innerHTML = r;
}

function mathdone(){
   let b;
    b = r.replace(/(w+)/, ), function(x){
        return Number(x);
    } ;
    console.log(Number('/'));
}
console.log(Number('/'));

