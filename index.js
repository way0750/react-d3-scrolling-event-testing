var express = require('express');
var resume = require('./resume.js');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
}, express.static('./public'));

app.get('/resume', function (req, res, next) {
  console.log(resume);
  res.send(resume);
  res.end();
});

app.post('/resume', function(req, res, next) {
  console.log('got this: ', req.body);
  res.send('see this?');
  res.end();
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server running at ', port);
