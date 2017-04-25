/**
 *
 * Created by sumit on 4/22/2017.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var api = require('./routes/api');
var port = 4300;
var app = express();

//view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//setStatic Folder
app.use(express.static(path.join(__dirname, 'client')));
//body parser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api', api);

app.listen(port, function () {
    console.info('Server Started on port :' + port);
});

