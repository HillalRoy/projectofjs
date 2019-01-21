let input = document.querySelector('#rgb');
let hex = document.querySelector('#hex');
let result;

let resultH;
function hexToRgb(){
    let hexv = hex.value;
    let hexvf = hexv.replace('#','');
    let rh = parseInt(hexvf.substring(0,2),16);
    let gh = parseInt(hexvf.substring(2,4),16);
    let bh = parseInt(hexvf.substring(4,6),16);
    console.log()
    if(hexv.length !== 7||isNaN(rh)|| isNaN(gh) || isNaN(bh)){
        resultH = 'Wrong keyword';
    }
    else
        resultH = 'RGBA( '+rh+', '+gh+', '+bh+', 1)';

}

function rgbToHex(){
    let color = input.value;
    let colorC;
    let colorG;
    if(RegExp(/a/i).test(color)){
        colorC = color.replace(/rgba/i, '');
    }
    else{
        colorC = color.replace(/rgb/i, '');
    }
    let colorB = colorC.replace('(','');
    if(RegExp(/\)/).test(colorB)){
        colorG = colorB.substring(0,colorB.length-1);
    }
    else
        colorG = colorB;
    let colorN = colorG.split(',');
    if(colorN[0]<=255 && colorN[1]<=255 &&colorN[2]<=255 && colorN[0]>=0 && colorN[1]>=0 && colorN[2]>=0){
        let r = Number(colorN[0]).toString(16);
        let g = Number(colorN[1]).toString(16);
        let b = Number(colorN[2]).toString(16);
        if(r.length<2){
            r = 0+r;
        }
        if(g.length<2){
            g = 0+g;
        }
        if(b.length<2){
            b = 0+b;
        }
        let resultJ =  r+g+b;
        result    = '#'+resultJ.toUpperCase();
    }
    else
        result = 'Wrong keyword';


    
}
input.addEventListener("input", function() {
    rgbToHex();
    document.querySelector('body').style.background = result;
    hex.value = result;

    // hex.style.borderColor = result;
});
hex.addEventListener("input", function() {
    hexToRgb();
    document.querySelector('body').style.background = resultH;
    input.value = resultH;
    // hex.style.borderColor = resultH;
});
