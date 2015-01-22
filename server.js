var express = require('express');
var app = express();
 
  var obj = {
  "profession": "movie star",
  "known_for": ["comedy", "being different", "singing"],
  "gender": "female",
  "first letter of first name": "e",
  "extra hint": "Red A"
};

var msg = {}

app.get('/', function(req, res) {
   res.json(obj);
});


app.get('/Emma_Stone', function(req, res) {
  msg = {correct: "You are correct!"}
  res.json(msg);
});	

app.get('/:stuff', function(req, res) {
  msg = {incorrect: "haha nope"}
  res.json(msg);
});

app.listen(3000);