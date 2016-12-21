var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./moduls/todo');
var {User} = require('./moduls/user');

var app = express();

app.listen(3000, () => {
    console.log('server on port 3000');
});