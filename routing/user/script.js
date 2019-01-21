let lodePage = async (url) => {
    let response = await fetch(url);
    return await response.text();
}
let register = true;

function pagees() {
    if (register) {
        lodePage('register.html').then((text) => $('#from').innerHTML = text)
            .then(() => {
                $('#change').onclick = pagees;
                $('.register').onclick = rvalid;
                register = false;
            });

    } else {
        lodePage('logein.html').then((text) => $('#from').innerHTML = text)
            .then(() => {
                $('#change').onclick = pagees;
                $('.logein').onclick = logval;
                register = true;
            });
    }
}
pagees();

// main loget code
function logval() {
    //email
    if (!/\w[A-Za-z0-9\.]+\@\w{2,10}\.\w{2,5}/.test($('#username').value)) {
        return $("#em").style.color = '#a22';
    } else $("#em").style.color = '#FFF38B';

    //password
    if (!/.{8,16}/.test($('#password').value)) {
        return $("#pw").style.color = '#a22';
    } else $("#pw").style.color = '#FFF38B';
    return logein();
}

function logein() {
    let data = {
        username: $('#username').value,
        password: $('#password').value
    }
    console.log(data);

    fetch('/user/logein', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
}

function rvalid() {
    let b = new Date($('#age').value)
    let y = b.getFullYear();

    //first name
    if (!/\b\w+\b/i.test($('#fastname')
            .value)) {
        return $("#fn").style.color = '#a22';
    } else $("#fn").style.color = '#FFF38B';

    //last name
    if (!/\b\w+\b/i.test($('#lastname').value)) {
        return $("#ln").style.color = '#a22';
    } else $("#ln").style.color = '#FFF38B';

    //age
    if (!y || y > 2004 || y < 1950) {
        return $("#dob").style.color = '#a22';
    } else $("#dob").style.color = '#FFF38B';

    //gender
    if (($('input[name="gender"]:checked').value === "")) {
        return $("#gen").style.color = '#a22';
    } else $("#gen").style.color = '#FFF38B';

    //email
    if (!/\w[A-Za-z0-9\.]+\@\w{2,10}\.\w{2,5}/.test($('#email').value)) {
        return $("#em").style.color = '#a22';
    } else $("#em").style.color = '#FFF38B';

    //password
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
        .test($('#password')
            .value)) {
        return $("#pw").style.color = '#a22';
    } else $("#pw").style.color = '#FFF38B';
    return regist();
}




function regist() {
    let data = {
        fastname: $('#fastname').value,
        lastname: $('#lastname').value,
        age: $('#age').value,
        gender: $('input[name="gender"]:checked').value,
        email: $('#email').value,
        password: $('#password').value
    }
    console.log(data);
    fetch('/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
}