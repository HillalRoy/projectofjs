let navHtml = new XMLHttpRequest();
navHtml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let nav = document.querySelector('#nav');
        if (!nav) {
            let header = document.createElement('header');
            header.id = 'nav';
            document.body.appendChild(header);
            nav = document.querySelector('#nav');
        }
        nav.innerHTML = this.responseText;
        loadJSON();
        loadCSS();
    } else if (this.readyState === 4 && this.status !== 200) {
        console.log('fail to load');
    };
};
navHtml.open('GET', '/nav/nav.html');
navHtml.send();

function loadJSON() {
    let navReq = new XMLHttpRequest();
    navReq.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            JSONloaded(this.responseText);
        } else if (this.readyState === 4 && this.status !== 200) {
            console.log('fail to load');
        };
    };
    navReq.open('GET', '/api/needjson');
    navReq.send();
}

let Json, project = [],
    select = [];

function JSONloaded(json) {
    Json = JSON.parse(json);
    for (key in Json) {
        project.push(key);
    };
    nav();
}

function nav() {
    for (let i = 0; i < 4; i++) {
        let keycode = Math.floor(Math.random() * project.length);
        let key = Json[project[keycode]];
        let n = document.querySelector(`#tab${i+1}`);
        n.href = key.path;
        n.innerHTML = key.name;
        project.splice(keycode, 1);
    };
    let moreitm = document.querySelector('#moretab');
    if (project.length > 0) {

        for (let n = 0; n < project.length; n++) {
            let moretab = document.createElement('li');
            let a = document.createElement('a');
            a.href = Json[project[n]].path;
            a.innerHTML = Json[project[n]].name;
            moreitm.appendChild(moretab);
            moretab.appendChild(a);
        }
    } else {
        moreitm.style.display = 'none';
    };
}

function loadCSS() {
    let navcss = document.createElement('link');
    navcss.rel = 'stylesheet';
    navcss.type = 'text/css';
    navcss.href = '/nav/nav.css';
    document.head.appendChild(navcss);
    let icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = '/icon/icon.png';
    document.head.appendChild(icon);
}

/*
*
* don't copy 
* make your own 
* 
*
*****  my libary ****
*
*
*
*
*
*/

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
            thisElement.style[i] = thisElement.obj[i];
        })
    })();
}

// load json
function loadJson(path, result) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            result(this.responseText);
        }
    }
    req.open('GET', path);
    req.send();
}
//random
function random(min, max) {
    if (max) return (Math.random() * (max - min)) + min;
    else if (Array.isArray(min)) return min[Math.floor(Math.random() * min.length)];
    else return Math.random() * min;
}