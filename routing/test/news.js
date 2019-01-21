//selector
function $(selector) {
    return document.querySelector(selector);
}

//css
HTMLElement.prototype.css = function (obj) {
    thisElement = this;
    this.obj = obj;
    this.key = Object.keys(obj);
    return (function () {
        thisElement.key.forEach(i => {
            console.log(i);
            thisElement.style[i] = thisElement.obj[i];
        })
    })();
}

// load json
function loadJson(path, result) {
    this.req = new XMLHttpRequest();
    this.req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            result(this.responseText);
        }
    }
    this.req.open('GET', path);
    this.req.send();
}
//random
function random(min, max) {
    if (max) return (Math.random() * (max - min)) + min;
    else if (Array.isArray(min)) {
        return min[Math.floor(Math.random() * min.length)];
    }
    else return Math.random() * min;
}


// function map(val, min, max, tomin, tomax){

// }