const router = require('express').Router();
const fs = require('fs');
const ndjson = require('ndjson');

let data = [];
fs.createReadStream('./data/tree.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
    data.push(obj);
  })


router.get('/tree', (req, res)=>{

    res.send(data[Math.floor(Math.random()*data.length)]);
})




module.exports = router;