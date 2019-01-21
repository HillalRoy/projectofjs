const router = require('express').Router();
const fs = require('fs');
const bodyParser = require('body-parser');

//
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json());



//load json
let JSONdata = fs.readFileSync('./appd.json');
let JSOn = JSON.parse(JSONdata);


//add project
router.post('/add', (req, res) => {
    console.log(req.body);
    if (!JSOn[req.body['name']]) {

        let obj = {
            'name': req.body['name'],
            'title': req.body['title'],
            'path': '/' + req.body['path']
        }
        JSOn[req.body['name']] = obj;

        let save = JSON.stringify(JSOn, null, '\t');
        fs.writeFile('appd.json', save, (err) => {
            res.send({
                status : 'Unsucsess',
                Type : err
            });
        });
        res.send({
            status : 'Sucsess',
            Type : ''
        });
    } else {
        res.send({
            status : 'Unsucsess',
            Type : 'Already exist'
        });
    };
});

// nav load
router.get('/needjson', (req, res) => {

    res.send(JSOn);

});

router.post('/new', (req, res) => {
    res.send(req.body);
    console.log(req.body.im);
});















































module.exports = router;