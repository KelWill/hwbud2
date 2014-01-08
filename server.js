var express = require('express');
var firebase = require('firebase');

var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(request, response){
  response.sendFile('index.html');
});