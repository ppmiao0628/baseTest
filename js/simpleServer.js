/**
 * Created by kellerme on 2018/9/1
 */
let express = require('express');

let app = express();
app.get('/say', function (req, res) {
    let {wd, cb} = req.query;
    console.log(wd);
    res.send(`${cb}('hello,this from server')`);
});
console.log('start listen 8686');
app.listen(8686);