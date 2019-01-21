// const fs = require('fs');
const express = require('express');
const app = express();
const expressPublicIp = require('express-public-ip');


//routes...
const route = require('./router/router');
app.use('/api', route);
const tree = require('./router/tree');
app.use('/data', tree);
const user = require('./router/logein');
app.use('/user', user);

//port
let port = 4500;
app.use(expressPublicIp());

//home
app.use(express.static('routing'));


//start server
app.listen(port, listening);

function listening() {
    console.log('working on: ' + port);
}