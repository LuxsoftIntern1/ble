var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));
app.use('/', express.static('public'));

http.listen(4000, function () {
    console.log('App listening on port 4000');
});