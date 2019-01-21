const projectLi = document.querySelector("#pjs");
let projectLip = projectLi.getBoundingClientRect();
const projectUL = document.querySelector("#pjs ul");
const divProject = document.querySelector(".divProject");
const mobNav = document.querySelector(".mobnav");
divProject.style.transform = `translate(calc(-50% + ${projectLip.width/2}px))`;
divProject.style.top = `${projectLip.top + projectLip.height}px`;
const about = document.querySelector("#about");


function setup() {
    fetch('/api/needjson')
        .then(res => {
            if (res.ok) return res.json()
            else return {
                "Fail": {
                    "title": "loading fail",
                    "path": ""
                }
            }
        })
        .then(json => gotdata(json))
        .catch(err => console.log(err));



    mobNav.onclick = function () {
        document.querySelector("#nav").classList.toggle("active");
        divProject.style.cssText = ``;
    };
    // test();
}


function getNavHeight(){
    const about = document.querySelector('#about');
    return about.getBoundingClientRect().bottom;
}
//Test
function test() {
    // requestAnimationFrame(test);
    document.querySelector("#nav").classList.toggle("active");
    divProject.style.transform = ``;
    console.log('ok');
    setTimeout(test, 2000);
}


function gotdata(data) {
    for (key in data) {
        creatLi(projectUL, data[key]);
    }
}

function creatLi(el, data) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = data.path;
    a.innerHTML = `${data.title} <span> ${data.type ? data.type : ""}</span>`;
    li.appendChild(a);
    el.appendChild(li);
}

setup();