const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port, hostname)

console.log('running at: ' + 'http://' + hostname + ':' + port)
