/**
 * Created by alexsewell on 10/15/15.
 */

var express = require('express');
var app = express();
var path = require('path');
var search = require('./js/yelp-search.js');

app.use('/search', search);

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('images'));
app.use(express.static('fonts'));


app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});