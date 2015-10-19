/**
 * Created by alexsewell on 10/15/15.
 */

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('css'));
app.use(express.static('js'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/results/:longOne/:latOne/:longTwo/:latTwo', function (request, response) {
  console.log(request.params.longOne);
  response.sendFile(path.join(__dirname + '/results.html'));
});

app.listen(1337);
console.log('1337 is the magic port!!');