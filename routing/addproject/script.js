let but = document.querySelector('#add');

but.onclick = function () {
    let name = document.querySelector('#name').value;
    let title = document.querySelector('#title').value;
    let path = document.querySelector('#path').value;
    if (RegExp(/\w+/).test(name) && RegExp(/\w+/).test(title) && RegExp(/\w+/).test(path)) {
        let project = {
            name: name,
            title: title,
            path: path
        };
        let send = new XMLHttpRequest();
        send.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let json =  JSON.parse(this.responseText);
                $('#res').innerHTML = `<h1>${json.status}</h1><h3>${json.Type}</h3>`;
            }
        };
        send.open('post', '/api/add');
        send.setRequestHeader("Content-type", "application/json");
        send.send(JSON.stringify(project));
    } else {
        console.log('jbvcahsbdw');
    }



}