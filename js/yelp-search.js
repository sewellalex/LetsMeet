/**
 * Created by alexsewell on 10/22/15.
 */

var express = require('express');
var yelp=require("node-yelp");

var yelpSearch=express.Router();

yelpSearch.get('/data/:coordinates', function(req,res){
  var client = yelp.createClient({
    oauth: {
      "consumer_key": "9XFKuwBCaeq4dB4zCC_qpA",
      "consumer_secret": "HYWpUBmtMx5jZblQhNTLPqgFflk",
      "token": "68T0JHhR0d-tXl75UKcJrdYQJwo97IlH",
      "token_secret": "4d_j8wn2Tr40BgfUJOBcJM4ZsqM"
    }
  });

  client.search({
    ll: req.params.coordinates,
    term: 'restaurant',
    limit: 4,
    sort: 0,
    category_filter: "restaurants",
    radius_filter: 1609
  }).then(function(data) {
    res.send(data);
  });
});

module.exports = yelpSearch;