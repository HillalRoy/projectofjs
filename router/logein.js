const router = require('express').Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

function insartdb(data) {
    data[date] = new Date;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let cdb = db.db("userdata");
        cdb.collection("customers").insertOne(data, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}



//
router.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
router.use(bodyParser.json());

let data = fs.readFileSync('user.json');
let userjson = JSON.parse(data.toString());

router.post('/logein/', (req, res) => {
    if (userjson[req.body.username].password === req.body.password) {
        let send = {
            stutas: "Sucess"
        }
    } else res.json({
        stutas: "Unucess"
    });
});
router.post('/register/', (req, res) => {
    if (userjson[req.body.email]) res.json({
        stutes: "Already exist"
    });
    insartdb(req.body);
    userjson[req.body.email] = req.body;
    fs.writeFile('user.json', JSON.stringify(userjson, null, '\t'), err => res.send = err);
    let send = {
        stutas: "Sucess"
    }
    res.json(send);

});








module.exports = router;